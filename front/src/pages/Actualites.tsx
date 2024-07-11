// import Article from "../components/Accueil/Article";

function Actualites() {
  return (
    <>
      <div className="h-[92vh] w-auto flex flex-row">
        <div className="w-full mx-8 my-4">
          <h1 className="text-4xl w-full text-center p-4">Les dernières Actus</h1>
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
