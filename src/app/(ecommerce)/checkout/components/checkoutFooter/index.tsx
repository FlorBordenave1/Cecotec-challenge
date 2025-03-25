import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import styles from "./checkoutFooter.module.css";
import { formatPrice } from "@/lib/formatPrice";

type CheckoutFooterProps = {
  handleCompleteOrder: () => void;
  totalPrice: number;
};

export const CheckoutFooter = ({
  handleCompleteOrder,
  totalPrice,
}: CheckoutFooterProps) => {
  const price = formatPrice(totalPrice.toString());
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
          label={price}
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
