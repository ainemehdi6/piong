import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const EventTabRow = () => {
  return (
    <tr className="bg-white hover:bg-bg-gray">
      <th scope="row" className="px-3 py-2 font-medium text-dark-gray whitespace-nowrap text-center">
        Tournois Wasquehal
      </th>
      <td className="px-3 py-2 text-center">Tournois</td>
      <td className="px-3 py-2 text-center">123 Rue Emile Dellette, 59290 Wasquehal</td>
      <td className="px-3 py-2 text-center">17-07-2024 12:00pm</td>
      <td className="px-3 py-2 text-center ">
        <a href="" className="hover:text-light-gray">
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </td>
    </tr>
  );
};

export default EventTabRow;
