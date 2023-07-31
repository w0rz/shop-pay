import styles from "./styles.module.scss";
import {MdSecurity} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs";
import {RiAccountPinCircleLine, RiArrowDropDownFill} from "react-icons/ri";
import Link from 'next/link';
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
  <div className={styles.top}>  
    <div className={styles.top__container}>
    <div></div>
      <ul className={styles.top__list}>
        <li className={styles.li}>
<img src="https://opensource.com/sites/default/files/images/life-uploads/love.png"
alt=""
/>
          <span>Penguin / usd</span>
        </li>
        <li className={styles.li}>
          <MdSecurity/>
          <span>Buyer Protection</span>
        </li>
          <li className={styles.li}>
           <span>Customer Service</span> 
          </li>
          <li className={styles.li}>
              <span>Help</span>
          </li>
          <li className={styles.li}>
<BsSuitHeart />
            <Link href="/profile/wishlist">
            <span>Whishlist</span>
          </Link>
          </li>
          <li className={styles.li}
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          >
          {loggedIn ? (
          <li className={styles.li}>
            <div className={styles.flex}>
              <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png" alt="" />
                <span>Milena</span>
              <RiArrowDropDownFill />
            </div>
          </li>
          ) : (
          <li>
            <div className={styles.flex}>
              <RiAccountPinCircleLine />
              <span>Account</span>
              <RiArrowDropDownFill />
            </div>
          </li>
          )}
            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>
      </ul>
    </div>
  </div>
  )
}
