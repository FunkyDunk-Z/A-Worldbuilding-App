import styles from "./HitPoints.module.css";
import { useState, useEffect } from "react";
import MyButton from "../utils/MyButton";

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
      if (count <= maxHp - currentHp) {
        setCurrentHp(currentHp + count);
        setCount(0);
      } else {
        setCurrentHp(maxHp);
        setCount(0);
      }
    }
  };
  const damage = () => {
    if (currentHp > 0) {
      if (count <= currentHp) {
        setCurrentHp(currentHp - count);
        setCount(0);
      } else {
        setCurrentHp(0);
        setCount(0);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Hit Points</h3>
        <div className={styles.containerBtn}>
          <MyButton handleClick={heal} theme={"hpHeal"} label="Heal" />
          <input
            className={styles.input}
            id="hp"
            type="number"
            value={count}
            min={0}
            max={maxHp}
            onChange={handleChange}
          />
          <MyButton handleClick={damage} theme={"hpDamage"} label="Damage" />
        </div>
        <p className={styles.current}>Current</p>
        <p className={styles.max}>Max</p>
        <p className={styles.hitPoints}>{currentHp}</p>
        <p className={styles.hitPoints}>/</p>
        <p className={styles.hitPoints}>{maxHp}</p>
        <p className={styles.temporary}>Temporary Hit Points</p>
        <input
          className={styles.inputTempHp}
          id="tempHp"
          type="number"
          defaultValue={0}
          min={0}
        />
      </div>
    </>
  );
}

export default HitPoints;
