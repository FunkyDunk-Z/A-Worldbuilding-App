import styles from "./Characters.module.css";
import CharacterSheet from "./CharacterSheet";

function Characters() {
  return (
    <div className={styles.container}>
      <CharacterSheet />
    </div>
  );
}

export default Characters;
