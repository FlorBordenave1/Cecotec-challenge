import Image from "next/image";
import styles from "./logoComponent.module.css";
import blueLogo from "../../../public/images/LogoCecotec.png";
import whiteLogo from "../../../public/images/LogoCecotecWhite.png";

type LogoComponentProps = {
  onClick: () => void;
  variant?: "blue" | "white";
};

export const LogoComponent = ({
  onClick,
  variant = "blue",
}: LogoComponentProps) => (
  <div className={styles.imageContainer} onClick={() => onClick()}>
    <Image
      priority
      src={variant === "blue" ? blueLogo : whiteLogo}
      alt="Logo Cecotec"
    />
  </div>
);
