import Menu from "../composents/Menu";
import ArticleItemAccueil from "../composents/ArticleItemAccueil";
import Tournament from "../composents/Tournament";
import Meeting from "../composents/Meeting";

function Accueil() {
  console.log(localStorage.getItem("token"));
  return (
    <>
      <div className="w-full h-[100vh]">
        <Menu />
        <div className="flex h-[89vh]">
          <div className="w-8/12 h-full m-6 p-2 border-t border-orange">
            <ArticleItemAccueil />
            <ArticleItemAccueil />
            <ArticleItemAccueil />
            <ArticleItemAccueil />
          </div>
          <div className="h-full w-4/12  m-2 p-2 flex flex-col space-y-16">
            <Tournament />
            <Meeting />
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;
