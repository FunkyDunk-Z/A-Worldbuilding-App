import styles from "./Codex.module.css";
// import Sidebar from "../../components/utils/Sidebar";
import Category from "../../components/cards/Category";

function Codex() {
  return (
    <>
      <div className={styles.containerPage}>
        <h1 className={styles.pageTitle}>My Codex</h1>
        <div className={styles.containerCards}>
          <Category size="small" categoryName="Bestiary" />
          <Category size="small" categoryName="Characters" />
          <Category size="small" categoryName="Factions" />
          <Category size="small" categoryName="Items" />
          <Category size="small" categoryName="Locations" />
          <Category size="small" categoryName="Lore & History" />
          <Category size="small" categoryName="Nations" />
          <Category size="small" categoryName="Realms" />
          <Category size="small" categoryName="Species" />
        </div>
      </div>
    </>
  );
}

export default Codex;
