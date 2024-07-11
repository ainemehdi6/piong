// import Article from "../components/Accueil/Article";

import H1 from "../components/Headings/H1";

function Actualites() {
  return (
    <>
      <div className="h-[92vh] w-auto flex flex-row">
        <div className="w-full mx-8 my-4">
          <H1 className="text-center">Dernières actualités</H1>
          <div className="h-auto w-full flex flex-row flex-wrap justify-around space-y-6">
            <div className="w-full h-1 border-t border-orange"></div>
            {/* <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Actualites;
