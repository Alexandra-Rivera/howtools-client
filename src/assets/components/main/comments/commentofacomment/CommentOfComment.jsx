import UserInfo from "../../../userInfo/UserInfoComment";

function CommentOfComment() {
    return(
        <>
        <section>
            <div className="ms-2">
            <UserInfo />

            </div>
            <p className="text-white text-xs p-5 2xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque harum vitae deserunt perspiciatis repudiandae placeat ipsam deleniti? Eaque quo aliquid praesentium consequuntur aliquam, soluta eos voluptates est nam enim, quibusdam dolorem accusamus voluptas! Necessitatibus veritatis possimus eos atque dolorum corporis, dicta dignissimos doloremque iste, distinctio praesentium ad sed minima.

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus eveniet tempore! Illum ducimus aut laudantium minima fugit reprehenderit autem doloribus voluptatibus ad, cum officiis laboriosam quaerat quidem magni nulla voluptates quis dicta! Praesentium placeat quasi deleniti non maiores porro ad cumque, tempora odio assumenda, iste pariatur, minima ex ipsa.
            </p>

            <button className="font-bold text-white text-xs ms-5 my-5 2xl:text-xl">
                Responder
            </button>
        </section>
        </>
    )
}

export default CommentOfComment;