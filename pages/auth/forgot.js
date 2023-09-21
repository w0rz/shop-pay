import styles from "../../styles/forgot.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import LoginInput from "../../components/Inputs/LoginInput";
import RoundButton from "../../components/Buttons/RoundButton";

export default function forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const forgotHandler = async () => {};
  const emailValidation = Yup.object({
    email: Yup.string()
      .required(
        "You'll need this when you login and if you ever need to reset your password.",
      )
      .email("Enter a valid email address."),
  });
  return (
    <>
      <Header country="" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forgot your password?<Link href="/">Login instead</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>Experience top-quality e-shopping on a global scale.</p>
            <Formik
              enableReinitialize
              initialValues={{
                email,
              }}
              validationSchema={emailValidation}
              onSubmit={() => {
                forgotHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="email"
                    name="email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <RoundButton type="submit" text="Sign in" />
                  {error && <span className={styles.error}>{error}</span>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="" />
    </>
  );
}
