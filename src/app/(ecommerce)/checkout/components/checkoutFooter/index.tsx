import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { formatPrice } from "@/lib/formatPrice";
import styles from "./checkoutFooter.module.css";

type CheckoutFooterProps = {
  handleCompleteOrder: () => void;
};

export const CheckoutFooter = ({
  handleCompleteOrder,
}: CheckoutFooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Typography
          variant="body"
          label="Precio total"
          className={styles.priceDetail}
        />
        <Typography
          variant="body"
          label={formatPrice("386,78")}
          className={styles.priceDetail}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant={"primary"}
          className={styles.btn}
          onClick={handleCompleteOrder}
        >
          Pagar
        </Button>
      </div>
    </div>
  );
};
