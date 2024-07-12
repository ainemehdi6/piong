import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Article as ArticleType } from "../../utils/types";

type ArticleProps = Pick<ArticleType, "_id" | "title" | "createdAt" | "image">;

const ArticleTabRow = ({ _id, title, createdAt }: ArticleProps) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/articles/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("Article supprimé avec succès");
        window.location.reload();
      } else {
        console.error("Erreur lors de la suppression de l'article");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article:", error);
    }
  };

  return (
    <tr className="bg-white hover:bg-bg-gray">
      <td className="px-3 py-2 text-center">{title}</td>
      <td className="px-3 py-2 text-center">{formattedDate}</td>
      <td className="px-3 py-2 text-center">
        <a href="#" onClick={handleDelete} className="hover:text-light-gray">
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </td>
    </tr>
  );
};

export default ArticleTabRow;
