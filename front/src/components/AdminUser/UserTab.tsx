import { useEffect, useState } from "react";
import UserTabRow from "./UsertabRow";
import { User as UsersType } from "../../utils/types";

const UserTab = () => {
  const [users, setUsers] = useState<UsersType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md rounded-md">
      <table className="w-full text-sm text-left text-dark-gray ">
        <thead className="text-xs text-dark-gray uppercase bg-xlight-gray rounded-t-md">
          <tr>
            <th scope="col" className="px-4 py-2 text-center">
              Nom
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Mail
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Téléphone
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Valider
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Supprimer
            </th>
          </tr>
        </thead>
        <tbody className="rounded-b-md text-xs">
          {users.map((user) => (
            <UserTabRow _id={user._id} name={user.name} role={user.role} email={user.email} phone={user.phone} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTab;
