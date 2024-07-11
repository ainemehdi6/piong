import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DropDownProps = {
  dropDownOpened: boolean;
  toggleDropDown: () => void;
  dropDownId?: string;
};

function toggleDropDown({ dropDownOpened, toggleDropDown, dropDownId }: DropDownProps) {
  return (
    <button
      data-collapse-toggle={dropDownId}
      type="button"
      className=" block py-2 pr-4 pl-3 lg:p-0 border-b hover:bg-gray-100 lg:hover:bg-transparent"
      aria-controls={dropDownId}
      aria-expanded="false"
      onClick={toggleDropDown}
    >
      <span className="sr-only">{dropDownOpened ? "Fermer le menu" : "Ouvrir le menu"}</span>
      Admin
      <FontAwesomeIcon icon={dropDownOpened ? faChevronUp : faChevronDown} className="size-4" />
    </button>
  );
}

export default toggleDropDown;
