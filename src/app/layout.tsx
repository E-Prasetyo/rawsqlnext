import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar/Navbar'
// import Sidebar from '@/components/Sidebar/Sidebar'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="fixed top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="">
            {children}
        </div>
      </body>
    </html>
  );
}
