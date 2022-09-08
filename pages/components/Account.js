import styles from "./../../styles/Account.module.css";
import { useState, useRef, useEffect, useContext } from "react";
import FontAwesomeIcon, { faArrowLeft, faEdit } from "./assets/FontAwesome";
import bcrypt from "bcryptjs";
import Context from "../../utils/Context";
import Image from "next/image";

const Account = ({ pageurl }) => {
  const [SignupMessage, setSignupmessage] = useState({ Message: "", type: "" });
  const [LoginMessage, setLoginMessage] = useState("");
  const [SignupLoading, setSignupLoading] = useState(false);
  const [showPINBox, setshowPINBox] = useState(false);
  const coverRef = useRef();
  const { IsAuthorized, setIsAuthorized, UserData, setUserData } =
    useContext(Context);
  const [TranslateProperties, setTranslateProperties] = useState({
    coverOffset: "0",
  });

  const [FormDataOBJ, setFormDataOBJ] = useState({});
  const [DescriptionProperties, setDescriptionProperties] = useState({
    title: "Login To Your Account",
    description: "Login with your Email Id and Password to buy or sell books",
    rotate: "180deg",
  });
  const [OTP, setOTP] = useState({
    pin: "",
    buttonText: "SEND OTP",
    isLoading: false,
  });
  const [ChangedUserData, setChangedUserData] = useState({});
  useEffect(() => {
    coverRef.current?.style.setProperty("--rotateDegree", "180deg");
    document.documentElement.style.setProperty("--displayPropSignup", "none");
    document.documentElement.style.setProperty("--displayPropLogin", "block");
  }, []);
  const findUser = async (username) => {
    let userData = await fetch(`${pageurl}/api/findUser`, {
      method: "POST",
      body: JSON.stringify({ username }),
    });
    return await userData.json();
  };
  const handleClick = (e) => {
    if (e.target.id === "signup") {
      setTranslateProperties({ coverOffset: "50%" });
      setDescriptionProperties({
        title: "Create A New Account",
        description: "Its absolutely free and It just takes couple of seconds.",
        rotate: "0deg",
      });

      document.documentElement.style.setProperty(
        "--displayPropSignup",
        "block"
      );
      document.documentElement.style.setProperty("--displayPropLogin", "none");
      coverRef.current.style.setProperty("--rotateDegree", "0deg");
    } else {
      setTranslateProperties({ coverOffset: "0%" });
      setDescriptionProperties({
        title: "Login To Your Account",
        description:
          "Login with your Email Id and Password to buy or sell books",
        rotate: "180deg",
      });
      coverRef.current.style.setProperty("--rotateDegree", "180deg");
      document.documentElement.style.setProperty("--displayPropSignup", "none");
      document.documentElement.style.setProperty("--displayPropLogin", "block");
    }
  };
  useEffect(() => {
    //for complete user data

    setTimeout(async () => {
      console.log(UserData, ChangedUserData);
      console.log(await findUser(UserData.username));
    }, 2000);
  }, []);

  const getOTP = () => {
    if (ChangedUserData?.phone?.length === 10) {
      setOTP({ ...OTP, pin: Math.round(Math.random() * 1000000).toString() });
    }
    // console.log(OTP.pin);
  };

  const handleSignup = async (name, username, email, password) => {
    setSignupLoading(true);
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    console.log("adding user.......");
    let res = await fetch(`${pageurl}/api/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password: hash,
      }),
    });
    let jsonres = await res.json();

    setSignupmessage(jsonres);
    setSignupLoading(false);
    setTimeout(() => {
      setSignupmessage({});
    }, 2000);
  };
  const handleLogin = async (e, email, password) => {
    e.target.textContent = "logging you in";
    e.target.disabled = true;
    let res = await fetch(`${pageurl}/api/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    let { data, jwt } = await res.json();
    setUserData(data);
    console.log(data);
    localStorage.setItem("jwt", jwt);

    setChangedUserData(data);

    let passwordHash = data?.password;

    bcrypt.compare(password, passwordHash, (error, result) => {
      if (result) {
        setIsAuthorized(result);
      } else {
        setLoginMessage("Invalid UserName or Password");
        setTimeout(() => {
          setLoginMessage("");
        }, 2000);
      }
      console.log("YOU ARE", result ? "" : "NOT", "AURHORIZED!");
    });
    e.target.textContent = "Logging You In";
    e.target.disabled = true;
    setTimeout(() => {
      e.target.textContent = "Log In";
      e.target.disabled = false;
    });
  };

  const handleImageChangeButtonClick = async (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    let formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "profile_pictures");
    setFormDataOBJ(formData);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setChangedUserData({ ...ChangedUserData, userImage: reader.result });
    };
  };
  const handleSaveChanges = async () => {
    //posting the profile picture to cloudinary
    console.log(FormDataOBJ);
    let data = await fetch(
      "https://api.cloudinary.com/v1_1/ddlejmdqj/image/upload",
      {
        method: "POST",
        body: FormDataOBJ,
      }
    );
    let { secure_url } = await data.json();
    console.log(JSON.stringify({ ...ChangedUserData, userImage: secure_url }));
    //setting the profile picture and other details to mongodb
    fetch(`${pageurl}/api/updateUser`, {
      method: "POST",
      body: JSON.stringify({ ...ChangedUserData, userImage: secure_url }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleSendOTP = (e) => {
    handleVerifyPhoneNumber(
      e,
      "+19379155657",
      `+977${ChangedUserData?.phone}`,
      `DEAR ${UserData?.name}, Your OTP for phone verification is ${OTP.pin}`
    );
    console.log("otp pin", OTP.pin);
    getOTP();
    console.log(ChangedUserData?.phone);

    setOTP(() => {
      return {
        ...OTP,
        buttonText: "Sending OTP",
      };
    });
    e.target.disabled = true;
    setTimeout(() => {
      setOTP(() => {
        return {
          ...OTP,
          buttonText: "OTP SENT! CHECK YOUR PHONE YOU IDIOT",
          isLoading: true,
        };
      });
      setshowPINBox(true);

      e.target.disabled = false;
    }, 2000);
  };
  return (
    <div className={styles.maincontainer}>
      {IsAuthorized && (
        <div className={styles.accountDashBoard}>
          <div className={styles.mainDashboard}>
            <div className={styles.topSection}>
              <div className={styles.userImage}>
                <Image
                  src={
                    ChangedUserData?.userImage ||
                    UserData.userImage ||
                    "/assets/userImage.png"
                  }
                  width={"150"}
                  height={"150"}
                  alt="image unavailable"
                ></Image>
                <div className={styles.editImageButton}>
                  <label htmlFor="imgInput">
                    <input
                      type="file"
                      name=""
                      id="imgInput"
                      onChange={(e) => handleImageChangeButtonClick(e)}
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={`${styles.editBtn} fa-lg`}
                      width={50}
                    ></FontAwesomeIcon>
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.bottomSection}>
              <div className={styles.Name}>{UserData?.name}</div>
              <div className={styles.username}>@{UserData?.username}</div>
              <div className={styles.email}>{UserData?.email}</div>
            </div>
            <div className={styles.additionalInfo}>
              <label htmlFor="phone">
                Phone-no:
                <input
                  type="number"
                  value={ChangedUserData?.phone || ""}
                  placeholder="Enter 10 digit phone number"
                  onChange={(e) => {
                    setChangedUserData((prev) => {
                      return {
                        ...prev,
                        phone: e.target.value,
                      };
                    });
                  }}
                />
              </label>
              <label htmlFor="address">
                Address:{" "}
                <textarea
                  value={ChangedUserData?.address || ""}
                  placeholder="Be descriptive as possible"
                  onChange={(e) => {
                    setChangedUserData((prev) => {
                      return {
                        ...prev,
                        address: e.target.value,
                      };
                    });
                  }}
                ></textarea>
              </label>
            </div>
            <div className={styles.submitBtn}>
              <button
                className="btn-primary"
                disabled={ChangedUserData?.phone?.length !== 10}
                onClick={async (e) => {
                  e.target.innerText = "Saving Changes";
                  e.target.disabled = true;
                  await handleSaveChanges();
                  e.target.innerText = "Save Changes";
                  e.target.disabled = false;
                }}
              >
                Save
              </button>
              <button
                onClick={async () => {
                  console.log(ChangedUserData);
                  console.log(await findUser(ChangedUserData.username));
                }}
              >
                Test
              </button>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      {!IsAuthorized && (
        <div className={styles.signupOrLogin}>
          <main className={styles.main}>
            <style jsx>{`
              .cover {
                left: ${TranslateProperties.coverOffset};
              }

              .label {
                left: ${TranslateProperties.coverOffset};
              }
            `}</style>
            <div className={styles.switch}>
              <span className={`${styles.label} label`}></span>
              <span
                onClick={handleClick}
                id="login"
                className={styles.loginText}
              >
                LOGIN
              </span>
              <span
                onClick={handleClick}
                id="signup"
                className={styles.signupText}
              >
                SIGN UP
              </span>
            </div>
            <div className={`${styles.cover} cover`}>
              <div className={styles.signUpInfo} ref={coverRef}>
                <h2>{DescriptionProperties.title}</h2>
                <p>{DescriptionProperties.description} </p>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className={styles.arrow}
                  style={{
                    transform: `rotate(${DescriptionProperties.rotate})`,
                  }}
                />
              </div>
            </div>
            <div className={styles.mainBox}>
              <div
                className={styles.signup}
                style={{
                  opacity: SignupLoading ? "0.5" : "1",
                }}
              >
                <h3>SIGN UP HERE</h3>
                <label htmlFor="name">
                  Your Name
                  <input id="name" type="text" placeholder="John Doe"></input>
                </label>
                <label htmlFor="username">
                  username
                  <input
                    id="username"
                    type="text"
                    placeholder="John Doe"
                  ></input>
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="text"
                    placeholder="example@xyz.com"
                  ></input>
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    id="password"
                    type="password"
                    placeholder="*****"
                  ></input>
                </label>
                <label htmlFor="confirmPassword">
                  Confirm Password
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="******"
                  ></input>
                </label>
                <div className={styles.buttonContainer}>
                  <button
                    className={`btn-primary ${styles.signUpButton}`}
                    disabled={SignupLoading}
                    onClick={(e) => {
                      let name =
                        e.target.parentElement.parentElement.querySelector(
                          "#name"
                        ).value;
                      let email =
                        e.target.parentElement.parentElement.querySelector(
                          "#email"
                        ).value;
                      let password =
                        e.target.parentElement.parentElement.querySelector(
                          "#password"
                        ).value;
                      let username =
                        e.target.parentElement.parentElement.querySelector(
                          "#username"
                        ).value;
                      if (
                        password ===
                        e.target.parentElement.parentElement.querySelector(
                          "#confirmPassword"
                        ).value
                      ) {
                        handleSignup(name, username, email, password);
                      } else {
                        alert("Password do not match");
                      }
                    }}
                  >
                    Create Account
                  </button>
                </div>
                <div
                  style={{
                    backgroundColor:
                      SignupMessage.type === "Success" ? "lightgreen" : "red",
                    width: "100%",

                    position: "relative",
                    bottom: "-10px",
                    display: "grid",
                    placeContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {SignupMessage.message}
                </div>
              </div>
              <div className={styles.login}>
                <h3>LOGIN HERE</h3>
                <label htmlFor="loginName">Enter Your Email Id</label>
                <input
                  type="email"
                  placeholder="your email"
                  id="loginName"
                ></input>
                <label htmlFor="passwordLogin">Enter Your Password</label>
                <input
                  type="password"
                  placeholder="your password"
                  id="passwordLogin"
                ></input>
                <div className={styles.buttonContainer}>
                  <button
                    className={`btn-primary ${styles.signUpButton}`}
                    onClick={(e) => {
                      let email =
                        e.target.parentElement.parentElement.querySelector(
                          "#loginName"
                        ).value;
                      let password =
                        e.target.parentElement.parentElement.querySelector(
                          "#passwordLogin"
                        ).value;

                      handleLogin(e, email, password);
                    }}
                  >
                    Login
                  </button>
                </div>
                <div
                  style={{
                    color: "red",
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                >
                  {LoginMessage}
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Account;
export async function getServerSideProps() {
  return {
    props: {
      pageurl: process.env.PAGE_URL,
    },
  };
}
