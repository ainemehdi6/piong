import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCircleUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Account() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-full w-[40vw] p-4 rounded-xl bg-xlight-gray mx-72 my-24">
        <h1 className="text-xl w-full text-center p-2">Mon compte</h1>
        <div className="h-auto w-full">
          <form className="flex flex-col w-full justify-betwenn">
            <div className="flex w-full my-4">
              <div className="w-8 text-xs text-center flex justify-center items-center">
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              <input
                className="w-full h-full rounded-r-lg pl-2 text-xs h-7 placeholder-dark-gray"
                type="text"
                placeholder="Robin Thomas"
              />
            </div>
            <div className="flex flex w-full mr-4 rounded-lg bg-bg-gray items-center my-4">
              <div className="w-8 text-xs text-center flex justify-center items-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                className="w-full h-full rounded-r-lg pl-2 text-xs h-7 placeholder-dark-gray"
                type="text"
                placeholder="piong@piong.piong"
              />
            </div>
            <div className="w-full border-b">
              <span className="text-sm pl-2">Modifier mot de passe</span>
            </div>
            <div className=" m-4">
              <label className="text-sm">Nouveau mot de passse</label>
              <div className="flex flex w-full rounded-lg bg-bg-gray items-center">
                <div className="w-8 text-xs text-center flex justify-center items-center">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input className="w-full h-full rounded-r-lg text-xs  h-7 placeholder-dark-gray" type="password" />
              </div>
            </div>
            <div className=" m-4">
              <label className="text-sm">Confirmez mot de passse</label>
              <div className="flex flex w-full rounded-lg bg-bg-gray items-center">
                <div className="w-8 text-xs text-center flex justify-center items-center">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input className="w-full h-full rounded-r-lg text-xs  h-7 placeholder-dark-gray" type="password" />
              </div>
            </div>

            <button className="bg-orange text-white w-1/4 p-2 rounded-lg mt-4">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
