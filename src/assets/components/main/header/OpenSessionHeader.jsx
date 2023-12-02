import { IconSettings2 } from "@tabler/icons-react";
import UserPicture from "../../../img/home-background.png";
import { Link } from "react-router-dom";

function OpenSessionHeader() {
  return (
    <>
      <section className="flex flex-row justify-between items-center bg-gray-950 h-50">
      <Link to="/">
      <div className="xl:m-5">
          <h1 className="text-white font-thin text-2xl flex flex-row items-center gap-2 p-5 m-0">
            <IconSettings2 />
            HT
          </h1>
        </div>
      </Link>

        <Link to="/UserProfile">
        <div className="text-white flex flex-row items-center mr-5 xl:mr-20 xl:mt-2 2xl:mr-20 2xl:mt-2 lg:mr-20 lg:mt-2">
          <figure className="rounded-[50%] border-2 border-cyan-500 w-[50px] h-[50px] box-border m-3 lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px] 2xl:w-[80px] 2xl:h-[80px]">
            <img
              src={UserPicture}
              alt="User Picture"
              className="w-[100%] h-[100%] rounded-[50%]"
            />
          </figure>
          <figure className="2xl:hidden xl:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </figure>


            <div className="hidden 2xl:block xl:block lg:block">
              <p>Username</p>
              <div className="flex flex-row items-center gap-1">
                <figure>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-star"
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
                      d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      className="text-yellow-500"
                    />
                  </svg>
                </figure>
                <p>4.2</p>
              </div>
            </div>
        </div>
        </Link>
      </section>
    </>
  );
}
export default OpenSessionHeader;
