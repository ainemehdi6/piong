import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapPin, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import placeHolder from "../assets/img/placeHolder.png";

function Meeting() {
  return (
    <>
      <div className="h-[84vh] w-auto flex flex-row bg-white mx-12 my-8 rounded-xl">
        <div className="h-auto w-4/12">
          <img className="h-full rounded-l-xl" src={placeHolder} alt="" />
        </div>
        <div className="py-12 px-24 w-8/12 h-auto flex flex-col justify-around">
          <h1 className="text-3xl">NOM ÉVÉNEMENT</h1>
          <div className="">
            <div className="px-8 py-2 flex flex-row items-center">
              <FontAwesomeIcon icon={faCalendar} />
              <p className="text-md pl-4">Le 14 juillet 2024</p>
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
            <p className="text-md pl-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="p-8 flex flex-row items-center">
            <span>-</span>
            <p className="text-md pl-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="p-8 flex flex-row items-center">
            <span>-</span>
            <p className="text-md pl-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;
