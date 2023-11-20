import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.copyright}>@copyright A World Building App</p>
    </div>
  );
}

export default Footer;
