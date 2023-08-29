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
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
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
  const {
    login_email,
    login_password,
    full_name,
    email,
    password,
    confirm_password,
  } = user;
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
  const registerValidation = Yup.object({
    full_name: Yup.string()
      .required("what's your name?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you login and if you ever need to reset your password.",
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six number, letters and punctuation marks(such as ! and &).",
      )
      .min(6, "Password must be at least 6 characters longer")
      .max(46, "Password can't be longer than 46 characters"),
    confirm_password: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
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

        {/* Signup */}

        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>
              Get access to one of the best E-shopping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                full_name,
                email,
                password,
                confirm_password,
              }}
              validationSchema={registerValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="full_name"
                    icon="user"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="confirm_password"
                    icon="password"
                    placeholder="Re-Type Password"
                    onChange={handleChange}
                  />
                  <RoundButton type="submit" text="Sign up" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* Sing up End */}
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
