import { IconChevronLeft } from "@tabler/icons-react";
import { IconLogout2 } from "@tabler/icons-react";

function Hamburger() {
    return (
        <>
        <section className="bg-gradient-to-b from-cyan-700 via-blue-950 to-blue-950 w-[50%] h-[100vh] p-5 xl:max-w-[20%] md:bg-gray-950 lg:md:bg-gray-950 xl:md:bg-gray-950 2xl:md:bg-gray-950">
        <div className="flex flex-row gap-1 my-5">
        <IconChevronLeft className="text-white"/>
        <button className="text-white text-2xl font-medium">Regresar</button>
        </div>
        <h2 className="bg-transparent border-spacing-0 font-bold ml-5 text-white text-2xl my-5  md:text-4xl md:mb-20 mt-20">Menú</h2>
        <ul className="font-thin w-50 text-cyan-500 flex flex-col items-left justify-center gap-5 ml-5">
            <li className="md:my-2"><a className="md:text-2xl hover:text-cyan-300" href="#">Ver perfil</a></li>
            <li className="md:my-2"><a className="md:text-2xl hover:text-cyan-300" href="#">Ver notificaciones</a></li>
            <li className="md:my-2"><a className="md:text-2xl hover:text-cyan-300" href="#">Publicar un archivo</a></li>
            <li className="md:my-2"><a className="md:text-2xl hover:text-cyan-300" href="#">Publicaciones guardadas</a></li>
        </ul>
        <div className="text-cyan-500 flex flex-row gap-4 text-1xl bottom-10 ml-5 absolute items-center md:text-2xl 2xl:text-2xl lg:text-2xl">
        <IconLogout2 />
        <button>Log Out</button>
        </div>
       </section>
        </>
    )
}

export default Hamburger;