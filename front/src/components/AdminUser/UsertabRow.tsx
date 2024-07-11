import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const UserTabRow = () => {
  return (
    <tr className="bg-white hover:bg-bg-gray">
      <th scope="row" className="px-3 py-2 font-medium text-dark-gray whitespace-nowrap text-center">
        Prénom Nom
      </th>
      <td className="px-3 py-2 text-center">exemple@piong.fr</td>
      <td className="px-3 py-2 text-center">0600000000</td>
      <td className="px-3 py-2 text-center">
        <a href="" className="hover:text-light-gray">
          <FontAwesomeIcon icon={faCheck} />
        </a>
      </td>
      <td className="px-3 py-2 text-center ">
        <a href="" className="hover:text-light-gray">
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </td>
    </tr>
  );
};

export default UserTabRow;
