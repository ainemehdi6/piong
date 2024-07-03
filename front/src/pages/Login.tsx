import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoPiong from "../assets/img/Logo-PIONG-1.png";
import ImgLeft from "../assets/img/TennisTable-left.png";
import ImgRight from "../assets/img/TennisTable-right.png";
import Input from "../components/Input/Input";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <>
      <div className="h-screen w-[100vw] flex flex-column justify-center items-center">
        <div className="flex flex-row ">
          <img src={ImgLeft} alt="Logo Piong" className="h-screen w-[17vw]" />
          <div>
            <div className="flex h-[20vh] bg-dark-gray items-center justify-center flex-col">
              <img src={LogoPiong} alt="" className="h-[10vh]" />
              <span className="text-orange">LE TENNIS DE TABLE POUR TOUS</span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="h-[70vh] items-center flex justify-center px-5 lg:px-0">
                <div className="max-w-screen-xl bg-dark-gray h-[70vh] border-r border-orange  flex justify-center  items-center flex-1">
                  <div className="p-4 sm:p-12">
                    <div className=" flex flex-col items-center">
                      <div className="text-center">
                        <h1 className="text-2xl xl:text-4xl font-bold text-orange">Connexion</h1>
                        <p className="text-light-gray">Connectez vous à votre compte</p>
                      </div>
                      <div className="w-full flex-1 mt-8">
                        <div className="mx-auto max-w-xs flex flex-col gap-4">
                          <Input type="email" placeholder="Email" />
                          <Input type="password" placeholder="Mot de passe" />
                          <button className="mt-5 tracking-wide font-semibold bg-orange text-dark-gray w-full py-4 rounded-lg hover:bg-orange-light transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <FontAwesomeIcon icon={faUserPlus} className="size-6 -ml-2" />
                            <span className="ml-3 text-dark-gray">Connexion</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[70vh] items-center flex justify-center px-5 lg:px-0">
                <div className="max-w-screen-xl bg-dark-gray h-[70vh]  flex justify-center  items-center flex-1">
                  <div className="p-4 sm:p-12">
                    <div className=" flex flex-col items-center">
                      <div className="text-center">
                        <h1 className="text-2xl xl:text-4xl font-bold text-orange">Inscription</h1>
                        <p className="text-light-gray">Pas encore de compte? Rejoignez nous !</p>
                      </div>
                      <div className="w-full flex-1 mt-8">
                        <div className="mx-auto max-w-xs flex flex-col gap-4">
                          <Input type="text" placeholder="Nom" />
                          <Input type="email" placeholder="Email" />
                          <Input type="tel" placeholder="Téléphone" />
                          <Input type="password" placeholder="Mot de passe" />
                          <button className="mt-5 tracking-wide font-semibold bg-orange text-dark-gray w-full py-4 rounded-lg hover:bg-orange-light transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <FontAwesomeIcon icon={faUserPlus} className="size-6 -ml-2" />
                            <span className="ml-3 text-dark-gray">S'inscrire</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-gray h-[10vh]"></div>
          </div>
          <img src={ImgRight} alt="Logo Piong" className="h-screen w-[17vw]" />
        </div>
      </div>
    </>
  );
}

export default Login;
