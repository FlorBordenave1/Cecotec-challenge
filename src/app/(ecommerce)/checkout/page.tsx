"use client";

import { CartItem, CheckoutContext } from "@/context/Checkout";
import { use, useState } from "react";
import { ItemCard } from "./components/itemCard";
import { Header } from "./components/header";
import { sumQuantities } from "@/lib/sumQuantities";
import { CheckoutFooter } from "./components/checkoutFooter";
import { EmptyState } from "@/components/empty-state";
import { useRouter } from "next/navigation";
import { ConfirmationModal } from "./components/confirmationModal";
import styles from "./checkout.module.css";

const Checkout = () => {
  const checkoutContext = use(CheckoutContext);
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const confirmOrderAndRedirect = () => {
    setOpenDialog(false);
    checkoutContext?.clearCart();
    router.push("/home");
  };

  function calculateTotalPrice(items: CartItem[]) {
    return items.reduce((total, item) => {
      const price = parseFloat(item.pricing.price);
      const discountRate = parseFloat(item.pricing.discountRate);
      const quantity = item.quantity;

      const precioFinal = price * (1 - discountRate) * quantity;
      return total + precioFinal;
    }, 0);
  }

  if (!checkoutContext?.items?.length) {
    return (
      <div className={styles.emptyState}>
        <EmptyState
          label="Tu carrito está vacío"
          buttonLabel="Agregar productos"
          routeToNavigate="home"
        />
      </div>
    );
  }
  return (
    <>
      {openDialog && (
        <ConfirmationModal
          open={openDialog}
          onClose={() => confirmOrderAndRedirect()}
        />
      )}

      <div className={styles.checkoutContent}>
        <div>
          <Header quantity={sumQuantities(checkoutContext?.items)} />
          {checkoutContext?.items.map((item: CartItem, index: number) => (
            <ItemCard
              key={`${item.name}_${index}`}
              data={item}
              addUnit={() => checkoutContext?.addUnit(item)}
              removeUnit={() => checkoutContext?.removeUnit(item)}
              removeItem={() => checkoutContext?.removeItem(item)}
            />
          ))}
        </div>
        <div className={styles.footerContainer}>
          <CheckoutFooter
            handleCompleteOrder={() => setOpenDialog(true)}
            totalPrice={calculateTotalPrice(checkoutContext?.items)}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
