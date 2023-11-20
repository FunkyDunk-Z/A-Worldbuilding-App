import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Header.module.css";

import Navbar from "./Navbar";
import logo from "../../assets/dragon.jpg";

function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.logoPlacement} to="/">
        <img
          className={styles.logo}
          src={logo}
          alt="A worldbuilding app logo"
        />
      </Link>
      <h1 className={styles.title}>A World Building App</h1>
      <Navbar />
    </div>
  );
}

export default Header;
