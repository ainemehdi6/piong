import LogoPiong from "../assets/img/Logo-PIONG-1.png";

function Menu() {
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="w-full h-20 bg-dark-gray flex flex-row">
        <div className="w-3/12 py-2 flex flex-col items-center h-full justify-center">
          <a href="./ ">
            <img src={LogoPiong} alt="Logo Piong" className="h-10 w-32" />
          </a>
          <span className="text-orange text-xs">LE TENNIS DE TABLE POUR TOUS</span>
        </div>
        <div className="w-3/12 py-2"></div>
        <div className="w-6/12 py-2 flex flex-row items-center space-x-10">
          <a href="./" className="text-light-gray mx-2 hover:text-orange">
            Accueil
          </a>
          <a href="./actus" className="text-light-gray mx-2 hover:text-orange">
            Actualités
          </a>
          <a href="./evenements" className="text-light-gray mx-2 hover:text-orange">
            Evenements
          </a>
          <a href="./contact" className="text-light-gray mx-2 hover:text-orange">
            Contact
          </a>
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="text-dark-gray mx-2 bg-orange rounded-2xl px-4 py-1 font-semibold hover:bg-orange-light"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <a
              href="./login"
              className="text-dark-gray mx-2 bg-orange rounded-2xl px-4 py-1 font-semibold hover:bg-orange-light"
            >
              Connexion
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
