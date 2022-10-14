import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Context from "../../utils/Context";
import { useContext } from "react";
import Cart from "./Cart";
import jsonwebtoken from "jsonwebtoken";
import { HiOutlineLogout } from "react-icons/hi";
import Notification from "../utils/Notification";
import { env } from "process";
const Navbar = ({ url }) => {
  console.log(url);
  const [ToggleMenu, setToggleMenu] = useState(false);
  const [ShowNotifications, setShowNotifications] = useState(false);
  useEffect(() => {
    ToggleMenu
      ? document.body.style.setProperty("--translateOffset", "-35px")
      : document.body.style.setProperty("--translateOffset", "-475px");
  }, [ToggleMenu]);
  const {
    IsCartOpen,
    setIsCartOpen,
    setUserData,
    setIsAuthorized,
    IsAuthorized,
    UserData,
  } = useContext(Context);
  const handleLogout = () => {
    setIsAuthorized(false);
    setUserData({});
    localStorage.setItem("jwt", "");
  };
  async function authenticateWithJWT() {
    //todo: store jwt secret key to environment variables

    try {
      let result = jsonwebtoken.verify(
        localStorage.getItem("jwt"),
        "secret123"
      );
      let res = await fetch(`${env.PAGE_URL}/api/findUser`, {
        method: "POST",
        body: JSON.stringify({
          username: result?.data.username,
        }),
      });
      resjson = await res.json();
      console.log(resjson);
      setUserData(result?.data);
      setIsAuthorized(true);
    } catch ({ name }) {
      if (name === "TokenExpiredError") console.log(name);
      setIsAuthorized(false);
      setUserData({});
    }
  }

  useEffect(() => {
    authenticateWithJWT();
  }, []);
  return (
    <>
      {ShowNotifications && <Notification />}
      <nav className={`${styles.navBarMain} main-navbar`}>
        <div className={styles.logo} style={{ cursor: "pointer" }}>
          <div className={styles.menubtn}>
            <AiOutlineMenu
              fill="white"
              onClick={() => setToggleMenu(!ToggleMenu)}
            />
          </div>

          <Link href={"/  "} passHref>
            <a>
              <Image
                alt="Error"
                src={"/white-address-book-svgrepo-com.svg"}
                id={styles.logo}
                width={25}
                height={20}
                layout={"fixed"}
              ></Image>
            </a>
          </Link>

          <Link href={"/"} passHref>
            <span className={styles.logo_text}>pustika</span>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul className={`${styles.menu_items} menu-items`}>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/"}>Home</Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/components/Store"}>Store</Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/components/Categories"}>Categories</Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/components/Account"}>More</Link>
            </li>
          </ul>
        </div>
        <div className={styles.accountName}>
          <div
            className={styles.notification}
            onClick={() => {
              setShowNotifications(!ShowNotifications);
              console.log(url);
            }}
          >
            ☻
          </div>

          <Link href={"/components/Account"}>
            <div className={styles.imageContainer}>
              <Image
                src={UserData.userImage || "/assets/userImage.png"}
                layout={"fill"}
                alt="profile picture not found"
              ></Image>
            </div>
          </Link>

          <div className={styles.name}>{UserData.name}</div>
          <div className={styles.logout} onClick={handleLogout}>
            <HiOutlineLogout />
          </div>
        </div>

        <div className={styles.cart}>
          <Link href={"/components/SellBooks"} passHref>
            <button
              className={`${styles.sellbtn} btn-primary`}
              id={styles.sellbtn}
            >
              Sell your Book
            </button>
          </Link>
          <div
            style={{
              display: "inline-block",
              position: "absolute",
              top: "10px",
              right: "5px",
            }}
            onClick={() => {
              setIsCartOpen(!IsCartOpen);
            }}
          >
            <Link href={"#"}>
              <a>
                <Image
                  alt="Error"
                  className={styles.cartImage}
                  src={"/cart.svg"}
                  width={20}
                  height={20}
                  layout={"fixed"}
                ></Image>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {IsCartOpen && <Cart />}
    </>
  );
};

export async function getServerSideProps() {
  console.log(process.env.PAGE_URL);
  return {
    props: {
      url: process.env.PAGE_URL,
    },
  };
}
export default Navbar;
