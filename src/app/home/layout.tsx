
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "Description of me",
};

export default function LayoutHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          {children}
      </>
  );
}
