"use client";

import Image from "next/image";

import { LoginForm } from "@/app/login/components/LoginForm/loginForm";
import { ButtonRedirect } from "./components/ButtonRedirect/buttonRedirect";

import { useLoginController } from "./login.controller";

import LoginImage from "../../../public/images/login.svg";
import styles from "./login.module.css";

export default function LoginPage() {
  const { userData, handleChangeInput, handleLogIn } = useLoginController();
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftBlock}>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <LoginForm
              userData={userData}
              handleChangeInput={handleChangeInput}
              handleLogin={handleLogIn}
            />
          </div>
        </div>
        <ButtonRedirect />
      </div>

      <div className={styles.imageContainer}>
        <Image
          priority
          src={LoginImage}
          alt="Follow us on Twitter"
          className={styles.image}
        />
      </div>
    </div>
  );
}
