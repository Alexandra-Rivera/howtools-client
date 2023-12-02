import OpenSessionHeader from "./header/OpenSessionHeader";
import Posts from "./posts/Posts";
import Footer from "../footer/Footer";

function Main() {
  return (
    <>
      <div>
        <OpenSessionHeader />
        <section className="bg-gray-950 w-[100vw] min-h-[80vh] flex flex-col gap-10 items-center justify-center xl:gap-20 lg:gap-10 md:gap-10">
          <p className="font-sans text-white text-3xl xl:text-5xl lg:text-5xl md:text-4xl">
            What would you want to know?
          </p>

          <div>
            <form
              action=""
              className="flex items-center justify-center gap-2 2xl:w-[50vw]"
            >
              <input
                type="text"
                placeholder="Buscar..."
                className="rounded-[50px] p-5 w-[50vw] h-[4vh] xl:h-[6vh] 2xl:w-[40vw] xl:w-[40vw] lg:h-[5vh] lg:w-[40vw] md:w-[40vh]"
              />
              <button
                type="submit"
                className="bg-cyan-500 w-[20vw] h-[5vh] rounded-[50px] hover:bg-cyan-700 2xl:w-[10vw] xl:h-[6vh] xl:w-[10vw] 2xl:h-[6vh] lg:h-[5vh] lg:w-[10vw] md:w-[10vw]"
              >
                <figure className="flex justify-center items-center 2xl:rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </figure>
              </button>
            </form>
          </div>
        </section>
        <Posts />
      </div>
      <Footer />
    </>
  );
}

export default Main;
