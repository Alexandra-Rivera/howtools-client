import UserInfo from "../../../userInfo/UserInfoComment";
import CommentOfComment from "../commentofacomment/CommentOfComment";

function Comment() {
    return(
        <>
        <section className="bg-teal-950 rounded-[20px] p-2 my-1">
        <UserInfo />
        <p className="text-xs font-thin p-3 2xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae quo nostrum consequuntur possimus officia, cumque corporis, animi sint eveniet qui impedit molestias necessitatibus. Repellendus illum veritatis pariatur error nobis.
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit exercitationem nulla facere dignissimos odio nam alias laboriosam earum sint quo totam, voluptates aliquam, quae culpa expedita neque quisquam hic fugiat?
        </p>

        <div className="flex flex-row mt-5 mb-3 ms-3">
        <button className="text-white font-bold hover:bg-sky-200 hover:text-gray-950 rounded-[50px] p-2 text-xs 2xl:text-xl">Responder</button>
        <button className="text-white font-bold hover:bg-sky-200 hover:text-gray-950 rounded-[50px] p-2 text-xs 2xl:text-xl">Ver respuesta</button>
        </div>

        <section>

        <p className="font-bold m-5 mt-10 mb-3 2xl:text-xl">Respuestas</p>
        <CommentOfComment />
        </section>
        </section>
        </>
    )
}

export default Comment;