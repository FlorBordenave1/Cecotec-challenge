"use client";

import { ComponentProps, HTMLInputTypeAttribute, useState } from "react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { EyeIcon } from "@/icons/eyeIcon";
import { EyeOffIcon } from "@/icons/eyeOffIcon";

import styles from "./custom-input.module.css";

const TYPE_PASSWORD = "password";

type CustomInputProps = ComponentProps<typeof Input> & {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
};

export const CustomInput = ({
  label,
  type,
  placeholder,
  ...props
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const showIcon = type === TYPE_PASSWORD;

  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        <Label htmlFor="password">{label}</Label>
      </div>
      <Input
        id={label}
        required
        placeholder={placeholder}
        className={showIcon ? "pr-10" : ""}
        type={showIcon && showPassword ? "text" : type}
        {...props}
      />
      {showIcon && (
        <div className={styles.iconContainer} onClick={() => togglePassword()}>
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </div>
      )}
    </div>
  );
};
