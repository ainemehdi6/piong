import UserTabRow from "./UsertabRow"; // Importez le composant enfant

const UserTab = () => {
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
          <UserTabRow />
          <UserTabRow />
          <UserTabRow />
          <UserTabRow />
          <UserTabRow />
          <UserTabRow />
          <UserTabRow />
        </tbody>
      </table>
    </div>
  );
};

export default UserTab;
