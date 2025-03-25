import { ChevronDownIcon } from "@/icons/chevronDownIcon";
import { ChevronUpIcon } from "@/icons/chevronUpIcon";
import { Typography } from "../ui/typography";
import styles from "./amount-button.module.css";

type AmountButtonProps = {
  quantity: number;
  increase: () => void;
  decrease: () => void;
};
export const AmountButton = ({
  quantity,
  increase,
  decrease,
}: AmountButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.quantity}>
        <Typography label={quantity.toString()} variant="body" />
      </div>
      <div className={styles.buttonsContent}>
        <button
          onClick={increase}
          className={`${styles.button} ${styles.radiusTop}`}
        >
          <ChevronUpIcon />
        </button>
        <button
          onClick={decrease}
          className={`${styles.button} ${styles.radiusBottom}`}
        >
          <ChevronDownIcon />
        </button>
      </div>
    </div>
  );
};
