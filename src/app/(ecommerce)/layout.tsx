"use client";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname === "/checkout") {
    return <>{children}</>;
  }

  return (
    <html lang="en">
      <body>
        <h1>layout</h1>
        {children}
      </body>
    </html>
  );
}
