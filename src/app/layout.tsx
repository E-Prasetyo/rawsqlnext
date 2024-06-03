'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar';
import useScroll from "./hooks/useScroll";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { scrollY, isOver } = useScroll({limit:200});

  return (
    <html lang="en">
      <body className={`${inter.className} relative container-2xl`}>
        <div
          className={`
            fixed top-0 left-0 right-0 bg-slate-100
            ${isOver ? `bg-opacity-5` : 'bg-opacity-100'}
          `}
        >
          <Navbar />
        </div>
        <div className="container-2xl">
            {children}
        </div>
      </body>
    </html>
  );
}
