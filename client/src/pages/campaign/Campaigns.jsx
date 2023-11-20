import styles from "./Campaigns.module.css";

import Sidebar from "../../components/layout/Sidebar";

import CreateNewEntry from "../../components/templates/CreateNewEntry";

function Campaigns() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Campaings</h1>
      <Sidebar />
      <CreateNewEntry />
    </div>
  );
}

export default Campaigns;
