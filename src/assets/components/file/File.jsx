function File() {
    return(
        <>
        <div className="flex flex-row border-2 items-center p-2 gap-2 mt-10">
        <figure>
            <img src="" alt="Imagen de archivo" />
        </figure>

        <div className="w-[100%] h-[20%] flex flex-col justify-center items-start p-2 gap-1">
        <p className="text-sm text-yellow-200 2xl:text-2xl xl:text-xl lg:text-lg">File_Name.pptx</p>
        <div className="flex flex-row gap-1 2xl:gap-2">
        <p className="text-xs text-zinc-300 2xl:text-xl xl:text-base lg:text-base">Size:</p>
        <p className="text-xs text-zinc-300 2xl:text-xl xl:text-base lg:text-base">175MB</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default File;