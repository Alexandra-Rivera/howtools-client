import UserInfo from "../../../userInfo/UserInfoComment";


function NewComment() {
    return(
        <>
        <section className="bg-teal-950 rounded-[20px] p-2 my-5">
        <UserInfo />
        <form action="" method="" className="flex flex-col gap-3 p-2 drop-shadow">
            {/* <label htmlFor="commentField">Comentario:</label> */}
            <textarea type="text" placeholder="Escribe un comentario..." id="commentField" name="usercomment" className="bg-transparent font-light text-base 2xl:text-2xl m-5"/>

            <div className="flex flex-row gap-2 mx-5">
            <button htmlFor="fileInput" className="hover:bg-gray-200 hover:text-gray-950 rounded-full w-[60px] justify-center items-center flex">
            <figure className="w-[2rem]">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-upload" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-[100%] h-[100%]">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <path d="M7 9l5 -5l5 5" />
            <path d="M12 4l0 12" />
            </svg>
            </figure>
            </button>
            <button className="text-white w-[30%] md:w-[20%] hover:font-bold hover:text-gray-950 hover:bg-sky-400 rounded-[50px] box-border p-2 text-xs 2xl:w-[10%] 2xl:text-xl" type="submit">Publicar</button>
            <button className="text-white w-[30%] md:w-[20%] hover:font-bold hover:text-gray-950 hover:bg-sky-200 rounded-[50px] box-border p-2 text-xs 2xl:w-[10%] 2xl:text-xl">Cancelar</button>
            </div>

        </form> 
        </section> 
        </>
    )
}


export default NewComment;