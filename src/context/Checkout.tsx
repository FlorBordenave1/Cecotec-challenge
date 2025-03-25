"use client";

import { GetCategoryBySlugResponse } from "@/services/types";
import {
  createContext,
  PropsWithChildren,
  FC,
  useState,
  useEffect,
} from "react";
import { toast } from "sonner";

export type CartItem = GetCategoryBySlugResponse & {
  quantity: number;
};

type CheckoutContextProps = {
  items: CartItem[];
  addItem: (item: GetCategoryBySlugResponse) => void;
  removeItem: (item: GetCategoryBySlugResponse) => void;
  addUnit: (item: GetCategoryBySlugResponse) => void;
  removeUnit: (item: GetCategoryBySlugResponse) => void;
  clearCart: () => void;
};

export const CheckoutContext = createContext<CheckoutContextProps | null>(null);

export const CheckoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const localStorage =
    typeof window !== "undefined" ? window.localStorage : null;

  const showToast = () => {
    toast.success("Producto agregado al carrito");
  };

  const addItem = (item: GetCategoryBySlugResponse) => {
    const isItemInCart = items.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setItems(
        items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      showToast();
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
      showToast();
    }
  };

  const removeItem = (item: GetCategoryBySlugResponse) => {
    setItems(items.filter((cartItem) => cartItem.id !== item.id));
  };

  const addUnit = (item: GetCategoryBySlugResponse) => {
    setItems(
      items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const removeUnit = (item: GetCategoryBySlugResponse) => {
    const isItemInCart = items.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart?.quantity === 1) {
      removeItem(item);
      return;
    }

    setItems(
      items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  useEffect(() => {
    const cartItems = localStorage?.getItem("cartItems");
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    localStorage?.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  return (
    <CheckoutContext.Provider
      value={{ items, addItem, removeItem, addUnit, removeUnit, clearCart }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
