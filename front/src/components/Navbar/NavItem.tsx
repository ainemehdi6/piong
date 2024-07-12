import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type NavItemProps = PropsWithChildren<{
  href: string;
}>;

function NavItem({ href, children }: NavItemProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${isActive ? "text-gray-900 border-gray-200 lg:border-transparent" : "text-gray-500 border-transparent"} block py-2 pr-4 pl-3 lg:p-0 border-b hover:bg-gray-100 lg:hover:bg-transparent`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
