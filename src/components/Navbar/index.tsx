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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { Menu } from "lucide-react";

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
          {isLogged && (
            <div className={styles.actionsContent}>
              <div className={styles.iconContainer}>
                <CartIcon />
              </div>

              <Button className={styles.button}>15</Button>
            </div>
          )}
        </div>
        <div className={styles.actionsContainerMobile}>
          {!isLogged ? (
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
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="primary"
                  className="h-8 w-8 rounded-lg scale-90 color-white text-primary"
                >
                  <Menu className="h-5 w-5 rotate-0 scale-100 color-white" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <div className={styles.actionsContent}>
                    <Typography
                      label={`Hola, ${userContext?.user?.firstName}`}
                      variant="body"
                      className="font-medium"
                    />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {isLogged && (
                    <div className={styles.actionsContent}>
                      <CartIcon />
                      <Typography
                        label="Carrito"
                        variant="body"
                        className="font-medium"
                      />
                    </div>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
