import { ChangeEvent, SyntheticEvent } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { CustomInput } from "@/components/customInput";

import { UserData } from "../../login.controller";

import logo from "../../../../../public/images/LogoCecotec.png";
import styles from "./loginForm.module.css";

type LoginFormType = React.ComponentPropsWithoutRef<"form"> & {
  userData: UserData;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: SyntheticEvent) => void;
};

export function LoginForm({
  className,
  userData,
  handleChangeInput,
  handleLogin,
  ...props
}: LoginFormType) {
  return (
    <form
      className={cn("flex flex-col", className)}
      {...props}
      onSubmit={handleLogin}
    >
      <div className={styles.formContent}>
        <Image priority src={logo} alt="Logo Cecotec" />

        <Typography
          variant="h1"
          className={styles.title}
          label="Iniciar sesión o crear cuenta"
        />

        <div className={styles.inputButtonContainer}>
          <div className={styles.inputContainer}>
            <CustomInput
              value={userData.email}
              label="Email"
              placeholder="arieldominguez@gmail.com"
              name="email"
              onChange={handleChangeInput}
            />
            <CustomInput
              value={userData.password}
              label="Contraseña"
              type="password"
              name="password"
              onChange={handleChangeInput}
            />
          </div>

          <Button type="submit" variant="primary">
            Acceder
          </Button>
        </div>
      </div>
    </form>
  );
}
