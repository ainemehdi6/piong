import { useEffect, useState } from "react";
import Tournament from "../components/Accueil/Tournament";
import Meeting from "../components/Accueil/Meeting";
import { Event as EventType } from "../utils/types";
import H2 from "../components/Headings/H2";
function Evenements() {
  const [tournaments, setTournaments] = useState<EventType[]>([]);
  const [meetings, setMeetings] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events/tournaments")
      .then((response) => response.json())
      .then((data) => setTournaments(data))
      .catch((error) => console.error("Error fetching tournaments:", error));

    fetch("http://localhost:5000/api/events/meetings")
      .then((response) => response.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.error("Error fetching meetings:", error));
  }, []);

  return (
    <>
      <div className="h-[92vh] w-auto flex flex-row">
        <div className="w-6/12 m-8">
          <H2 className="text-center">TOURNOIS</H2>
          <div className="h-auto w-full flex flex-row flex-wrap justify-around space-y-8">
            <div className="w-full h-5 border-t border-orange"></div>
            {tournaments.map((tournament) => (
              <Tournament
                _id={tournament._id}
                title={tournament.title}
                eventStartDate={tournament.eventStartDate}
                flyer={tournament.flyer}
              />
            ))}
          </div>
        </div>

        <div className="w-6/12 m-8">
          <H2 className="text-center">ÉVÉNEMENTS</H2>
          <div className="h-auto w-full flex flex-row flex-wrap justify-around space-y-8">
            <div className="w-full h-5 border-t border-orange"></div>
            {meetings.map((meeting) => (
              <Meeting
                _id={meeting._id}
                title={meeting.title}
                eventStartDate={meeting.eventStartDate}
                flyer={meeting.flyer}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Evenements;
