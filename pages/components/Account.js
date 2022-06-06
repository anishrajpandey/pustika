import styles from "./../../styles/Account.module.css";
import { useState } from "react";
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
      `}</style>
      <div className={styles.switch}>
        <span className={styles.label}></span>
        <span onClick={handleClick} id="login">
          LOGIN
        </span>
        <span onClick={handleClick} id="signup">
          SIGN UP
        </span>
      </div>
      <div className={`${styles.cover} cover`}></div>
      <div className={styles.mainBox}>
        <div className={styles.login}>
          <h1>LOGIN HERE</h1>
        </div>
        <div className={styles.signup}>
          <h1>SIGN UP HERE</h1>
        </div>
      </div>
    </main>
  );
};
export default Account;
