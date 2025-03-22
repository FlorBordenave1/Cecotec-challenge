"use client";

import { Typography } from "@/components/ui/typography";
import styles from "./buttonRedirect.module.css";
import { ArrowIcon } from "@/icons/arrowIcon";

export const ButtonRedirect = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonContent}>
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
