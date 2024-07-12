import ArticleTabRow from "./ArticleTabRow";
import { useEffect, useState } from "react";
import { Article as ArticleType } from "../../utils/types";

const ArticleTab = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md rounded-md">
      <table className="w-full text-sm text-left text-dark-gray ">
        <thead className="text-xs text-dark-gray uppercase bg-xlight-gray rounded-t-md">
          <tr>
            <th scope="col" className="px-4 py-2 text-center">
              Titre
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Date
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              Supprimer
            </th>
          </tr>
        </thead>
        <tbody className="rounded-b-md text-xs">
          {articles.map((article) => (
            <ArticleTabRow
              _id={article._id}
              title={article.title}
              createdAt={article.createdAt}
              image={article.image}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTab;
