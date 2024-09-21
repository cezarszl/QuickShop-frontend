import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "QuickShop App",
  description:
    "Discover and shop for a wide range of products at QuickShop. Fast, reliable, and easy to use!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased font-sans"}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  );
}
