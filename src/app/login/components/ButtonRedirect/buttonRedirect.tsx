"use client";

import { useRouter } from "next/navigation";

import { Typography } from "@/components/ui/typography";
import styles from "./buttonRedirect.module.css";
import { ArrowIcon } from "@/icons/arrowIcon";

export const ButtonRedirect = () => {
  const router = useRouter();

  return (
    <div className={styles.buttonContainer}>
      <div
        className={styles.buttonContent}
        onClick={() => router.push("/home")}
      >
        <Typography
          variant="body"
          label="Ir a la home"
          className={styles.redirectLink}
        />
        <ArrowIcon />
      </div>
    </div>
  );
};
