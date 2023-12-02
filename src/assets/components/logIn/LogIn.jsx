import { IconSettings2 } from "@tabler/icons-react";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const msg = await userLogin(formData);
      console.log(msg);
      toast.loading("Welcome Back!");
      setTimeout(() => {
        navigate("/Main");
      }, "1500");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Wrong Credentials!");
    }
  });


  return (
    <>
      <section className="bg-gradient-to-b w-[100vw] h-[100vh] from-black via-gray-900 to-indigo-600 m-0 p-0 flex flex-col justify-center">
        <h1 className="left-2 top-5 2xl:left-10 ms:left-2 2xl:top-10 text-white font-thin text-2xl flex flex-row items-center gap-2 p-5 m-0 absolute lg:left-10 md:top-8 md:left-6 xl:left-10 xl:top-10">
          <IconSettings2 />
          HT
        </h1>

        <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row justify-center items-center">
          <h1 className="font-bold ml-5 text-white 2xl:ml-20 xl:ml-20 lg:ml-20 2xl:text-7xl xl:text-5xl lg:text-4xl lg:w-[100%] md:text-4xl">
            Es un gusto tenerte de vuelta
          </h1>

          <form
            className="flex flex-col gap-5 justify-center p-10 w-[100%] items-center"
            onSubmit={onSubmit}
          >
            <h3 className="font-light mb-2 text-white text-2xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl md:mb-5">
              Ingresa a HowTools:
            </h3>
            <label htmlFor="email" className="hidden">
              Correo
            </label>
            <input
              type="text"
              placeholder="Correo@correo.com"
              id="email"
              name="email"
              className="w-[100%] rounded-[50px] p-3 2xl:p-4 2xl:w-[90%] xl:p-3 xl:w-[90%] font-bold lg:p-3 lg:w-[90%]"
              {...register("email", {
                required: {
                    value: true,
                    message: "* Este campo es requerido"
                },
                pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "* Bad email format"
                }
              })}
            />

            {errors.email && (
              <span className="text-red-500 w-[85%]">{errors.email.message}</span>
            )}

            <label htmlFor="password" className="hidden">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="w-[100%] rounded-[50px] p-3 2xl:p-4 2xl:w-[90%] xl:p-3 xl:w-[90%] lg:p-3 lg:w-[90%] font-bold"
              {...register("password", {
                required: {
                  value: true,
                  message: "* Este campo es requerido",
                }
              })}
            />

            {errors.password && (
              <span className="text-red-500 w-[85%]">{errors.password.message}</span>
            )}

            {/* <Link
              type="submit"
              className="bg-gray-900 text-white h-[5vh] w-[100%] mt-10 border-2 rounded-[5px] border-purple-600 hover:border-pink-600 active:border-green-300 active:text-green-300 lg:w-[90%] flex items-center justify-center"
            >
              <button>Login</button>
            </Link> */}

            <button type="submit" className="bg-gray-900 text-white h-[5vh] w-[100%] mt-10 border-2 rounded-[5px] border-purple-600 hover:border-pink-600 active:border-green-300 active:text-green-300 lg:w-[90%] flex items-center justify-center">Login</button>
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

export default LogIn;
