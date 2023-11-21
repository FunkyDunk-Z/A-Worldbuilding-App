import styles from "./HitPoints.module.css";
import { useState } from "react";
import MyButton from "./MyButton";

function HitPoints() {
  const [count, setCount] = useState(0);
  const [currentHp, setCurrentHp] = useState(30);
  const [isUnconcious, setIsUnconcious] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const maxHp = 50;

  const handleChange = (e) => {
    const parsed = parseInt(e.target.value);
    setCount(parsed || 0);
  };

  const heal = () => {
    if (currentHp < maxHp) {
      const totalHp = currentHp + count;
      if (totalHp > maxHp) {
        setCurrentHp(maxHp);
      } else {
        setCurrentHp(totalHp);
      }
    }
  };
  const damage = () => {
    if (currentHp > 0) {
      const totalHp = currentHp - count;
      console.log(totalHp);
      if (totalHp < currentHp) {
        setCurrentHp(0);
      } else {
        setCurrentHp(totalHp);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Hit Points</h3>
      <p className={styles.current}>Current</p>
      <p className={styles.max}>Max</p>
      <p className={styles.hitPoints}>{currentHp}</p>
      <p className={styles.hitPoints}>/</p>
      <p className={styles.hitPoints}>{maxHp}</p>
      <div className={styles.containerBtn}>
        <MyButton handleClick={heal} label="Heal" />
        <input
          className={styles.input}
          id="hp"
          type="number"
          value={count}
          onChange={handleChange}
        />
        <MyButton handleClick={damage} label="Damage" />
      </div>
    </div>
  );
}

export default HitPoints;
