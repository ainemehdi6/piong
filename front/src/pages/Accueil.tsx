import Article from "../components/Accueil/Article";
import Tournament from "../components/Accueil/Tournament";
import Meeting from "../components/Accueil/Meeting";
import imgAccueil from "../assets/img/accueil-img.png";
import logoPiong from "../assets/images/logo-piong/logo-piong-light.svg"

function Accueil() {
  console.log(localStorage.getItem("token"));
  return (
    <>
      <div className="w-full min-h-[92vh]">
        <div className="flex h-[89vh] flex-col">
          <div className="flex flex-row justify-between w-full px-8 ">
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
          <div className="flex flex-row px-12 h-full">
            <div className="h-full w-2/12 flex flex-col justify-between">
              <Tournament />
              <Meeting />
            </div>
            <div className="bg-white rounded-xl w-10/12 h-full  flex flex-rox justify-center">
              <div className="w-7/12 p-12 h-full flex flex-col justify-around">
                <div className="flex items-center">
                  <img className="h-8" src={logoPiong} alt="" />
                  <span className="pl-4">TENNIS DE TABLE POUR TOUS</span>
                </div>
                <span className="pl-8">
                  Piong est une association de tennis de table ouverte à tous.
                </span>

                <span className="pl-8">
                  Notre objectif est d'offrir un accès au tennis de table pour TOUS !
                </span>

                <span className="pl-8">
                  Localisée dans la métropole lilloise, notre association organise différents évènements tels que des tournois ou d'autres moments de convivialité.
                </span>
              </div>
              <div className="w-5/12 h-auto flex justify-center items-center p-12">
                <img className="h-auto  m-0" src={imgAccueil} alt="" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Accueil;
