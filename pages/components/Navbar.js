import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    ToggleMenu
      ? document.body.style.setProperty("--translateOffset", "-35px")
      : document.body.style.setProperty("--translateOffset", "-475px");
  }, [ToggleMenu]);

  return (
    <>
      <nav className={`${styles.navBarMain} main-navbar`}>
        <div className={styles.logo} style={{ cursor: "pointer" }}>
          <div className={styles.menubtn}>
            <AiOutlineMenu
              fill="white"
              onClick={() => setToggleMenu(!ToggleMenu)}
            />
          </div>
          <Link href={"/  "}>
            <Image
              alt="Error"
              src={"/white-address-book-svgrepo-com.svg"}
              id={styles.logo}
              width={25}
              height={20}
              layout={"fixed"}
            ></Image>
          </Link>
          <Link href={"/"}>
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
              <Link href={"/"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className={styles.cart}>
          <button className={`${styles.sellbtn}"btn-primary"`}>
            Sell your Book
          </button>
          <Link href={"/components/Cart"}>
            <a>
              <img
                alt="Error"
                className={styles.cartImage}
                src={"/cart.svg"}
                width={20}
                height={20}
                layout={"fixed"}
              ></img>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
