import styles from "./styles.module.scss";
import Link from "next/link";

export default function NewsLetter() {
  return (
    <div className={styles.footer__newsletter}>
      <h3>SIGN UP FOR OU NEWSLETTER</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={styles.btn_primary}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking the SUBSCRIBE button, you are agreein to{" "}
        <Link href="">our Privacy & Cookie Policy </Link>
      </p>
    </div>
  );
}
