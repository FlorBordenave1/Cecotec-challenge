import { Typography } from "@/components/ui/typography";
import { CartIcon } from "@/icons/cartIcon";
import styles from "./Header.module.css";

type HeaderProps = {
  quantity: number;
};
export const Header = ({ quantity }: HeaderProps) => {
  const products = quantity > 1 ? "productos" : "producto";

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Typography
          variant="h2"
          label="Resumen del pedido"
          className={styles.title}
        />
        <div className={styles.quantityContainer}>
          <CartIcon />
          <Typography variant="body" label={`${quantity} ${products}`} />
        </div>
      </div>
    </div>
  );
};
