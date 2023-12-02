function Footer() {
  return (
    <>
      <section className="bg-neutral-950 relative bottom-0 text-cyan-200 w-full h-[10vh] flex flex-col justify-center">
        <div className="m-5">
          <p className="font-bold text-xl">HowTools</p>
          <div className="flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-copyright"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"></path>
            </svg>
            <p className="text-xs">All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
