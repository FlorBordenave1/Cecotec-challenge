import { LoginForm } from "@/app/login/components/LoginForm/loginForm";
import LoginImage from "../../../public/images/login.svg";
import Image from "next/image";
import styles from "./login.module.css";
import { ButtonRedirect } from "./components/ButtonRedirect/buttonRedirect";

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftBlock}>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <LoginForm />
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
