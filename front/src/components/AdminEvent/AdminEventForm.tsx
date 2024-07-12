import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faT, faCalendar, faMapPin } from "@fortawesome/free-solid-svg-icons";
import MDEditor from "@uiw/react-md-editor";
import React from "react";

const AdminEventForm = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");

  return (
    <div className="h-full w-full p-4 rounded-xl bg-xlight-gray">
      <h1 className="text-xl w-full text-center p-2">Ajouter un évènement</h1>
      <div className="h-auto w-full">
        <form className="flex flex-col w-full">
          <div className="flex p-2 w-full">
            <div className="flex flex w-full mr-4 rounded-lg bg-bg-gray items-center">
              <div className="w-8 text-xs text-center">
                <FontAwesomeIcon icon={faT} />
              </div>
              <input className="w-full h-full rounded-r-lg pl-2 text-xs" type="text" placeholder="Votre titre ..." />
            </div>
            <div className="flex flex-col justify-end w-full mg-4">
              <select name="" id="">
                <option value="" selected>
                  Type événement
                </option>
                <option value="competition">Tournois</option>
                <option value="rassemblement">Rassemblement</option>
              </select>
            </div>
          </div>

          <div className="flex p-2 w-full">
            <div className="flex flex w-full mr-4 rounded-lg bg-bg-gray items-center">
              <div className="w-8 text-xs text-center">
                <FontAwesomeIcon icon={faMapPin} />
              </div>
              <input className="w-full h-full rounded-r-lg pl-2 text-xs h-7" type="text" placeholder="Lieux ..." />
            </div>
            <div className="flex flex w-full ml-4 rounded-lg bg-bg-gray items-center">
              <div className="w-8 text-xs text-center">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <input className="w-full h-full rounded-r-lg pl-2 text-xs" type="datetime-local" />
            </div>
          </div>

          <MDEditor value={value} onChange={(value) => setValue(value || "")} />

          <div className="w-full p-2">
            <input
              className="block w-2/3 text-sm text-dark-gray rounded-lg cursor-pointer bg-bg-gray focus:outline-none"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
            <p className="mt-1 text-xs" id="file_input_help">
              SVG, PNG, JPG.
            </p>
          </div>

          <button className="bg-orange text-white w-1/4 p-2 rounded-lg mt-4">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AdminEventForm;
