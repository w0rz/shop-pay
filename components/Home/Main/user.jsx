import { useSession } from "next-auth/react";
import { userSwiperArray } from "../../../data/home";
import styles from "./styles.module.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Link from "next/link";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
export default function User() {
  const { data: session } = useSession();
  return (
    <div className={styles.user}>
      <img src="/images/userheader.jpg" alt="" />
      <div className={styles.user__container}>
        {session ? (
          <div className={styles.use__infos}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.use__infos}>
            <img src="/images/992490_b0iqzq.png" alt="" />
            <div className="styles user__infos__btns">
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user__links}>
          <li>
            <Link href="/profile">
              <IoSettingsOutline />
            </Link>
            <Link href="">
              <HiOutlineClipboardList />
            </Link>
            <Link href="">
              <AiOutlineMessage />
            </Link>
            <Link href="">
              <BsHeart />
            </Link>
          </li>
        </ul>
        <div className="styles.user__swiper">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            Navigation={true}
            modules={[EffectCards, Navigation]}
            className="userMenu__swiper"
            styles={{ maxWidth: "180px", height: "240px", marginTop: "1rem" }}
          >
            {userSwiperArray.map((item) => (
              <SwiperSlide>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
