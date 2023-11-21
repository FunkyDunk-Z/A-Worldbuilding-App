import styles from "./SavingThrows.module.css";

function SavingThrows({ abilityScores, data }) {
  let savingThrowMod = 0;
  return (
    <div className={styles.containerSavingThrows}>
      {abilityScores.map((el, i) => {
        if (el.savingThrow.isProficient === true) {
          savingThrowMod = el.abilityMod() + data.proficiency;
        } else {
          savingThrowMod = el.abilityMod();
        }
        return (
          <div key={i} className={styles.container}>
            <h3 className={styles.abilityName}>{el.abrv}</h3>
            <div className={styles.containerMod}>
              <p className={styles.score}>+ {savingThrowMod}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SavingThrows;
