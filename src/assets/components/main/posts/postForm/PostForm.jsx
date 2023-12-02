import { newPost } from "../../../../services/post.services";
import UserInfo from "../../../userInfo/UserInfoPost";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const result = await newPost(formData);
      console.log(result);
      toast.success("Se ha realizado tu publicacion!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <section className="bg-transparent rounded-[10px] 2xl:rounded-[50px] xl:rounded-[50px] lg:rounded-[50px] w-[80vw] mx-auto drop-shadow">
        <p className="font-bold text-cyan-200 m-8 2xl:text-2xl 2xl:ms-20">
          Crear Publicación
        </p>
        <section className="p-4 border-2 font-sans text-white rounded-[10px] bg-teal-900 w-[92%] px-8 py-6 md:px-10 md:py-8 m-auto 2xl:rounded-[30px] xl:rounded-[30px] lg:rounded-[30px] xl:max-w-[90%] 2xl:max-w-[90%] mb-5">
          <form onSubmit={onSubmit}>
            <UserInfo />

            <ul className="flex flex-col gap-5 mb-5">
              <li className="flex flex-col gap-2">
                <label htmlFor="postTitle" className="2xl:text-2xl p-2">
                  Título:
                </label>
                <textarea
                  type="text"
                  name="postTitle"
                  id="postTitle"
                  placeholder="Título de la publicación"
                  className="bg-transparent font-bold text-xs 2xl:text-2xl xl:text-xl lg:text-lg md:text-base p-2 border-[1px] resize-none min-h-[1rem]"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "* Este es un campo requerido",
                    },
                    minLength: {
                      value: 3,
                      message: "* El titulo debe tener al menos 2 caracteres",
                    },
                  })}
                />

                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}
              </li>
              <li className="flex flex-col gap-2">
                <label htmlFor="postDescription" className="2xl:text-2xl p-2">
                  Descripción:
                </label>
                <textarea
                  type="text"
                  name="postDescription"
                  id="postDescription"
                  placeholder="Descripción de la publicación"
                  className="bg-transparent text-xs 2xl:text-2xl xl:text-xl lg:text-lg md:text-base p-2 h-[20%] border-[1px] resize-none min-h-[1rem]"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "* Este es un campo requerido",
                    },
                    minLength: {
                      value: 2,
                      message:
                        "* La descripción debe tener al menos 2 caracteres",
                    },
                  })}
                />

                {errors.description && (
                  <span className="text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </li>
            </ul>

            <div className="flex flex-row mt-20 justify-end item-end gap-4 text-xs 2xl:text-2xl xl:text-xl lg:text-lg 2xl:items-center xl:items-center lg:items-center">
              <div className="rounded-[50px] hover:bg-yellow-100 hover:text-black hover:font-bold flex flex-col items-center p-2 gap-2 text-white md:flex-row 2xl:flex-row xl:flex-row lg:flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-upload w-[1rem] h-[1rem] 2xl:w-[2rem] 2xl:h-[2rem] xl:w-[2rem] xl:h-[2rem] lg:w-[2rem] lg:h-[2rem]"
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
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 9l5 -5l5 5" />
                  <path d="M12 4l0 12" />
                </svg>
                <label htmlFor="documento">
                  Seleccionar documento
                  <input
                    type="file"
                    id="documento"
                    name="documento"
                    accept=".doc, .pptx, .pdf"
                    hidden
                    multiple
                  />
                </label>
              </div>
              <button
                type="submit"
                className="hover:bg-indigo-200 rounded-[50px] p-2 inline-block border-0 hover:text-gray-950"
              >
                Publicar
              </button>
              <button className="rounded-[50px] p-2 inline-block border-0">
                Cancelar
              </button>
            </div>
          </form>
        </section>
      </section>
      <pre className="text-white ml-10 hidden">{JSON.stringify(watch(), null, 2)}</pre>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default PostForm;
