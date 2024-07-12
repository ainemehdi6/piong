import { useEffect, useState } from "react";
import Article from "../components/Accueil/Article";
import { Article as ArticleType } from "../utils/types";

import H1 from "../components/Headings/H1";

function Actualites() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <>
      <div className="h-[92vh] w-auto flex flex-row">
        <div className="w-full mx-8 my-4">
          <H1 className="text-center">Dernières actualités</H1>
          <div className="h-auto w-full flex flex-row flex-wrap justify-around space-y-6">
            <div className="w-full h-1 border-t border-orange"></div>
            {articles.map((article) => (
              <Article _id={article._id} title={article.title} createdAt={article.createdAt} image={article.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Actualites;
