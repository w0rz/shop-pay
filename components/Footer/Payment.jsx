import styles from "./styles.module.scss";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
export default function Payment() {
  return (
    <div className={styles.payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <FaCcVisa />
        <FaCcMastercard />
        <FaCcPaypal />
      </div>
    </div>
  );
}
