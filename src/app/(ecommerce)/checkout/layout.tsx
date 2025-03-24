"use client";
import { PropsWithChildren } from "react";
import { CheckoutNavbar } from "./components/checkoutNavbar";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-neutral20 min-h-screen w-full">
      <CheckoutNavbar />
      {children}
    </div>
  );
};

export default RootLayout;
