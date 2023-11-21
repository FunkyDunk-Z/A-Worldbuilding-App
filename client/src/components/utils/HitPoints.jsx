import styles from "./HitPoints.module.css";
import { useState } from "react";
import MyButton from "./MyButton";

function HitPoints() {
  const [count, setCount] = useState(0);
  const maxHp = 50;

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.label}>Hit Points</h3>
      <p className={styles.hitPoints}>
        {count} / {maxHp}
      </p>
      <MyButton handleClick={increment} label="Heal" />
      <MyButton handleClick={decrement} label="Damage" />
    </div>
  );
}

export default HitPoints;
