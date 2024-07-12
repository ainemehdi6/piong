import MDEditor from "@uiw/react-md-editor";
import React from "react";

const AdminArticleForm = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");

  return (
    <div className="h-full w-full py-8   px-8 rounded-xl bg-xlight-gray">
      <h1 className="text-4xl w-full text-center p-4">Ajouter un article</h1>
      <div className="h-auto w-full">
        <form className="flex flex-col w-full">
          <label className="text-lg w-full font-medium">Titre</label>
          <input className="w-3/6 rounded-lg pl-2" type="text" />
          <label className="text-lg w-full font-medium">Contenu</label>
          <MDEditor value={value} onChange={(value) => setValue(value || "")} />
          <label className="text-lg w-full font-medium">Image</label>
          <input
            className="block w-2/3 text-sm text-dark-gray rounded-lg cursor-pointer bg-bg-gray focus:outline-none"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p className="mt-1 text-xs" id="file_input_help">
            SVG, PNG, JPG.
          </p>
          <button className="bg-orange text-white w-1/4 p-2 rounded-lg mt-4">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AdminArticleForm;
