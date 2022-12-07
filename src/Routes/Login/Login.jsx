import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../assets/img/icon.png";
import { AuthContext } from "../../Contexts/AuthFireContext";
import "./Login.css";

function Login() {
  /********************************/

  const [showPassword, SetShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    loginUser,

    loginWithGoogle,
    loginWithGithub,
    user,
  } = useContext(AuthContext);
  /********************************/
  const show = () => {
    SetShowPassword((prev) => !prev);
  };
  const jwtPost = (response) => {
    const user = response.user;
    const userInfo = {
      userId: user.uid,
      userEmail: user.email,
    };
    return fetch("https://tastebuds-phi.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        /***************/
        jwtPost(res)
          .then((res) => res.json())
          .then((data) => localStorage.setItem("userToken", data.userToken))
          .catch((err) =>
            toast.error(err.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          );
        form.reset();
        toast.success("Successfully logged in 🦄!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset();
      });
  };

  /********************************/

  useEffect(() => {
    document.title = "tastebuds: login";
  }, []);
  /********************************/

  return (
    <>
      <ToastContainer />
      <section className="h-full gradient-form bg-sky-50 md:h-screen ">
        <div className=" py-12 px-12 h-screen flex justify-center items-center mx-auto">
          <div className="flex justify-center items-center flex-wrap  h-full g-6 text-gray-800">
            <div className=" ">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap lg:flex-row  g-0">
                  <div className="  px-4 md:px-0">
                    <div className="min-w-[300px] sm:max-w-[350px]  md:max-w-[550px] xl:max-w-[650px]  md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto 2xl:w-32 xl:w-28 lg:w-24 md:w-24 w-20"
                          src={icon}
                          alt="logo"
                        />
                        <h4 className=" primary_font text-xl font-semibold  mb-12 pb-1 mt-2"></h4>
                      </div>
                      {/*  */}
                      <form onSubmit={handleLogin}>
                        <p className="mb-4 font-semibold text-[#069c54] primary_font 2xl:text-[22px]">
                          Please login to your account
                        </p>
                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none primary_font"
                            id="exampleFormControlInput1"
                            placeholder="email"
                            required
                            // onChange={userNameHandler}
                          />
                        </div>
                        <div className="mb-4 relative">
                          <input
                            name="password"
                            type={!showPassword ? "password" : "text"}
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none primary_font"
                            placeholder="password"
                            required
                            // onChange={passwordHandler}
                          />
                          {!showPassword ? (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={show}
                            >
                              <i className="fa-regular fa-eye text-gray-700 opacity-60"></i>
                            </div>
                          ) : (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={show}
                            >
                              <i className="fa-regular fa-eye-slash text-gray-700 opacity-60"></i>
                            </div>
                          )}
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            type="submit"
                            className="inline-block px-6 py-2.5 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 custome_style_btn "
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <a
                            className="text-gray-700 primary_font_light font-semibold opacity-70"
                            href="#!"
                          >
                            forget password ?
                          </a>
                          <div className="mt-10 grid grid-cols-3 items-center ">
                            <hr className="border-gray-300" />
                            <p className="text-center text-gray-500 primary_font_light text-base font-semibold">
                              OR
                            </p>
                            <hr className="border-gray-300" />
                          </div>
                          <div className="mt-4 flex flex-row justify-center gap-4 2xl:text-2xl text-lg md:text-lg  lg:text-xl text-gray-600 font-bold opacity-90">
                            <div
                              className=" hover:text-green-400"
                              onClick={() =>
                                loginWithGoogle()
                                  .then((res) => {
                                    jwtPost(res)
                                      .then((res) => res.json())
                                      .then((data) => {
                                        console.log(data);
                                        return localStorage.setItem(
                                          "userToken",
                                          data.userToken
                                        );
                                      })
                                      .catch((err) =>
                                        toast.error(err.message, {
                                          position: "top-center",
                                          autoClose: 5000,
                                          hideProgressBar: false,
                                          closeOnClick: true,
                                          pauseOnHover: true,
                                          draggable: true,
                                          progress: undefined,
                                          theme: "light",
                                        })
                                      );
                                    toast.success(
                                      "Successfully logged in 🦄!",
                                      {
                                        position: "top-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                      }
                                    );
                                    navigate(from, { replace: true });
                                  })
                                  .catch((err) => {
                                    toast.error(err.message, {
                                      position: "top-center",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                      theme: "light",
                                    });
                                  })
                              }
                            >
                              <i className="fa-brands fa-google"></i>
                            </div>
                            {/* github */}

                            <div
                              className="hover:text-green-400"
                              onClick={() =>
                                loginWithGithub()
                                  .then((res) => {
                                    jwtPost(res)
                                      .then((res) => res.json())
                                      .then((data) =>
                                        localStorage.setItem(
                                          "userToken",
                                          data.userToken
                                        )
                                      )
                                      .catch((err) =>
                                        toast.error(err.message, {
                                          position: "top-center",
                                          autoClose: 5000,
                                          hideProgressBar: false,
                                          closeOnClick: true,
                                          pauseOnHover: true,
                                          draggable: true,
                                          progress: undefined,
                                          theme: "light",
                                        })
                                      );
                                    toast.success(
                                      "Successfully logged in 🦄!",
                                      {
                                        position: "top-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                      }
                                    );
                                    navigate(from, { replace: true });
                                  })
                                  .catch((err) =>
                                    toast.error(err.message, {
                                      position: "top-center",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                      theme: "light",
                                    })
                                  )
                              }
                            >
                              <i className="fa-brands fa-github"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pb-6 ">
                          <p className="mb-0 mr-2  text-gray-700 opacity-70 primary_font_light font-semibold">
                            Dont have an account ?
                          </p>
                          <Link to="/signup">
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 rounded-[25px] border-green-600 text-green-600 primary_font_light font-semibold text-sm leading-tight uppercase  hover:text-white hover:bg-green-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Sign Up
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
