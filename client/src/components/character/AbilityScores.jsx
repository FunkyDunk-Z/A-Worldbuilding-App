import styles from "./AbilityScores.module.css";

function AbilityScores({ abilityScores }) {
  return (
    <div className={styles.containerScores}>
      {abilityScores.map((el, i) => {
        return (
          <div key={i} className={styles.container}>
            <h3 className={styles.abilityName}>{el.abilityName}</h3>
            <div className={styles.containerMod}>
              <p className={styles.score}>+ {el.abilityMod()}</p>
            </div>
            <div className={styles.containerScore}>
              <p className={styles.score}>{el.abilityScore}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AbilityScores;
