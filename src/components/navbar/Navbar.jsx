import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { BiGlobe } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import Menu from "../menu/Menu";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(function () {
    function handleCloseMenu(e) {
      if (menuRef.current.contains(e.target)) return;
      setIsOpen(false);
    }
    document.addEventListener("mousedown", handleCloseMenu);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.brand}>
          <img src={Logo} alt="Airbnb Logo" className={styles.brandLogo} />
          <span className={styles.brandName}>airbnb</span>
        </Link>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBarWrapper}>
            <span className={styles.bold}>Anywhere</span>
            <span className={styles.bold}>Any week</span>
            <span className={styles.light}>Add guests</span>
            <IoSearchSharp className={styles.searchIcon} />
            <div className={styles.mini}>
              <span className={styles.miniBold}>Anywhere</span>
              <div className={styles.miniWrapper}>
                <span className={styles.miniLight}>Any week</span>
                <span>&bull;</span>
                <span className={styles.miniLight}>Add guests</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <span className={styles.seller}>Airbnb your home</span>
          <BiGlobe className={styles.globeIcon} />
          <div
            className={styles.menu}
            onClick={() => setIsOpen((prev) => !prev)}
            ref={menuRef}
          >
            <IoMdMenu className={styles.menuIcon} />
            <MdAccountCircle className={styles.profileIcon} />
            {isOpen && <Menu />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
