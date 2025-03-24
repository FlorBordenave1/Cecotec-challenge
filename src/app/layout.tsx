import "./globals.css";
import { Toaster } from "@/components/toaster/toaster";
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
              toastOptions={{
                classNames: {
                  toast:
                    "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground",
                  icon: "group-data-[type=error]:text-red-500 group-data-[type=success]:text-green-500 group-data-[type=warning]:text-amber-500 group-data-[type=info]:text-blue-500",
                },
              }}
            />
          </CheckoutProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
