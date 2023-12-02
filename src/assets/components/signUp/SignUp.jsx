import { IconSettings2 } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../services/user.services";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const msg = await userRegister(formData);
      console.log(msg);
      toast.loading("Welcome to Howtools!");
      setTimeout(() => {
        navigate("/Main");
      }, "1500");
      reset();
    } catch (error) {
      console.error("An error has occurred", error);
    }
  });

  return (
    <>
      <section
        onSubmit={onSubmit}
        className="2xl:bg-gradient-to-br 2xl:from-black 2xl:via-gray-900 2xl:to-blue-700 xl:bg-gradient-to-br xl:from-black xl:via-gray-900 xl:to-blue-700
        lg:bg-gradient-to-br lg:from-black lg:via-gray-900 lg:to-blue-700 flex flex-col bg-gradient-to-br from-cyan-600 via-teal-900 to-teal-950 w-[100vw] h-[100vh] justify-center"
      >
        <h1 className="absolute top-2 left-5 2xl:left-10 ms:left-2 md:left-2 2xl:top-10 text-white font-thin text-2xl flex flex-row items-center gap-2 p-5 m-0">
          <IconSettings2 />
          HT
        </h1>
        <h1 className="text-cyan-200 m-5 2xl:mx-20 xl:mx-20 lg:mx-20">
          Create an User Account
        </h1>

        <div>
          {/*Formulario de Sign Up */}
          <form
            className="p-5 grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-10 lg:ml-20 justify-top">
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className="font-bold text-gray-100">
                  Nombre:
                </label>
                <input
                  type={"text"}
                  name="name"
                  id="name"
                  placeholder={"Nombre"}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "* Este es un campo requerido",
                    },
                    minLength: {
                      value: 3,
                      message: "* El nombre debe tener al menos 3 caracteres",
                    },
                  })}
                  className="rounded-[50px] font-bold p-2 2xl:p-3 2xl:w-[70%] xl:p-3 xl:w-[70%] lg:p-3 lg:w-[90%]"
                />

                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="lastName" className="font-bold text-gray-100">
                  Apellido:
                </label>
                <input
                  type={"text"}
                  name="lastName"
                  id="lastName"
                  placeholder={"Apellido"}
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "* Este es un campo requerido",
                    },
                    minLength: {
                      value: 3,
                      message:
                        "* El apellido debe ser de al menos 3 caracteres",
                    },
                  })}
                  className="rounded-[50px] font-bold p-2 2xl:p-3 2xl:w-[70%] xl:p-3 xl:w-[70%] lg:p-3 lg:w-[90%]"
                />

                {errors.lastName && (
                  <span className="text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="font-bold text-gray-100">
                  Correo:
                </label>
                <input
                  type={"email"}
                  name="email"
                  id="email"
                  placeholder={"Correo@correo.com"}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "* Este es un campo requerido",
                    },
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "* Ingrese un email válido",
                    },
                  })}
                  className="rounded-[50px] font-bold  p-2 2xl:p-3 2xl:w-[70%] xl:p-3 xl:w-[70%] lg:p-3 lg:w-[90%]"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-10 justify-center lg:ml-20">
              <div className="flex flex-col gap-4">
                <label htmlFor="image" className="font-bold text-gray-100">
                  Url para imagen de usuario:
                </label>
                <input
                  type={"text"}
                  name="image"
                  id="image"
                  placeholder={"Url para imagen de usuario"}
                  {...register("image", {
                    required: {
                      value: true,
                      message: "* Este campo es requerido",
                    },
                    pattern: {
                      value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|webp)/g,
                      message: "* Ingrese un Url de imagen válido",
                    },
                  })}
                  className="rounded-[50px] p-2 2xl:p-3 2xl:w-[70%] xl:p-3 xl:w-[70%] lg:p-3 lg:w-[90%]"
                />
                {errors.image && (
                  <span className="text-red-500">{errors.image.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="password" className="font-bold text-gray-100">
                  Contraseña:
                </label>
                <input
                  type={"password"}
                  name="password"
                  id="password"
                  placeholder={"Password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "* Este campo es requerido",
                    },
                    pattern: {
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:
                        "* La contraseña debe ser mínimo de 8 caracteres y contener al menos una mayúscula, una minúscula, un símbolo y un número",
                    },
                  })}
                  className="rounded-[50px] p-2 2xl:p-3 2xl:w-[70%] xl:p-3 xl:w-[70%] lg:p-3 lg:w-[90%]"
                />
                {errors.password && (
                  <span className="text-red-500 w-[80vh]">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="confirmPassword"
                  className="font-bold text-gray-100"
                >
                  Confirmar Contraseña:
                </label>
                <input
                  type={"password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder={"Confirm Password"}
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "* Este campo es requerido",
                    },
                    validate: (value) =>
                      value === watch("password") ||
                      "Las contraseñas no coinciden",
                  })}
                  className="rounded-[50px] p-2 2xl:p-3 2xl:w-[70%] xl:p-3 xl:w-[70%] lg:p-3 lg:w-[90%]"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              {/* <Link
                to="/Main"
                type="submit"
                className="w-[40%] h-[5vh] font-thin text-white rounded active:font-bold mx-auto my-10 bg-green-500 2xl:bg-blue-950 xl:bg-blue-950 hover:border-2 hover:border-dashed hover:border-blue-600 active:bg-blue-700 lg:bg-blue-950 hover:text-white active:text-white flex items-center justify-center"
              >
                <button 
                >Enviar</button>
              </Link> */}
              <button
                type="submit"
                className="w-[40%] h-[5vh] font-thin text-white rounded active:font-bold mx-auto my-10 bg-green-500 2xl:bg-blue-950 xl:bg-blue-950 hover:border-2 hover:border-dashed hover:border-blue-600 active:bg-blue-700 lg:bg-blue-950 hover:text-white active:text-white"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <pre className="text-white ml-10 hidden">
          {JSON.stringify(watch(), null, 2)}
        </pre>
      </section>
      <ToastContainer /> 
    </>
  );
}

export default SignUp;
