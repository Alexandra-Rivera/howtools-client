import { IconSettings2 } from "@tabler/icons-react";
import { PiHouseBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section>
        <section className="flex flex-row justify-between items-center bg-gray-950 h-50">
          <div className="xl:m-5">
            <h1 className="text-white font-thin text-2xl flex flex-row items-center gap-2 p-5 m-0">
              <IconSettings2 />
              HT
            </h1>
          </div>

          <div className="text-white flex flex-row items-center mr-5 xl:mr-20 xl:mt-2 2xl:mr-20 2xl:mt-2 lg:mr-20 lg:mt-2">
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

            <Link to="/Main">
              <div className="hidden 2xl:block xl:block lg:block">
                <button className="flex flex-row gap-2 font-light items-center justify-center">
                  <PiHouseBold className="text-white w-[2rem] h-[2rem]" />
                  <p>Home</p>
                </button>
              </div>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default Header;
