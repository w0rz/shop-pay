import styles from "./styles.module.scss";
import PacLoader from "react-spinners/PacmanLoader";

export default function Loader({ loading }) {
  return (
    <div className={styles.loader}>
      <PacLoader color="#2f82ff" Loading={loading} />
    </div>
  );
}
