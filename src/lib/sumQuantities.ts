import { CartItem } from "@/context/Checkout";

export const sumQuantities = (items: CartItem[] | undefined) => {
  if (!items) return 0;

  return items?.reduce(
    (total: number, produc: CartItem) => total + produc.quantity,
    0
  );
};
