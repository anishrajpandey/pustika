import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    ToggleMenu
      ? document.body.style.setProperty("--translateOffset", "-32px")
      : document.body.style.setProperty("--translateOffset", "-410px");
  }, [ToggleMenu]);

  return (
    <>
      <style jsx>{``}</style>
      <nav className={`${styles.navBarMain} main-navbar`}>
        <div className={styles.logo} style={{ cursor: "pointer" }}>
          <div className={styles.menubtn}>
            <AiOutlineMenu
              fill="white"
              onClick={() => setToggleMenu(!ToggleMenu)}
            />
          </div>
          <Link href={"/"}>
            <>
              <Image
                src={"/white-address-book-svgrepo-com.svg"}
                id={styles.logo}
                width={25}
                height={20}
                layout={"fixed"}
              ></Image>
              <span className={styles.logo_text}>pustika</span>
            </>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul className={`${styles.menu_items} menu-items`}>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/"}>Home</Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/"}>Store</Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/"}>Categories</Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href={"/"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className={styles.cart}>
          <Link href={"#"}>
            <a>
              <Image
                className={styles.cartImage}
                src={"/cart.svg"}
                width={20}
                height={20}
                layout={"fixed"}
              ></Image>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
