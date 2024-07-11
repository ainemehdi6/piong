import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapPin, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Event as EventType } from "../utils/types";

function Tournament() {
  const { id } = useParams<{ id: string }>();
  const [tournament, setTournament] = useState<EventType>();

  useEffect(() => {
    fetch(`http://localhost:5000/api/events/${id}`)
      .then((response) => response.json())
      .then((data) => setTournament(data))
      .catch((error) => console.error("Error fetching tournament:", error));
  }, [id]);

  if (!tournament) {
    return <div>Loading...</div>;
  }

  const formattedStartDate = new Date(tournament.eventStartDate).toLocaleDateString();
  const formattedEndDate = new Date(tournament.eventEndDate).toLocaleDateString();

  return (
    <>
      <div className="h-[84vh] w-auto flex flex-row bg-white mx-12 my-8 rounded-xl">
        <div className="h-auto w-4/12">
          <img className="h-full rounded-l-xl" src={tournament.flyer} alt="" />
        </div>
        <div className="py-12 px-24 w-8/12 h-auto flex flex-col justify-around">
          <h1 className="text-3xl">{tournament.title}</h1>
          <div className="">
            <div className="px-8 py-2 flex flex-row items-center">
              <FontAwesomeIcon icon={faCalendar} />
              <p className="text-md pl-4">
                Du {formattedStartDate} au {formattedEndDate}
              </p>
            </div>
            <div className="px-8  py-2 flex flex-row items-center">
              <FontAwesomeIcon icon={faMapPin} />
              <p className="text-md pl-4"> 137 Rue du chalenge stack, Lille</p>
            </div>
            <div className="px-8  py-2 flex flex-row items-center">
              <FontAwesomeIcon icon={faUserPlus} />
              <p className="text-md pl-4"> Inscription par mail : Inscription@piong.fr</p>
            </div>
          </div>
          <div className="p-8 flex flex-row items-center">
            <span>-</span>
            <p className="text-md pl-4">{tournament.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tournament;
