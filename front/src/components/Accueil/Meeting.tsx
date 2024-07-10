import placeHolder from "../../assets/img/placeHolder.png";

function Meeting() {
  return (
    <>
      <div className="h-[30vh] w-[13vw] rounded-lg">
        <img className="h-[30vh] w-[13vw] rounded-lg absolute" src={placeHolder} alt="" />
        <div className="h-[30vh] w-[13vw] absolute bg-gradient-to-b from-white to-medium-gray rounded-lg opacity-50"></div>
        <div className="absolute h-[30vh] w-[13vw] flex justify-center items-end">
          <div className="flex text-center flex-col w-[13vw] text-white pb-4">
            <h2 className="text-md font-semibold">TITRE EVENEMENT</h2>
            <span className="text-sm">DATE EVENEMENT</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;
