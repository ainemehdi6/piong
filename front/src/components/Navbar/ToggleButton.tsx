import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ToggleButtonProps = {
  menuOpened: boolean;
  toggleMenu: () => void;
  menuId?: string;
};

function ToggleButton({ menuOpened, toggleMenu, menuId }: ToggleButtonProps) {
  return (
    <button
      data-collapse-toggle={menuId}
      type="button"
      className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      aria-controls={menuId}
      aria-expanded="false"
      onClick={toggleMenu}
    >
      <span className="sr-only">{menuOpened ? "Fermer le menu" : "Ouvrir le menu"}</span>
      <FontAwesomeIcon icon={menuOpened ? faXmark : faBars} className="size-6" />
    </button>
  );
}

export default ToggleButton;
