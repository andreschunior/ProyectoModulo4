
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Importa los archivos CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer/Footer";
import { CarritoProvider } from "./context/ContextoCarrito";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CarritoProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"  rel="stylesheet" />
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

      </body>
    </html>
    </CarritoProvider>
  );
}