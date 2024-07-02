import LogoPiong from "../assets/img/Logo-PIONG-1.png";
import ImgLeft from "../assets/img/TennisTable-left.png";
import ImgRight from "../assets/img/TennisTable-right.png";

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
                          <input
                            className="w-full px-5 py-3 rounded-lg font-medium bg-medium-gray border border-light-gray placeholder-light-gray text-sm focus:outline-none focus:border-gray-400 focus:bg-medium-gray"
                            type="email"
                            placeholder="Email"
                          />
                          <input
                            className="w-full px-5 py-3 rounded-lg font-medium bg-medium-gray border border-light-gray placeholder-light-graytext-sm focus:outline-none focus:border-gray-400 focus:bg-medium-gray"
                            type="password"
                            placeholder="Mot de passe"
                          />
                          <button className="mt-5 tracking-wide font-semibold bg-orange text-dark-gray w-full py-4 rounded-lg hover:bg-orange-light transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg
                              className="w-6 h-6 -ml-2"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="8.5" cy="7" r="4" />
                              <path d="M20 8v6M23 11h-6" />
                            </svg>
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
                          <input
                            className="w-full px-5 py-3 rounded-lg font-medium bg-medium-gray border border-light-gray placeholder-light-gray text-sm focus:outline-none focus:border-gray-400 focus:bg-medium-gray"
                            type="text"
                            placeholder="Nom"
                          />
                          <input
                            className="w-full px-5 py-3 rounded-lg font-medium bg-medium-gray border border-light-gray placeholder-light-gray text-sm focus:outline-none focus:border-gray-400 focus:bg-medium-gray"
                            type="email"
                            placeholder="Email"
                          />
                          <input
                            className="w-full px-5 py-3 rounded-lg font-medium bg-medium-gray border border-light-gray placeholder-light-gray text-sm focus:outline-none focus:border-gray-400 focus:bg-medium-gray"
                            type="tel"
                            placeholder="N° Téléphone"
                          />
                          <input
                            className="w-full px-5 py-3 rounded-lg font-medium bg-medium-gray border border-light-gray placeholder-light-graytext-sm focus:outline-none focus:border-gray-400 focus:bg-medium-gray"
                            type="password"
                            placeholder="Mot de passe"
                          />
                          <button className="mt-5 tracking-wide font-semibold bg-orange text-dark-gray w-full py-4 rounded-lg hover:bg-orange-light transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg
                              className="w-6 h-6 -ml-2"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="8.5" cy="7" r="4" />
                              <path d="M20 8v6M23 11h-6" />
                            </svg>
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
