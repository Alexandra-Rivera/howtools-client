
import { IconSettings2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <section className="bg-sky-950">
        <div className="bg-blue-600">

        {/* Header */}
          <section className="flex flex-row justify-between my-px border-0 bg-gray-950 md:bg-gray-950 h-50 xl:bg-transparent h-50 lg:bg-transparent h-50 sm:bg-gray-950 h-50 2xl:bg-transparent">
            <h1 className="text-white font-thin text-2xl flex flex-row items-center gap-2 p-5 m-0">
              <IconSettings2 />
              HT
            </h1>
          </section>
          <div className="bg-blue-600 font-sans text-white flex flex-col h-[100vh] justify-center">
            <div className="flex flex-col gap-2 mx-auto w-full p-10">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
                Bienvenido a HowTools
              </h1>

              <h2 className="font-light text-3xl md:text-4xl xl:text-5xl lg:text-4xl">
                ¿Qué deseas hacer?
              </h2>
            </div>

            {/* logIn y SignUp Buttons */}
            <div className="flex flex-col gap-2 items-center justify-center my-10">
            <Link to="/SignUp" className="bg-gradient-to-r from-blue-500 via-blue-700 to-sky-300 font-thin rounded-full w-[40%] h-[3rem] sm:max-w-[30%] sm:text-base lg:max-w-[20%] md:max-w-[20%] border-2 p-5 py-1 md:text-base hover:bg-slate-200 mb-2 hover:text-blue-200 hover:border-blue-200 hover:font-semibold hover:outline-dotted hover:border-0 flex items-center justify-center">
            <button>
                Registrarse
              </button>
            </Link>


            <Link to="/LogIn" className="bg-gradient-to-r from-blue-500 via-blue-700 to-sky-300 font-thin rounded-full w-[40%] h-[3rem] sm:max-w-[30%] sm:text-base lg:max-w-[20%] md:max-w-[20%] border-2 hover:outline-dotted hover:border-0 p-5 py-1 md:text-base hover:bg-slate-200 hover:text-blue-200 hover:border-blue-200 hover:font-semibold flex items-center justify-center"> 
            <button>
                Iniciar sesión
              </button>
            </Link>
            </div>
          </div>
        </div>


        {/*Howtools Mission*/}
        <section className="rounded-[50px] drop-shadow-2xl text-blue-200 bg-sky-900 h-[100vh] mx-5 px-5 xl:bg-transparent 2xl:bg-transparent my-5 text-center flex flex-col items-center justify-center gap-10">
          <h1 className="font-righteous font-bold md:text-6xl 2xl:text-7xl">
            ¿Qué es lo que hacemos?
          </h1>

          <p className="font-thin text-blue-100 md:text-xl 2xl:text-3xl 2xl:px-20">
            Estamos frente a un mundo cambiante, en el que la tecnología está
            conquistando cada vez más el mundo competitivo de las empresas. Es
            por ello que en HowTools, tenemos la misión de ser un medio por el
            cual personas que tengan conocimiento en temas de informática y
            tecnología, puedan compartir información de importancia a aquellas
            que necesiten mejorar sus habilidades y puedan generar una
            comunicación directa entre sí, con lo cual se pueda formar una
            comunidad de apoyo entre todos los miembros de la app.
          </p>
        </section>


        {/* ¿Qué hacer en Howtools? Section */}
        <section className="bg-gray-900 mx-auto w-[98%] rounded-[50px] p-10 px-5 ">
          <h1 className="font-bold text-indigo-400 md:text-6xl sm:text-5xl sm:m-10 inline-block">
            ¿Qué hacer?
          </h1>

          <section className="m-auto w-[100%] 2xl:w-[60%] xl:w-[60%] md:w-[100%] sm:w-[85%] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="bg-sky-300 rounded-lg font-sans m-5 w-50 flex flex-col gap-4 p-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-book-upload"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"></path>
                <path d="M11 16h-5a2 2 0 0 0 -2 2"></path>
                <path d="M15 16l3 -3l3 3"></path>
                <path d="M18 13v9"></path>
              </svg>
              <h3 className="font-bold text-3xl">Comparte y aprende</h3>
              <b>
                <p className="text-1xl">Publica documentación de tu interés</p>
              </b>
              <p>
                Si tienes algún tipo de documento que consideres apto para
                publicarse ¡No dudes en hacerlo! Si no estás seguro de lo que
                vas a publicar, los moderadores y verificadores de la app, se
                encargarán de revisar toda el contenido que subas antes de
                publicarlo.
              </p>
            </div>
            <div className="bg-sky-300 rounded-lg font-sans m-5 w-50 flex flex-col gap-4 p-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-school"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
              </svg>
              <h3 className="font-bold text-3xl">Amplía tus conocimientos</h3>
              <b>
                <p className="text-1xl">
                  Aprende de las publicaciones de los demás
                </p>
              </b>
              <p>
                Aprende junto a otras personas de los conocimientos de alguien
                más. Enfócate en los temas de tu interés y aprovecha la
                información que recibas para tu formación como profesional.
              </p>
            </div>
            <div className="bg-sky-300 rounded-lg font-sans m-5 w-50 flex flex-col gap-4 p-10  items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-award"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
                <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
                <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
              </svg>
              <h3 className="font-bold text-3xl">Información de calidad</h3>
              <b>
                <p className="text-1xl">
                  Tendrás la seguridad de estar leyendo información confiable
                </p>
              </b>
              <p>
                Cada documento que leas es previamente revisado y aprobado por
                los verificadores de HowTools. Todo lo que verás ha sido
                cuidadosamente seleccionado y puedes tener la confianza de que
                estarás bien informado.
              </p>
            </div>
            <div className="bg-sky-300 rounded-lg font-sans m-5 w-50 flex flex-col gap-4 p-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-star"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
              <h3 className="font-bold text-3xl">¡Califica!</h3>
              <b>
                <p className="text-1xl">
                  Responde las dudas de tus publicaciones
                </p>
              </b>
              <p>
                Las calificaciones dentro de la app son sumamente importantes.
                Cada vez que publiques un documento, debes darle seguimiento a
                los comentarios que recibas. Cada respuesta tuya va a ser
                evaluada, y esto sumará puntos en tu calificación global. Si
                acumulas un buen privilegio, podrás tener acceso a mayores
                ventajas a futuro.
              </p>
            </div>
            <div className="bg-sky-300 rounded-lg font-sans m-5 w-50 flex flex-col gap-4 p-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message-2-check"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9h8"></path>
                <path d="M8 13h6"></path>
                <path d="M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"></path>
                <path d="M15 19l2 2l4 -4"></path>
              </svg>
              <h3 className="font-bold text-3xl">
                Comenta y resuelve tus dudas
              </h3>
              <b>
                <p className="text-1xl">
                  Si tienes dudas no dudes en comentar la publicación del
                  creador de contenido.
                </p>
              </b>
              <p>
                El aprendizaje es la meta final de nuestra aplicación, por ende,
                si tienes dudas ¡no dudes en hacerlas! El creador de contenido
                está en la obligación de darle seguimiento a todo lo que
                publique, por tanto, tus dudas deben ser solventadas y tú estás
                en la obligación de calificar al creador de contenido.
              </p>
            </div>
            <div className="bg-sky-300 rounded-lg font-sans m-5 w-50 flex flex-col gap-4 p-10  items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-certificate-2"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M10 7h4"></path>
                <path d="M10 18v4l2 -1l2 1v-4"></path>
                <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2"></path>
              </svg>
              <h3 className="font-bold text-3xl">
                Genera privilegio en la comunidad
              </h3>
              <b>
                <p className="text-1xl">
                  Conviertete en un usuario activo en la comunidad y obtén
                  privilegio
                </p>
              </b>
              <p>
                Si llegas a tener privilegio dentro de la app, podrás tener
                acceso a otras funciones como poder modificar tus documentos
                directamente en la app
              </p>
            </div>
          </section>

          {/*'Inicia Ahora' Button */}
          <Link to="/SignUp"  className="bg-green-500 active:text-green-200 rounded-[2rem] p-4 xl:w-[30%] 2xl:w-[30%] lg:w-[30%] w-[40%] h-[30%] font-semibold mx-auto  mt-10 hover:bg-green-300 flex items-center justify-center">
          <button>
            ¡Inicia ahora!
          </button>
          </Link>
        </section>


        {/* ¿Por qué Howtools? Cards*/}
        <section className="bg-gray-950 mt-5 rounded-[50px] mb-5 sm:mx-5">
          <div className="flex flex-col sm:mx-20 2xl:mx-auto items-center justify-center p-20">
            <div className="flex flex-row font-bold">
              <h1 className="text-pink-400 m-0 text-5xl lg:text-6xl xl:text-7xl md:text-7xl">
                ¿
              </h1>
              <h1 className="text-indigo-400 m-0 text-5xl lg:text-6xl xl:text-7xl md:text-7xl">
                Por qué
              </h1>
            </div>
            <div className="flex flex-row font-bold">
              <h1 className="text-white m-0 text-5xl lg:text-6xl xl:text-7xl md:text-7xl">
                HowTools
              </h1>
              <h1 className="text-pink-400 m-0 text-6xl lg:text-6xl xl:text-7xl md:text-7xl">
                ?
              </h1>
            </div>
          </div>
          <section className="px-10 pb-10 flex flex-col gap-1 md:gap-1 2xl:flex-row xl:flex-row lg:flex-row items-center justify-center">
            <div className="hover:text-cyan-200 bg-transparent w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] xl:w-[400px] xl:h-[400px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px]  rounded-[50px] border-2 mx-auto flex flex-col items-center justify-center md:my-5 sm:my-5 gap-10 my-20 hover:border-purple-700 text-purple-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-book"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                <path d="M3 6l0 13"></path>
                <path d="M12 6l0 13"></path>
                <path d="M21 6l0 13"></path>
              </svg>
              <h3 className="font-bold text-4xl text-center text-yellow-500">
                Información confiable
              </h3>
            </div>
            <div className="bg-transparent hover:text-cyan-200 p-10 w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] xl:w-[400px] xl:h-[400px] md:max-w-[500px] md:max-h-[400px] lg:w-[400px] lg:h-[400px] rounded-[50px] border-2 mx-auto text-purple-200 flex flex-col items-center justify-center md:my-5 sm:my-5 my-20 gap-10 hover:border-purple-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-rocket"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              </svg>
              <h3 className="font-bold text-4xl text-center text-yellow-500">
                Privilegio de creador de contenido
              </h3>
            </div>
            <div className="bg-transparent p-10 w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] xl:w-[400px] xl:h-[400px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] rounded-[50px] border-2 mx-auto text-purple-200 flex flex-col items-center justify-center md:my-5 sm:my-5 gap-10 my-20 hover:border-purple-700 hover:text-cyan-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users-group"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
              </svg>
              <h3 className="font-bold text-4xl text-center text-yellow-500">
                Apoyo mutuo
              </h3>
            </div>
          </section>
        </section>

        {/*Footer */}
        <Footer />
      </section>
    </>
  );
}

export default Home;
