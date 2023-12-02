import Post from "./post/Post";
import PostForm from "./postForm/PostForm";
import { useState } from "react";

function Posts() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <section className="bg-gray-950 h-fit">
        <section className="bg-teal-950 w-[100vw] h-full mx-auto rounded-[20px] xl:w-[85%] 2xl:w-[85%]">
          <div className="flex flex-row justify-between items-center">
            <p className="text-cyan-200 font-bold font-sans p-10 text-xs 2xl:ms-20 2xl:text-2xl xl:text-xl lg:text-lg md:text-base">
              Home
            </p>
            <button
              className="text-white font-bold font-sans p-10 text-xs 2xl:mr-20 2xl:text-lg 2xl:rounded-[50px] h-1 flex items-center my-5"
              onClick={handleClick}
            >
              {visible ? "Cerrar formulario" : "Crear publicacion"}
            </button>
          </div>
          {visible && <PostForm />}
          <p className="font-bold text-cyan-200 m-10 text-xl 2xl:text-3xl 2xl:ms-20 2xl:my-20">
            Feed
          </p>
          <Post />
        </section>
      </section>
    </>
  );
}

export default Posts;
