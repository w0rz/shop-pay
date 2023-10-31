import MainSwiper from "./swiper";
import styles from "./styles.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <div className={styles.menu}>Menu</div>
      <div className={styles.swiper}>
        <MainSwiper />
      </div>
      <div className={styles.offers}>Offers</div>
      <div className={styles.user}>User</div>
    </div>
  );
}
