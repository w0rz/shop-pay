import MainSwiper from "./swiper";
import Offers from "./offers";
import styles from "./styles.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <div className={styles.menu}>Menu</div>
      <MainSwiper />
      <Offers />
      <div className={styles.user}>User</div>
    </div>
  );
}
