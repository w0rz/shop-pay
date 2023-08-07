import Link from "next/link";
import styles from "./styles.module.scss";

export default function Add() {
  return (
    <Link href="/browser">
      <div className={styles.ad}></div>
    </Link>
  );
}
