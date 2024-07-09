import placeHolder from "../assets/img/placeHolder.png";

function Tournament() {
  return (
    <>
      <div className="h-[35vh] ">
        <div className="bg-orange py-2 rounded-t-lg">
          <h1 className="text-2xl text-center font-semibold text-medium-gray">Prochain Tournoi</h1>
        </div>
        <div className="flex flex row p-4 items-center w-full border-b border-light-gray hover:bg-dark-gray cursor-pointer h-full ">
          <div className="h-auto w-5/12">
            <img className="h-auto" src={placeHolder} alt="" />
          </div>
          <div className="text-light-gray pl-6 h-auto w-7/12">
            <h3 className="text-lg hover:underline">Titre article</h3>
            <p className="pl-4 text-sm">Du 9 Juillet au 11 Juillet</p>
            <p className="text-md pl-6">Courte description du prochain Tournoi sans rentrer dans les détails</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tournament;
