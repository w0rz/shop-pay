import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginInput from "../components/Inputs/LoginInput";
import { useState } from "react";
import RoundButton from "../components/Buttons/RoundButton";
import { getProviders, signIn } from "next-auth/react";
import { SiAuth0, SiFacebook, SiGithub } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";

const initialValues = {
  login_email: "",
  login_password: "",
};
const rIcon = {
  auth0: SiAuth0,
  facebook: SiFacebook,
  github: SiGithub,
  google: BsGoogle,
};
export default function signin({ providers }) {
  console.log(providers);
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required.")
      .email("Please enter a valid email address"),
    login_password: Yup.string().required("Please enter a password"),
  });
  return (
    <>
      <Header country="Brazil" />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              You'd be happy to join us! <Link href="/">Go to store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get access to one of the best E-shopping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="email"
                    name="login_email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <RoundButton type="submit" text="Sign in" />
                  <div className={styles.forgot}>
                    <Link href="/forget">Forgot password ?</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => {
                  const Icon = rIcon[provider.id];
                  return (
                    <div key={provider.name}>
                      <button
                        className={styles.social__btn}
                        onClick={() => signIn(provider.id)}
                      >
                        {Icon && <Icon />}
                        Sign in with {provider.name}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer country="Brazil" />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: { providers },
  };
}
