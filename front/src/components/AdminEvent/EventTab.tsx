import EventTabRow from "./EventTabRow"; // Importez le composant enfant

const EventTab = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-md">
      <table className="w-full text-sm text-left text-dark-gray ">
        <thead className="text-xs text-dark-gray uppercase bg-xlight-gray rounded-t-md">
          <tr>
            <th scope="col" className="px-4 py-2 text-center">
              Evènement
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Type
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Lieux
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Date & heure
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Supprimer
            </th>
          </tr>
        </thead>
        <tbody className="rounded-b-md text-xs">
          <EventTabRow />
          <EventTabRow />
          <EventTabRow />
          <EventTabRow />
          <EventTabRow />
          <EventTabRow />
          <EventTabRow />
        </tbody>
      </table>
    </div>
  );
};

export default EventTab;
