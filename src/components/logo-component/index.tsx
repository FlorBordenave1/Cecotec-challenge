import Image from "next/image";
import styles from "./logo-component.module.css";
import blueLogo from "../../../public/images/LogoCecotec.png";
import whiteLogo from "../../../public/images/LogoCecotecWhite.png";

enum LogoVariants {
  WHITE = "white",
  BLUE = "blue",
}

type LogoComponentProps = {
  onClick: () => void;
  variant?: LogoVariants;
};

export const LogoComponent = ({
  onClick,
  variant = LogoVariants.BLUE,
}: LogoComponentProps) => {
  const whiteVariant = variant === LogoVariants.WHITE;

  return (
    <div
      className={`${styles.imageContainer} ${
        whiteVariant && styles.whiteLogo
      } `}
      onClick={() => onClick()}
    >
      <Image
        priority
        src={whiteVariant ? whiteLogo : blueLogo}
        alt="Logo Cecotec"
      />
    </div>
  );
};
