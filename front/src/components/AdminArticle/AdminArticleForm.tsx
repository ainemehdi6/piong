import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import React from "react";

const AdminArticleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:5000/api/articles", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
          image: "https://www.macapflag.com/blog/wp-content/uploads/2024/02/tennis-de-table-TITRE.jpg",
        }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("Article ajouté avec succès");
        setTitle("");
        setDescription("");
        window.location.reload();
      } else {
        console.error("Erreur lors de l'ajout de l'article");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article:", error);
    }
  };

  return (
    <div className="h-full w-full py-8   px-8 rounded-xl bg-xlight-gray">
      <h1 className="text-4xl w-full text-center p-4">Ajouter un article</h1>
      <div className="h-auto w-full">
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <label className="text-lg w-full font-medium">Titre</label>
          <input
            className="w-3/6 rounded-lg pl-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-lg w-full font-medium">Contenu</label>
          <MDEditor value={description} onChange={(value: string | undefined) => setDescription(value || "")} />{" "}
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
