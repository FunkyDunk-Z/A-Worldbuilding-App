import Styles from "./CreateNewEntry.module.css";
import { useNavigate } from "react-router-dom";

function CreateNewEntry(props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(props.link);
  };

  return (
    <>
      <div className={Styles.container} onClick={handleNavigate}>
        <h3 className={Styles.title}>Create New {props.entryName}</h3>
        <span className={Styles.circle}>
          <span className={Styles.plus}></span>
        </span>
      </div>
    </>
  );
}

export default CreateNewEntry;
