import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { User as UsersType } from "../../utils/types";

type UserProps = Pick<UsersType, "_id" | "name" | "role" | "email" | "phone">;

const UserTabRow = ({ _id, name, email, phone, role }: UserProps) => {
  const handleValidate = async () => {
    try {
      await fetch(`http://localhost:5000/api/users/${_id}/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <tr className="bg-white hover:bg-bg-gray">
      <th scope="row" className="px-3 py-2 font-medium text-dark-gray whitespace-nowrap text-center">
        {name}
      </th>
      <td className="px-3 py-2 text-center">{email}</td>
      <td className="px-3 py-2 text-center">{phone}</td>
      <td className="px-3 py-2 text-center">
        {role ? (
          <a href="" className="hover:text-light-gray">
            <FontAwesomeIcon icon={faCheck} />
          </a>
        ) : (
          <button onClick={handleValidate} className="bg-blue-500 text-blue-500 px-2 py-1 rounded hover:bg-blue-700">
            Valider
          </button>
        )}
      </td>
      <td className="px-3 py-2 text-center">
        <a href="" className="hover:text-light-gray">
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </td>
    </tr>
  );
};

export default UserTabRow;
