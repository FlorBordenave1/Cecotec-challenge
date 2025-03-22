"use client";
import React, { use } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "../ui/typography";

import { UserContext } from "@/context/UserContext";
import { UserIcon } from "@/icons/userIcon";
import { CartIcon } from "@/icons/cartIcon";

import logo from "../../../public/images/LogoCecotec.png";
import styles from "./styles.module.css";

const Navbar = () => {
  const userContext = use(UserContext);
  const router = useRouter();

  const isLogged = userContext?.user?.username;

  return (
    <Card className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <div className={styles.imageContainer}>
          <Image priority src={logo} alt="Logo Cecotec" />
        </div>

        <div className={styles.actionsContainer}>
          <div
            className={clsx(
              Boolean(isLogged)
                ? "hover:cursor-default"
                : "hover:cursor-pointer",
              styles.actionsContent
            )}
            onClick={() => !isLogged && router.push("/login")}
          >
            {!isLogged && <UserIcon />}
            <Typography
              label={
                isLogged
                  ? `Hola, ${userContext?.user?.firstName}`
                  : "Iniciar sesion"
              }
              variant="body"
              className="font-medium"
            />
          </div>
          <div className={styles.actionsContent}>
            <div className={styles.iconContainer}>
              <CartIcon />
            </div>

            <Button className={styles.button}>15</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
