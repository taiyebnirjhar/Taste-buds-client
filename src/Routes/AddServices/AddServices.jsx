import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Contexts/AuthFireContext";

function AddServices() {
  const [bannerValidation, setBannerValidation] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "tastebuds: add services";
  }, []);

  /*******************************/
  const addServiceHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const banner = form.banner.value;
    console.log(banner);
    const bannerValidate = banner.slice(banner.length - 4);
    if (bannerValidate === ".jpg") {
      setBannerValidation(false);
    } else if (bannerValidate === ".png") {
      setBannerValidation(false);
    } else if (bannerValidate === "webp") {
      setBannerValidation(false);
    } else if (bannerValidate === "jpeg") {
      setBannerValidation(false);
    } else {
      setBannerValidation(true);
      return;
    }

    const title = form.title.value;
    const type = form.type.value;
    const region = form.region.value;
    const price = form.price.value;
    const discount = " " + form.discount.value + " " + "OFF";

    const newMenuData = {
      banner,
      title,
      type,
      region,
      price,
      discount,
      rating: "0",
      comments: [],
      userId: user.uid,
    };

    console.log(banner, title, type, region, price, discount, newMenuData);

    fetch("https://tastebuds-phi.vercel.app/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMenuData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(" Service added successfully 🦄!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => console.err(err));

    form.reset();
  };
  /*******************************/

  return (
    <>
      <ToastContainer />
      <main className="l-main menu-container mx-auto">
        <section className="section">
          <div className="py-2 px-4 mx-auto  lg:py-2.5 lg:px-6">
            <div className="mx-auto text-start mb-6 ">
              <h2 className=" text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-500 opacity-80">
                Add your own service
              </h2>
            </div>
          </div>
          <hr className="border-[1px] mb-4 border-green-600  opacity-70 b-t-0" />
          <form className="px-4 lg:px-6" onSubmit={addServiceHandler}>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="title"
                id="title"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="title"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Food title
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="type"
                id="type"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required="/"
              />
              <label
                htmlFor="type"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Food Type [ex: fast food, salad etc]
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="region"
                id="region"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="region"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Food region [ex: fast food, salad etc ]
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="url"
                name="banner"
                id="Banner"
                className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="Banner"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Food Banner Link [ex: image should be ratio 3:2 and png , jpg,
                jpeg, webp]
              </label>
              {bannerValidation && (
                <p className="text-red-600 mb-2 text-xs py-6">
                  please add valid link [ex: jpg, png, webp]
                </p>
              )}
              <p className="text-red-500"></p>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="price"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Food Price
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  className="block py-6 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="discount"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Food Discount [ex: Discount should be in percent . if none,
                  type limited offer]
                </label>
              </div>
            </div>

            {/* <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button> */}
            <button
              type="submit"
              className=" border-2 text-green-400 border-green-400 hover:bg-green-400 hover:text-white font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default AddServices;
