import Image from "next/image";
import styles from "./../../styles/Purchase.module.css";
import { useState, useContext } from "react";
import Alert from "../utils/Alert";
import Context from "../../utils/Context";

const Purchase = ({ bookImage, bookName, price, bookId }) => {
  const [Loading, setLoading] = useState(false);
  const [ShowAlert, setShowAlert] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("Default");
  const [AlertSuccess, setAlertSuccess] = useState(false);
  let alertMessage = {
    message: AlertMessage,
    success: AlertSuccess,
  };
  const { setConfirmPurchaseOptions } = useContext(Context);
  async function handleConfirmPurchase(e) {
    setLoading(true);
    e.target.innerText = "Loading...";
    e.target.disabled = true;

    //todo //code for actually sending notifications
    // let res=await fetch(``)
    console.log(process.env.PAGE_URL);

    //to define property of alert message
    if (true) {
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
      setConfirmPurchaseOptions((prev) => {
        return {
          ...prev,
          show: false,
        };
      });
    }, 9000);
  }
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <h2 align="center">Are You Sure?</h2>
        <div className={styles.imageContainer}>
          <Image src={bookImage} layout={"fill"} alt={""}></Image>
        </div>
        <h2>{bookName}</h2>
        <h3>Rs.{price}</h3>
        <div className={styles.btnContainer}>
          <button
            className="btn-primary"
            onClick={(e) => {
              handleConfirmPurchase(e);
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
