import styles from "./DitDCard.module.css";
import Placeholder from "../../assets/placeholder.png";
import Icon from "../../assets/well-shit.ico";

function Card() {
  return (
    <div className={styles.container}>
      <h3 className={styles.cardName}>Card Name</h3>
      <img className={styles.cardIcon} src={Icon} alt={"Card Type symbol"} />
      <img
        className={styles.placeholder}
        src={Placeholder}
        alt={"This is a place holder image"}
      />
      <p className={styles.cardType}>Card type:</p>
      <p className={styles.type}>Type of card</p>
      <p className={styles.cardSubtype}>Card sub-type:</p>
      <p className={styles.subtype}>Subtype of card</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsum,
        aliquid maiores laudantium quod nostrum minima aliquam eius vitae ullam
        similique facere quos in expedita corrupti quidem omnis pariatur odio
        nihil nulla debitis neque quaerat a! Natus quod inventore atque. Modi
        optio, ipsa quia velit non repudiandae accusantium consequuntur hic!
      </p>
      <p className={styles.value}>0 Gold</p>
    </div>
  );
}

export default Card;
