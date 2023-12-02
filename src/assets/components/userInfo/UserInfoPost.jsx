import UserPicture from "../../img/home-background.png";

function UserInfo() {
  return (
    <>
      <section className="flex flex-row justify-between">
        <div className="text-white flex flex-row items-center">
          <figure className="rounded-[50%] border-2 border-cyan-500 w-[50px] h-[50px] box-border m-3 md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[70px] 2xl:h-[70px]">
            <img
              src={UserPicture}
              alt="User Picture"
              className="w-[100%] h-[100%] rounded-[50%]"
            />
          </figure>

          <div>
            <p className="text-xs md:text-lg 2xl:text-xl xl:text-xl lg:text-lg">
              Username
            </p>
            <div className="flex flex-row items-center gap-1">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star w-[1rem] h-[1rem]"
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
              <p className="text-xs md:text-sm 2xl:text-xl">4.2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-check text-indigo-400 w-[2rem] h-[2rem]"
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
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12l2 2l4 -4" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-dots-vertical text-cyan-400"
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
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default UserInfo;
