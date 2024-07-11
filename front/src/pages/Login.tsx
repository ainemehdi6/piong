import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Alert from "../layouts/Alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.status != 200) {
        setAlert(data.msg);
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          phone: phone,
        }),
      });

      const data = await response.json();
      setAlert(data.msg);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <>
      {alert && <Alert message={alert} onClose={handleCloseAlert} />}
      <div className="h-screen w-[100vw] flex flex-column justify-center items-center">
        <div className="flex flex-row ">
          {/* Left side content */}
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
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        onClick={handleLogin}
                        className="mt-5 tracking-wide font-semibold bg-orange text-dark-gray w-full py-4 rounded-lg hover:bg-orange-light transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faUserPlus} className="size-6 -ml-2" />
                        <span className="ml-3 text-dark-gray">Connexion</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right side content */}
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
                      <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="tel"
                        placeholder="Téléphone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        onClick={handleRegister}
                        className="mt-5 tracking-wide font-semibold bg-orange text-dark-gray w-full py-4 rounded-lg hover:bg-orange-light transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
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
      </div>
    </>
  );
}

export default Login;
