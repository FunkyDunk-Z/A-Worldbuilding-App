import styles from "./Sidebar.module.css";
import { useState } from "react";
import Play from "../../assets/Play.png";

import Dropdown from "./Dropdown";
import { menuItems } from "./DropdownMenuItems";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.containerSidebar} ${isOpen ? styles.open : ""}`}>
      <h3 className={styles.titleSidebar}>Codex Name</h3>
      <div className={styles.containerPlay}>
        <img
          className={`${styles.play} ${isOpen ? styles.open : ""}`}
          src={Play}
          alt={"open or close"}
          onClick={toggleIsOpen}
        />
      </div>
      <Dropdown menuItems={menuItems} label={"Ancestries"} />
      <Dropdown menuItems={menuItems} label={"Bestairy"} />
      <Dropdown menuItems={menuItems} label={"Lore & History"} />
      <Dropdown menuItems={menuItems} label={"Locations"} />
      <Dropdown menuItems={menuItems} label={"Characters"} />
      <Dropdown menuItems={menuItems} label={"Items"} />
    </div>
  );
}

export default Sidebar;
