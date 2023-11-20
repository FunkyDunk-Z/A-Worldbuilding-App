import styles from "./MyButton.module.css";

function MyButton(props) {
  let themeClasses = "";

  if (props.theme) {
    themeClasses = props.theme
      .split(" ")
      .map((theme) => styles[theme])
      .join(" ");
  }

  return (
    <button
      onClick={props.handleClick}
      className={`${styles.btn} ${themeClasses}`}
    >
      {props.label}
    </button>
  );
}

export default MyButton;
