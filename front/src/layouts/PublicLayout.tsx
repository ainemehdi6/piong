import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar/Navbar";

type PublicLayoutProps = PropsWithChildren;

function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default PublicLayout;
