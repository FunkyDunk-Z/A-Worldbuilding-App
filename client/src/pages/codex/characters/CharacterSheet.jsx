import styles from "./CharacterSheet.module.css";
import AbilityScores from "../../../components/character/AbilityScores";
import HitPoints from "../../../components/character/HitPoints";
import SavingThrows from "../../../components/character/SavingThrows";
import characterPortrait from "../../../assets/well-shit.ico";
import { useState } from "react";

function CharacterSheet() {
  const [data, setData] = useState({
    proficiency: 2,
    speed: 30,
    initiative: 0,
    armourClass: 10,
  });

  const abilityScores = [
    {
      abilityName: "Strength",
      abrv: "STR",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
      savingThrow: {
        isProficient: true,
      },
    },
    {
      abilityName: "Dexterity",
      abrv: "DEX",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
      savingThrow: {
        isProficient: false,
      },
    },
    {
      abilityName: "Constitution",
      abrv: "CON",
      abilityScore: 14,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
      savingThrow: {
        isProficient: false,
      },
    },
    {
      abilityName: "Intelligence",
      abrv: "INT",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
      savingThrow: {
        isProficient: false,
      },
    },
    {
      abilityName: "Wisdom",
      abrv: "WIS",
      abilityScore: 17,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
      savingThrow: {
        isProficient: true,
      },
    },
    {
      abilityName: "Charisma",
      abrv: "CHA",
      abilityScore: 10,
      abilityMod: function () {
        return Math.floor((this.abilityScore - 10) / 2);
      },
      savingThrow: {
        isProficient: false,
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
          <h4 className={styles.characterInfo}>Species Class</h4>
          <h4 className={styles.characterInfo}>Level 1</h4>
        </div>
        <HitPoints />
      </div>
      <div className={styles.abilityScores}>
        <AbilityScores abilityScores={abilityScores} />
      </div>
      <div className={styles.savingThrows}>
        <SavingThrows abilityScores={abilityScores} data={data} />
      </div>
    </div>
  );
}

export default CharacterSheet;
