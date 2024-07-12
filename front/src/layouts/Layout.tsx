import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar/Navbar";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import { useState, useEffect } from "react";

type PublicLayoutProps = PropsWithChildren;

function Layout({ children }: PublicLayoutProps) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("role");
    // Supposons que la présence du token indique un utilisateur admin
    // Vous pouvez ajouter une logique supplémentaire pour vérifier le rôle de l'utilisateur
    if (token) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <>
      {isAdmin ? <NavbarAdmin /> : <Navbar />}
      {children}
    </>
  );
}

export default Layout;
