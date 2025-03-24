"use client";

import { CartItem, CheckoutContext } from "@/context/Checkout";
import { use, useState } from "react";
import { ItemCard } from "./components/itemCard";
import { Header } from "./components/header";
import { sumQuantities } from "@/lib/sumQuantities";
import { CheckoutFooter } from "./components/checkoutFooter";
import { EmptyState } from "@/components/emptyState";
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
      <div className={styles.footerContainer}>
        <CheckoutFooter handleCompleteOrder={() => setOpenDialog(true)} />
      </div>
    </>
  );
};

export default Checkout;
