import placeHolder from "../assets/img/placeHolder.png";

function ArticleItemAccueil() {
  return (
    <>
      <div className="flex flex row p-4 justify-center items-center w-full border-b border-light-gray sm:h-[30vh], md:h-[20vh], lg:h-[21vh] hover:bg-dark-gray cursor-pointer">
        <div className="h-auto">
          <img className="h-auto" src={placeHolder} alt="" />
        </div>
        <div className="text-light-gray pl-6 h-full">
          <div>
            <h2 className="text-lg hover:underline">Titre article</h2>
            <p className="pl-4 text-sm">09/07/2024</p>
          </div>
          <p className="pl-6 text-xs">
            Lorem ipsum dolor sit amet. 33 accusamus quidem et quae doloribus 33 nihil velit ut obcaecati aliquid et
            facilis iste cum tempora consectetur? Non itaque voluptatibus aut voluptas distinctio.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default ArticleItemAccueil;
