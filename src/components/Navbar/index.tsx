"use client";
import React, { use } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserContext } from "@/context/UserContext";
import { CartIcon } from "@/icons/cartIcon";
import styles from "./navbar.module.css";
import { CheckoutContext } from "@/context/Checkout";
import { sumQuantities } from "@/lib/sumQuantities";
import { LogoComponent } from "../logoComponent";
import { MobileDropdownMenu } from "../mobileDropdownMenu";
import { AuthButton } from "../authButton";

const Navbar = () => {
  const userContext = use(UserContext);
  const checkoutContext = use(CheckoutContext);
  const router = useRouter();

  const isLogged = userContext?.user?.username;
  const userName = userContext?.user?.firstName || "";
  return (
    <Card className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <LogoComponent onClick={() => router.push("/home")} />

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
            <AuthButton isLogged={Boolean(isLogged)} userName={userName} />
          </div>
          {isLogged && (
            <div
              className={styles.actionsContent}
              onClick={() => router.push("/checkout")}
            >
              <div className={styles.iconContainer}>
                <CartIcon />
              </div>

              <Button className={styles.button}>
                {sumQuantities(checkoutContext?.items)}
              </Button>
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
              <AuthButton isLogged={Boolean(isLogged)} userName={userName} />
            </div>
          ) : (
            <MobileDropdownMenu
              userName={userName}
              isLogged
              onClick={() => router.push("/checkout")}
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
