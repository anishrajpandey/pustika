import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  return (
    <>
      {/* <style jsx>{`
        .menubtn {
          position: absolute;
          left: 0;
          top: 50px;
          font-size: 2rem;
        }
        ul.menu-items {
          transform: ${!mobileView ? "translateX(-20rem)" : "translateX(0rem)"};
        }
        nav.main-navbar {
          height: ${mobileView ? "220px" : "50px"};
        }
      `}</style> */}
      <nav className={`${styles.navBarMain} main-navbar`}>
        <div className={styles.logo}>
          <div className={styles.menubtn}>
            <AiOutlineMenu />
          </div>
          <Link href={"/"}>
            <>
              <Image
                src={"/open-book.png"}
                id={styles.logo}
                width={40}
                height={40}
              ></Image>
              <span>pustika</span>
            </>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul className={`${styles.menu_items} menu-items`}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Store</Link>
            </li>
            <li>
              <Link href={"/"}>Categories</Link>
            </li>
            <li>
              <Link href={"/"}>profile</Link>
            </li>
          </ul>
        </div>
        <div className={styles.cart}>
          <HiOutlineShoppingCart />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// function getWindowDimension() {
// let { innerWidth: width, innerHeight: height } = window;
//   let width = window?.innerWidth;
//   let height = window?.innerHeight;
//   return {
//     width,
//     height,
//   };
// }
