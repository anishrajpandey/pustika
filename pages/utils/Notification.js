import styles from "./../../styles/Notification.module.css";
import Context from "./../../utils/Context";
import { useState, useContext, useEffect } from "react";
const Notification = () => {
  const [Notifications, setNotifications] = useState([]);
  const { UserData } = useContext(Context);
  const fetchNotification = async () => {
    const res = await fetch(`${process.env.PAGE_URL}/api/getNotification`, {
      method: "POST",
      body: JSON.stringify({ id: UserData._id }),
    });
    const { notifications } = await res.json();
    setNotifications(notifications);
  };
  useEffect(() => {
    fetchNotification();
  }, []);
  return (
    <div className={styles.mainNotification}>
      <ol>
        <h3 align="center">Your Notifications</h3>
        {Notifications.map((e) => {
          return (
            <li key={Math.random()}>
              User <span className={styles.highlight}> {e.buyerName}</span>{" "}
              wants to buy the book{" "}
              <span className={styles.highlight}> {e.bookName}</span> from you.
            </li>
          );
        })}
        {/* <li>Notification-01</li>
        <li>Notification-02</li>
        <li>Notification-03</li>
        <li>Notification-04</li>
        <li>Notification-05</li>
        <li>Notification-06</li> */}
      </ol>
    </div>
  );
};

export default Notification;
// dfd
