import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

function Navbar() {
  const mobile = window.innerWidth < 768;
  const [isMobile, setIsMobile] = useState(mobile);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth >= 768) {
        setIsActive(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  const toggleNavBtn = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`${styles.burgerIcon} ${isActive ? styles.open : ""}`}
        onClick={toggleNavBtn}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <div
        className={
          isMobile
            ? `${styles.containerSidebar} ${isActive ? styles.open : ""}`
            : `${styles.containerNavbar}`
        }
      >
        <Link className={styles.link} to={"/"} onClick={toggleNavBtn}>
          Home
        </Link>
        <Link className={styles.link} to={"/codex"} onClick={toggleNavBtn}>
          Codex
        </Link>
      </div>
    </>
  );
}

export default Navbar;
