import { toastConfig } from "@/components/toaster/config";
import "./globals.css";
import { Toaster } from "@/components/toaster";
import { CheckoutProvider } from "@/context/Checkout";
import { UserContextProvider } from "@/context/UserContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <CheckoutProvider>
            {children}
            <Toaster
              position="top-center"
              className="toaster group"
              duration={3000}
              toastOptions={toastConfig}
            />
          </CheckoutProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
