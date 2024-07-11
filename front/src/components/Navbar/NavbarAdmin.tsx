import { Link } from "react-router-dom";
import MyPaths from "../../MyPaths";
import NavItem from "./NavItem";
import { useState } from "react";
import logoPiongLight from "../../assets/images/logo-piong/logo-piong-light.svg";
import ToggleButton from "./ToggleButton";
import Dropdow from "./DropDown";

function NavbarAdmin() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [dropDownOpened, setDropDownOpened] = useState(false);

  const menuId = "mobile-menu";
  const dropDownId = "dropDownId";

  const toggleMenu = () => setMenuOpened((previous) => !previous);
  const toggleDropDown = () => setDropDownOpened((previous) => !previous);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={MyPaths.ACCUEIL} className="flex items-center">
            <img src={logoPiongLight} className="mr-3 h-6 sm:h-9" alt="Logo PIONG" />
          </Link>
          <div className="flex items-center lg:order-2">
            <ToggleButton menuOpened={menuOpened} toggleMenu={toggleMenu} menuId={menuId} />
          </div>
          <div
            className={`${menuOpened || "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id={menuId}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavItem href={MyPaths.ACCUEIL}>Accueil</NavItem>
              </li>
              <li>
                <NavItem href={MyPaths.ACTUS}>Actualités</NavItem>
              </li>
              <li>
                <NavItem href={MyPaths.EVENEMENTS}>Évènements</NavItem>
              </li>
              <li>
                <NavItem href={MyPaths.CONTACT}>Contact</NavItem>
              </li>
              <div className="flex flex-col">
                <Dropdow dropDownOpened={dropDownOpened} toggleDropDown={toggleDropDown} dropDownId={dropDownId} />

                <div id="dropDownId" className={`${dropDownOpened || "hidden"} bg-white shadow w-44 absolute mt-8`}>
                  <ul>
                    <li>
                      <NavItem href={MyPaths.ADMIN_USER}>Admin user</NavItem>
                    </li>
                    <li>
                      <NavItem href={MyPaths.ADMIN_ARTICLE}> Admin Article</NavItem>
                    </li>
                    <li>
                      <NavItem href={MyPaths.ADMIN_EVENT}> Admin event</NavItem>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarAdmin;
