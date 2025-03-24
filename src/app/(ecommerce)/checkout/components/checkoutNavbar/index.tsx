"use client";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "../../../../../../public/images/LogoCecotecWhite.png";

export const CheckoutNavbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbarContainer}>
      <Image
        priority
        src={logo}
        onClick={() => router.push("/home")}
        alt="Logo Cecotec"
        className="hover:cursor-pointer "
      />
    </div>
  );
};
