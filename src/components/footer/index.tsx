"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Typography } from "../ui/typography";
import { LogOutIcon } from "@/icons/logOutIcon";

import { UserContext } from "@/context/UserContext";

import styles from "./footer.module.css";

const Footer = () => {
  const userContext = use(UserContext);
  const router = useRouter();

  const isLogged = userContext?.user?.username;

  const logOut = () => {
    userContext?.removeUser();

    router.push("/login");
  };

  return (
    <Card className={styles.navbarContainer}>
      {isLogged && (
        <div className={styles.logoutButton} onClick={() => logOut()}>
          <LogOutIcon />
          <Typography
            variant="body"
            label="Cerrar sesión"
            className={styles.text}
          />
        </div>
      )}

      <Typography
        variant="body-small"
        className={styles.text}
        label="© 2019 Cecotec Innovaciones S.L. | RII-AEE: 5537"
      />
    </Card>
  );
};

export default Footer;
