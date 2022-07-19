import styles from "./../../styles/Account.module.css";
import { useState, useRef, useEffect } from "react";
import FontAwesomeIcon, { faArrowLeft } from "./assets/FontAwesome";
import bcrypt from "bcryptjs";
const Account = ({ pageurl }) => {
  const [SignupMessage, setSignupmessage] = useState({ Message: "", type: "" });
  const coverRef = useRef();

  const [TranslateProperties, setTranslateProperties] = useState({
    coverOffset: "0",
  });
  const [DescriptionProperties, setDescriptionProperties] = useState({
    title: "Login To Your Account",
    description: "Login with your Email Id and Password to buy or sell books",
    rotate: "180deg",
  });
  useEffect(() => {
    coverRef.current.style.setProperty("--rotateDegree", "180deg");
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
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    console.log(hash);
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
    console.log(jsonres);
    setSignupmessage(jsonres);
  };
  return (
    <div className={styles.maincontainer}>
      <div className={styles.accountDashBoard}>
        {/* todo later 😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢 */}
      </div>
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
            <span onClick={handleClick} id="login" className={styles.loginText}>
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
            <div className={styles.signup}>
              <h3>SIGN UP HERE</h3>
              <label htmlFor="name">
                Your Name
                <input id="name" type="text" placeholder="John Doe"></input>
              </label>
              <label htmlFor="username">
                username
                <input id="username" type="text" placeholder="John Doe"></input>
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
                    SignupMessage.type === "Success" ? "green" : "red",
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
                <button className={`btn-primary ${styles.signUpButton}`}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
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
