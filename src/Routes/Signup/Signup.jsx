import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../assets/img/icon.png";
import { AuthContext } from "../../Contexts/AuthFireContext";
import "../Login/Login.css";

function SignUp() {
  const [showPassword, SetShowPassword] = useState(false);
  const [showConfirmPassword, SetShowConfirmPassword] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const show = () => {
    SetShowPassword((prev) => !prev);
  };
  const showConfirm = () => {
    SetShowConfirmPassword((prev) => !prev);
  };
  /********************************/
  const { signupUser, updateUserProfile, loading } = useContext(AuthContext);
  /********************************/
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // const image = form.image.value;

    if (password !== confirmPassword) {
      setPasswordValidate(false);
      return;
    } else {
      setPasswordValidate(true);
    }

    console.log(passwordValidate);

    signupUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUserProfile({
          displayName: name,
          // photoURL: image,
        });
        toast.success("Successfully registered 🦄!", {
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

        form.reset();
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
  };
  useEffect(() => {
    document.title = "tastebuds: signup";
  }, []);
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
                        <h4 className="  text-xl font-semibold  mb-12 pb-1 mt-2"></h4>
                      </div>
                      {/* */}
                      <form onSubmit={handleSignUp}>
                        <p className="mb-4 font-semibold text-[#069c54]  2xl:text-[22px]">
                          Create an account
                        </p>
                        <div className="mb-4">
                          <input
                            type="name"
                            name="name"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none "
                            placeholder="name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none "
                            placeholder="email"
                            required
                          />
                        </div>
                        <div className="mb-4 relative">
                          <input
                            name="password"
                            type={!showPassword ? "password" : "text"}
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none "
                            placeholder="password"
                            required
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
                        <div className="mb-4 relative">
                          <input
                            name="confirmPassword"
                            type={!showConfirmPassword ? "password" : "text"}
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none "
                            placeholder="confirm password"
                            required
                          />
                          {!showConfirmPassword ? (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={showConfirm}
                            >
                              <i className="fa-regular fa-eye text-gray-700 opacity-60"></i>
                            </div>
                          ) : (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={showConfirm}
                            >
                              <i className="fa-regular fa-eye-slash text-gray-700 opacity-60"></i>
                            </div>
                          )}
                          {!passwordValidate && (
                            <p className="text-red-400 text-xs py-2">
                              password doesnt match!
                            </p>
                          )}
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            type="submit"
                            className="inline-block px-6 py-2.5 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 custome_style_btn "
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Sign up
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6 ">
                          <p className="mb-0 mr-2  text-gray-700 opacity-70 _light font-semibold">
                            Already have an account ?
                          </p>
                          <Link to="/login">
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 rounded-[25px] border-green-600 text-green-600 _light font-semibold text-sm leading-tight uppercase  hover:text-white hover:bg-green-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Login
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

export default SignUp;
