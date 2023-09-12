import styles from "./styles.module.scss";
import { BiUser } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import { useField, ErrorMessage } from "formik";

export default function LoginInput({ icon, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div
      className={`${styles.input} ${
        meta.touched && meta.error ? styles.error : ""
      }`}
    >
      {icon === "user" ? (
        <BiUser />
      ) : icon === "email" ? (
        <SiMinutemailer />
      ) : icon === "password" ? (
        <IoKeyOutline />
      ) : (
        ""
      )}
      <input
        name={field.name}
        type={field.type}
        placeholder={placeholder}
        {...field}
        {...props}
      />{" "}
      {meta.touched && meta.error && (
        <div className={styles.error__msg}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
}
