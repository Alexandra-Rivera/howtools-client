import UserInfo from "../../../userInfo/UserInfoPost";
import CommentForm from "../../comments/createComment/CommentForm";
import Comment from "../../comments/comment/Comment";
import File from "../../../file/File";

function Post() {
    return(
        <>
        <section className="font-sans text-white bg-teal-900 w-[82%] md:px-10 md:py-8 m-auto rounded-[30px] xl:max-w-[90%] 2xl:max-w-[90%] p-5">
        <UserInfo />
        <h1 className="font-bold text-left text-xl 2xl:text-2xl">
        Titulo de la publicacion
        </h1>
        <p className="font-light text-left text-xs mb-5 lg:text-[1rem] 2xl:text-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ratione labore velit voluptatem illum quisquam consectetur, aspernatur officiis iure sed.
        </p>

        <File />

        <button className="mt-10 text-xs w-[50%] bg-green-400 text-gray-950 p-2 rounded-[50px] hover:bg-green-200 hover:text-white md:w-[30%] lg:w-[20%] lg:h-[45px] lg:text-base xl:bg-transparent xl:hover:bg-green-200 xl:w-[20%] xl:text-white xl:hover:text-gray-950 xl:font-bold 2xl:bg-transparent 2xl:hover:bg-green-200 2xl:w-[20%] 2xl:text-white 2xl:hover:text-gray-950 2xl:font-bold">Ver comentarios...</button>


        <section className="block">
        <p className="text-cyan-200 font-bold 2xl:text-3xl my-10">Comentarios</p>
        <CommentForm />

        <Comment />
        </section>
        </section>
        <br /><br />
        </>
    )
}

export default Post;