import styles from "../../../styles/forgot.module.scss";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import LoginInput from "../../../components/Inputs/LoginInput";
import RoundButton from "../../../components/Buttons/RoundButton";
import PacLoader from "../../../components/Loaders/pacLoader/index";
import axios from "axios";
import jwt from "jsonwebtoken";

export default function reset({ user_id }) {
  console.log("user_id", user_id);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const resetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/reset", {});
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  const passwordValidation = Yup.object({
    password: Yup.string()
      .required(
        "Create a 6+ character password with numbers, letters, and symbols (e.g., ! &)",
      )
      .min(6, "Password must be at least 6 characters longer")
      .max(46, "Password can't be longer than 46 characters"),
    confirm_password: Yup.string()
      .required("Confirm your new password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });
  return (
    <>
      {loading && <PacLoader Loading={loading} />}
      <Header country="" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Reset your password?<Link href="/">Login instead</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <Formik
              enableReinitialize
              initialValues={{
                password,
                confirm_password,
              }}
              validationSchema={passwordValidation}
              onSubmit={() => {
                resetHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <LoginInput
                    type="password"
                    name="confirm_password"
                    icon="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirm_password(e.target.value)}
                  />
                  <RoundButton type="submit" text="Submit" />
                  <div style={{ marginTop: "10px" }}>
                    {error && <span className={styles.error}>{error}</span>}
                    {success && (
                      <span className={styles.success}>{success}</span>
                    )}
                  </div>
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

export async function getServerSideProps(context) {
  const { query } = context;
  const token = query.token;
  const user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
  return {
    props: {
      user_id,
    },
  };
}
