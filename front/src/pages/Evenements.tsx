import Tournament from "../components/Accueil/Tournament";
import Meeting from "../components/Accueil/Meeting";

function Evenements() {
  return (
    <>
      <div className="h-[92vh] w-auto flex flex-row">
        <div className="w-6/12 m-8">
          <h1 className="text-4xl w-full text-center p-4">TOURNOIS</h1>
          <div className="h-auto w-full flex flex-row flex-wrap justify-around space-y-8">
            <div className="w-full h-5 border-t border-orange"></div>
            <Tournament />
            <Tournament />
            <Tournament />
            <Tournament />
            <Tournament />
            <Tournament />
            <Tournament />
          </div>
        </div>

        <div className="w-6/12 m-8">
          <h1 className="text-4xl w-full text-center p-4">ÉVÉNEMENTS</h1>
          <div className="h-auto w-full flex flex-row flex-wrap justify-around space-y-8">
            <div className="w-full h-5 border-t border-orange"></div>
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
          </div>
        </div>
      </div>
    </>
  );
}

export default Evenements;
