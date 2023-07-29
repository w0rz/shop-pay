import styles from "./styles.module.scss";
import Link from "next/link";

export default function UserMenu({ loggedIn }) {
  return (
            <div className={styles.menu}>
      <h4>Welcome to Shop-pay!</h4> {loggedIn ? ( <div className={styles.flex}>
     <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"
            alt="" className={styles.menu__img}          /> <div className={styles.col}> <span>Welcome Back,</span>
            <h3>jdfjisdf</h3>
            <span>Sign out</span>
          </div>
        </div>
     ) : (
    <div className={styles.flex}>
<button className={styles.btn_primary}>Register</button>
            <button className={styles.btn_outlined}>Login</button>
    </div>
      )}
      <ul>
        <li>
<Link href="/profile">Account</Link>
          </li>
        <li>
<Link href="/profile/orders">My Orders</Link>
          </li>
        <li>
<Link href="/profile/messages">Message Center</Link>
          </li>
        <li>
<Link href="/profile/address">Address</Link>
          </li>
        <li>
<Link href="/profile/wishlist">Wishlist</Link>
</li>
      </ul>
    </div>
  )
}
