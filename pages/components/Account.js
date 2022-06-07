import styles from "./../../styles/Account.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Account = () => {
  const [TranslateProperties, setTranslateProperties] = useState({
    coverOffset: "0",
  });
  const handleClick = (e) => {
    console.log(e.target.id);
    e.target.id === "signup"
      ? setTranslateProperties({ coverOffset: "50%" })
      : setTranslateProperties({ coverOffset: "0%" });
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
        <div className={styles.signupInfo}>
          <h2>Create an Account</h2>
          <p>Its free and It just takes couple of seconds. </p>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left-long-to-line" />
        </div>
        {/* <div className={styles.loginInfo}></div> */}
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
        </div>
        <div className={styles.login}>
          <h3>LOGIN HERE</h3>
        </div>
      </div>
    </main>
  );
};
export default Account;
