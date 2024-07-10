import image from "../assets/img/contact-image.svg";

function Contact() {
  return (
    <>
      <div className="mx-36 my-16 h-[100-vh] flex flex-row shadow-md">
        <div className="h-full w-6/12 py-8 px-12 bg-xlight-gray">
          <h2 className="text-xl w-full text-center pb-4">Un Message à nous faire parvenir ?</h2>
          <label className="block mt-2 text-sm font-medium text-dark-gray"> Nom</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
              <svg className="w-4 h-4 text-dark-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </div>
            <input type="text" id="email-address-icon" className="placeholder-dark-gray  text-sm rounded-lg focus:outline-none focus:placeholder-light-gray block w-full ps-10 p-2.5" placeholder="NOM Prénom" />
          </div>
          <label className="block mt-2 text-sm font-medium text-dark-gray">Votre E-mail</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
              <svg className="w-4 h-4 text-dark-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input type="text" id="email-address-icon" className="placeholder-dark-gray  text-sm rounded-lg focus:outline-none focus:placeholder-light-gray block w-full ps-10 p-2.5" placeholder="Exemple@mail.com" />
          </div>
          <label className="block mt-2 text-sm font-medium text-dark-gray">Votre Message</label>
          <textarea id="email-address-icon" className="placeholder-dark-gray h-[25vh] text-sm rounded-lg focus:outline-none focus:placeholder-light-gray block w-full p-3" placeholder="Bonjour..." />
          <div className="w-4/12 text-center my-4 bg-orange py-1 px-6 rounded-xl hover:border-2 hover:border-white">
            <button className="w-full text-dark-gray font-semibold">Envoyer</button>
          </div>

        </div>
        <div className="w-6/12 h-full py-8 px-4 flex items-center justify-center">
          <img src={image} className="h-[60vh]" alt="" />
        </div>
      </div>
    </>
  );
}

export default Contact;
