import styles from "./../../styles/Account.module.css";
import { useState, useRef, useEffect } from "react";
import FontAwesomeIcon, { faArrowLeft } from "./assets/FontAwesome";
const Account = () => {
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
  }, []);
  const handleClick = (e) => {
    console.log(e.target.id);

    if (e.target.id === "signup") {
      setTranslateProperties({ coverOffset: "50%" });
      setDescriptionProperties({
        title: "Create A New Account",
        description: "Its absolutely free and It just takes couple of seconds.",
        rotate: "0deg",
      });
      coverRef.current.style.setProperty("--rotateDegree", "0deg");
      console.log(coverRef.current);
    } else {
      setTranslateProperties({ coverOffset: "0%" });
      setDescriptionProperties({
        title: "Login To Your Account",
        description:
          "Login with your Email Id and Password to buy or sell books",
        rotate: "180deg",
      });
      coverRef.current.style.setProperty("--rotateDegree", "180deg");
    }
  };
  return (
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
        <span onClick={handleClick} id="signup" className={styles.signupText}>
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
          {console.log(DescriptionProperties.rotate)}
        </div>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.signup}>
          <h3>SIGN UP HERE</h3>
          <label htmlFor="name">
            Name
            <input id="name" type="text" placeholder="John Doe"></input>
          </label>
          <label htmlFor="email">
            Email
            <input id="email" type="text" placeholder="example@xyz.com"></input>
          </label>
          <label htmlFor="password">
            Password
            <input id="password" type="password" placeholder="*****"></input>
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
            <button className={`btn-primary ${styles.signUpButton}`}>
              Create Account
            </button>
          </div>
        </div>
        <div className={styles.login}>
          <h3>LOGIN HERE</h3>
        </div>
      </div>
    </main>
  );
};
export default Account;
// Hekdf
// HELlo tell my mom i am sr
