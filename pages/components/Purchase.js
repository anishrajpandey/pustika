import Image from "next/image";
import styles from "./../../styles/Purchase.module.css";
import { useState } from "react";
import Alert from "../utils/Alert";
const Purchase = () => {
  const [Loading, setLoading] = useState(false);
  const [ShowAlert, setShowAlert] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("Default");
  const [AlertSuccess, setAlertSuccess] = useState(false);
  let alertMessage = {
    message: AlertMessage,
    success: AlertSuccess,
  };
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={"/book-images/A Brief History of Time.webp"}
            layout={"fill"}
            alt={""}
          ></Image>
        </div>
        <h2>A Brief History of Time</h2>
        <h3>Rs.2000</h3>
        <div className={styles.btnContainer}>
          <button
            className="btn-primary"
            onClick={(e) => {
              setLoading(true);
              e.target.innerText = "Loading...";
              e.target.disabled = true;

              //todo //code for actually sending notifications

              //to define property of alert message
              if (false) {
                setAlertMessage("Notification Sent to the Seller");
                setAlertSuccess(true);
              } else {
                setAlertMessage("Some Error Occured. Try Again  ");
                setAlertSuccess(false);
              }
              setTimeout(() => {
                setLoading(false);
                setShowAlert(true);
                e.target.disabled = false;
                e.target.innerText = "Confirm Purchase";
              }, 4000);
              setTimeout(() => {
                setShowAlert(false);
              }, 9000);
            }}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
      {Loading && (
        <div className={styles.loadingContainer}>
          <Image
            src={"/loader.gif"}
            width={500}
            height={400}
            alt="unavailable"
          ></Image>
          Loading...
        </div>
      )}
      {ShowAlert && (
        <Alert message={alertMessage.message} success={alertMessage.success} />
      )}
    </div>
  );
};

export default Purchase;
