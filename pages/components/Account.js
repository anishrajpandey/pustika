import styles from "./../../styles/Account.module.css";
import { useState, useRef, useEffect, useContext } from "react";
import FontAwesomeIcon, { faArrowLeft, faEdit } from "./assets/FontAwesome";
import bcrypt from "bcryptjs";
import Context from "../../utils/Context";
import Image from "next/image";

const Account = ({ pageurl }) => {
  const [UserData, setUserData] = useState({});
  const [SignupMessage, setSignupmessage] = useState({ Message: "", type: "" });
  const [LoginMessage, setLoginMessage] = useState("");
  const [SignupLoading, setSignupLoading] = useState(false);
  const coverRef = useRef();
  const { IsAuthorized, setIsAuthorized } = useContext(Context);
  const [TranslateProperties, setTranslateProperties] = useState({
    coverOffset: "0",
  });
  const [DescriptionProperties, setDescriptionProperties] = useState({
    title: "Login To Your Account",
    description: "Login with your Email Id and Password to buy or sell books",
    rotate: "180deg",
  });
  const [ChangedUserData, setChangedUserData] = useState({});
  useEffect(() => {
    coverRef.current?.style.setProperty("--rotateDegree", "180deg");
    document.documentElement.style.setProperty("--displayPropSignup", "none");
    document.documentElement.style.setProperty("--displayPropLogin", "block");
  }, []);
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
  const handleLogin = async (email, password) => {
    let res = await fetch(`${pageurl}/api/getUserInfo`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    let { data } = await res.json();
    setUserData(data);
    setChangedUserData(data);
    console.log(data);
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
  };
  const handleImageChangeButtonClick = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setChangedUserData({ ...ChangedUserData, userImage: reader.result });
    };
  };
  const handleVerifyPhoneNumber = async(e,
    sender= "+19379155657",
    receiver = "+9779866041467",
    text = "hello world"
  ) => {
    console.log(sender)

    let info =    JSON.stringify ({
      from:sender,
      to:receiver,
      message: text,
    });

    let resp = await fetch(`${pageurl}/api/twilio`, {
      method: "POST",
      body: info
    });
 
    let jsonres = await resp.json();

    console.log(jsonres);
  };
  return (
    <div className={styles.maincontainer}>
      {IsAuthorized && (
        <div className={styles.accountDashBoard}>
          <div className={styles.mainDashboard}>
            <div className={styles.topSection}>
              <div className={styles.userImage}>
                <Image
                  src={ChangedUserData?.userImage || "/assets/userImage.png"}
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
                  type="tel"
                  value={ChangedUserData?.phone}
                  placeholder="Enter 10 digit phone number"
                  onChange={(e) => {
                    setChangedUserData({
                      ...ChangedUserData,
                      phone: e.target.value,
                    });
                  }}
                />
              </label>
            </div>
            <div className={styles.submitBtn}>
              <button className="btn-primary">Save</button>
            </div>
          </div>
        </div>
      )}

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
                  }}               >
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

                      handleLogin(email, password);
                    }}
                  >
                    Login
                  </button>
                  <button onClick={handleVerifyPhoneNumber}>TSSSS</button>
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
