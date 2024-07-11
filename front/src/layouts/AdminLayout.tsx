import { PropsWithChildren } from "react";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";

type PublicLayoutProps = PropsWithChildren;

function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <NavbarAdmin />
      {children}
    </>
  );
}

export default PublicLayout;
