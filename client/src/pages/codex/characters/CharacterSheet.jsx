import styles from "./CharacterSheet.module.css";
import AbilityScores from "../../../components/cards/AbilityScores";
import HitPoints from "../../../components/utils/HitPoints";
import characterPortrait from "../../../assets/well-shit.ico";

function CharacterSheet() {
  const abilityScores = [
    {
      abilityName: "Strength",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
    },
    {
      abilityName: "Dexterity",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
    },
    {
      abilityName: "Constitution",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
    },
    {
      abilityName: "Intelligence",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
    },
    {
      abilityName: "Wisdom",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
    },
    {
      abilityName: "Charisma",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
    },
  ];

  return (
    <div className={styles.containerPage}>
      <div className={styles.containerHeader}>
        <img
          className={styles.characterPortrait}
          src={characterPortrait}
          alt=""
        />
        <div className={styles.containerCharacterInfo}>
          <h2 className={styles.characterName}>Character Name</h2>
          <p className={styles.characterInfo}>Species : </p>
          <p className={styles.characterInfo}>Class : </p>
          <p className={styles.characterInfo}>Level : </p>
        </div>
        <div className={styles.containerHitPoints}>
          <HitPoints />
        </div>
      </div>
      <div className={styles.abilityScores}>
        <AbilityScores abilityScores={abilityScores} />
      </div>
    </div>
  );
}

export default CharacterSheet;
