"use client";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";
import { LogoComponent } from "@/components/logo-component";

export const CheckoutNavbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbarContainer}>
      <LogoComponent onClick={() => router.push("/home")} variant="white" />
    </div>
  );
};
