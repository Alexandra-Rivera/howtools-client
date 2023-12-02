import UserPicture from '../../img/home-background.png';



function UserInfo() {
    return(
        <>
        <div className="text-white flex flex-row items-center">
           <figure className="rounded-[50%] border-2 border-cyan-500 w-[30px] h-[30px] box-border m-3 lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px]">
            <img src={UserPicture} alt="User Picture" className="w-[100%] h-[100%] rounded-[50%]" /> 
            </figure>

            <div>
                <p className='text-xs 2xl:text-xl'>Username</p>
                <div className="flex flex-row items-center gap-1">
                <figure>
                
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className='w-[1rem] h-[1rem]'>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" className="text-yellow-500 w-[1rem] h-[1rem]" />
                </svg> */}
                </figure>
                <p className='text-xs 2xl:text-xl'>4.2</p>
                </div>
            </div>
           </div>
        </>
    )
}

export default UserInfo;