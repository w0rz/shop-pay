import styles from "./styles.module.scss";
import { FaFacebookF, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";

export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <a href="/" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="">
              <BsInstagram target="_blank" />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <BsPinterest />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaSnapchatGhost />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
