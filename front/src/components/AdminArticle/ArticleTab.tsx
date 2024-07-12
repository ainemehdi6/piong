import ArticleTabRow from "./ArticleTabRow"; // Importez le composant enfant

const ArticleTab = () => {
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
          <ArticleTabRow />
          <ArticleTabRow />
          <ArticleTabRow />
          <ArticleTabRow />
          <ArticleTabRow />
          <ArticleTabRow />
          <ArticleTabRow />
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTab;
