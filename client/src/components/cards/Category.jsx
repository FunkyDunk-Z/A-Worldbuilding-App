import styles from "./Category.module.css";
import Thumbnail from "../../assets/placeholder.png";
import { useNavigate } from "react-router-dom";

function Category(props) {
  const sizeName = props.size ? styles[props.size] : "";
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${props.categoryName}`);
  };

  return (
    <div className={`${styles.container} ${sizeName}`} onClick={handleNavigate}>
      <h3 className={styles.title}>{props.categoryName}</h3>
      <p className={styles.summary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        aliquid eius eos accusantium commodi id, fugiat alias itaque deleniti
        voluptates odio quas sint magni libero explicabo praesentium
        perferendis, repudiandae excepturi!
      </p>
      <img className={styles.thumbnail} src={Thumbnail} alt="" />
    </div>
  );
}

export default Category;
