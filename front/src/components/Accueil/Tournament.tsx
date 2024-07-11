import placeHolder from "../../assets/img/placeHolder.png";
import { Event as EventType } from "../../utils/types"; // Importation de l'interface Event

type TournamentProps = Pick<EventType, "title" | "eventStartDate" | "flyer">;

function Tournament({ title, eventStartDate, flyer }: TournamentProps) {
  const formattedDate = new Date(eventStartDate).toLocaleDateString();

  return (
    <>
      <div className="h-[30vh] w-[13vw] rounded-lg relative">
        <img className="h-[30vh] w-[13vw] rounded-lg absolute" src={flyer || placeHolder} alt={title} />
        <div className="h-[30vh] w-[13vw] absolute bg-gradient-to-b from-white to-medium-gray rounded-lg opacity-50"></div>
        <div className="absolute h-[30vh] w-[13vw] flex justify-center items-end">
          <div className="flex text-center flex-col w-[13vw] text-white pb-4">
            <h2 className="text-md font-semibold">{title}</h2>
            <span className="text-sm">{formattedDate}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tournament;
