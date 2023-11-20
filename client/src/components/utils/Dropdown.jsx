import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

import MyButton from "./MyButton";

function Dropdown({ menuItems, label }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <MyButton
        handleClick={handleOpen}
        label={label}
        theme={open ? "dropdown open" : "dropdown"}
      />
      <ul className={open ? `${styles.menu.open}` : `${styles.menu}`}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={`${styles[item.linkClass]}`}
                to={item.linkPath}
                onClick={() => handleOpen(false)}
              >
                {item.linkName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
