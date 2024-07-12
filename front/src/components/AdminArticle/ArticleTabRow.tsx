import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ArticleTabRow = () => {
  return (
    <tr className="bg-white hover:bg-bg-gray">
      <td className="px-3 py-2 text-center">Les 5 Erreurs les plus courantes au ping pong</td>
      <td className="px-3 py-2 text-center">17-07-2024</td>
      <td className="px-3 py-2 text-center ">
        <a href="" className="hover:text-light-gray">
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </td>
    </tr>
  );
};

export default ArticleTabRow;
