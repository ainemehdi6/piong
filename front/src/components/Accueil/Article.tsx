import placeHolder from "../../assets/img/placeholder.jpg";

function Article() {
  return (
    <>
      <div className="h-[20vh] w-[20vw] rounded-lg m-4 carousel-item relative">
        <img className="h-[20vh] w-[20vw] rounded-lg absolute" src={placeHolder} alt="" />
        <div className="h-[20vh] w-[20vw] absolute bg-gradient-to-b from-white to-medium-gray rounded-lg opacity-50"></div>
        <div className="absolute h-[20vh] w-[20vw] flex justify-center items-end">
          <div className="flex text-center flex-col w-[20vw] text-white pb-4">
            <h2 className="text-md font-semibold">TITRE Article</h2>
            <span className="text-sm">Courte intro</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
