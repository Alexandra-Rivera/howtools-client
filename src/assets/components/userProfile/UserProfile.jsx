import Header from "./header/Header";
import UserPicture from "../../img/home-background.png";
import { PiShootingStar } from "react-icons/pi";
import Footer from "../footer/Footer";
import Posts from "../main/posts/Posts";

function UserProfile() {
  return (
    <>
      <section>
        <Header />
        <div className="bg-gray-950">

        <div className="flex flex-col items-center p-10 py-30">
        <figure className="rounded-[50%] border-2 border-cyan-500 w-[10rem] h-[10rem] box-border m-3">
            <img
              src={UserPicture}
              alt="User Picture"
              className="w-[100%] h-[100%] rounded-[50%]"
            />
          </figure>
          <figure className="text-cyan-500 font-bold text-base 2xl:text-2xl xl:text-xl lg:text-lg">Username</figure>
          <div className="flex flex-row gap-2 justify-center items-center text-white py-5">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-star text-yellow-500"
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
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            </figure>
            <p className="font-bold text-base 2xl:text-2xl xl:text-xl lg:text-lg">Calificación:</p>
            <p className="text-base 2xl:text-2xl xl:text-xl lg:text-lg">4.2</p>
          </div>

          <div className="flex flex-row gap-2 justify-center items-center text-white">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-briefcase text-indigo-500"
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
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
            </figure>
            <p className="font-bold text-base 2xl:text-2xl xl:text-xl lg:text-lg">Ocupación:</p>
            <p className="text-base 2xl:text-2xl xl:text-xl lg:text-lg"> Oficio/Profesión</p>
          </div>

          <div className="flex flex-col gap-2 my-5 text-white">
            <div className="flex flex-row gap-2">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-notes text-indigo-500"
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
                  <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                  <path d="M9 7l6 0" />
                  <path d="M9 11l6 0" />
                  <path d="M9 15l4 0" />
                </svg>
              </figure>
              <p className="font-bold text-base 2xl:text-2xl xl:text-xl lg:text-lg">Descripción:</p>
            </div>
            <p className="text-base 2xl:text-2xl xl:text-xl lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus quos modi reiciendis quo nostrum alias, facere obcaecati
              corporis! Minus non illum ipsa repellat, placeat a perspiciatis,
              cum, accusamus iusto eum nisi voluptate quas ratione adipisci
              nihil repudiandae. Voluptates error aliquid nisi nulla eveniet
              culpa veniam voluptatum iste, deleniti maiores? Tempora!
            </p>
          </div>


          <div className="2xl:w-[50vw] xl:w-[50vw] lg:w-[50vw] 2xl:flex-row xl:flex-row lg:flex-row flex flex-col w-[100vw] gap-2 p-2 items-center justify-center">
          <button className="rounded-[50px] flex flex-row gap-2 justify-center items-center bg-yellow-400 p-3 w-[40%] h-[5vh] text-xs 2xl:text-2xl xl:text-xl lg:text-lg md:text-base">
            <PiShootingStar />
            ¡Califícame!
          </button>
          <button className="rounded-[50px] flex flex-row gap-2 justify-center items-center bg-red-400 p-3 w-[40%] h-[5vh] text-xs 2xl:text-2xl xl:text-xl lg:text-lg md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-discount-check-filled"
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
              <path
                d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            Saved Posts
          </button>
        </div>
        </div>

        </div>

        <Posts />
        <Footer />
      </section>
    </>
  );
}

export default UserProfile;
