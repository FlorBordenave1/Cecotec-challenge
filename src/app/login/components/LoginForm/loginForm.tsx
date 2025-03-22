import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../../../public/images/LogoCecotec.png";
import styles from "./loginForm.module.css";
import { Typography } from "@/components/ui/typography";
import { CustomInput } from "@/components/customInput";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col", className)} {...props}>
      <div className={styles.formContent}>
        <Image priority src={logo} alt="Logo Cecotec" />

        <Typography
          variant="h1"
          className={styles.title}
          label="Iniciar sesión o crear cuenta"
        />

        <div className={styles.inputButtonContainer}>
          <div className={styles.inputContainer}>
            <CustomInput label="Email" placeholder="arieldominguez@gmail.com" />
            <CustomInput label="Contraseña" type="password" />
          </div>

          <Button type="submit" variant="primary">
            Acceder
          </Button>
        </div>
      </div>
    </form>
  );
}
