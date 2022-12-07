import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import icon from "../../assets/img/icon.png";
import Comment from "../../components/Comment/Comment";
import Loader from "../../components/Loader/Loader";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { AuthContext } from "../../Contexts/AuthFireContext";
import "../Menu/Menu.css";

function MenuDetails() {
  /******************************************/

  const [menuDetailsData, setMenuDetailsData] = useState("");
  const [menuCommentsData, setMenuCommentsData] = useState([]);
  const [loader, setLoader] = useState(true);

  const [hasCommented, setHasCommented] = useState(false);
  const [inputValidate, setInputValidate] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // const id = location?.state?.id;
  const { id } = useParams();
  const fetchId = id || location?.state?.id;
  const { user } = useContext(AuthContext);

  /***************[event handlers]********************/
  const inputValidation = (e) => {
    if (e.target.value.length < 25) {
      setInputValidate(true);
    } else {
      setInputValidate(false);
    }
  };
  /********************/
  const reviewSubmitHandler = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
    }

    const form = e.target;
    const comment = form.comment.value;
    if (comment < 25) return;
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto =
      user.photoURL ||
      "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg";
    const userId = user.uid;
    const productId = fetchId;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    console.log(time, date);
    const newCommentData = {
      comment,
      userName,
      userEmail,
      userPhoto,
      userId,
      productId,
      productTitle: menuDetailsData.title,
      time,
      date,
    };

    fetch(`https://tastebuds-phi.vercel.app/menuDetails/${fetchId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCommentData),
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
      .then(() => setHasCommented(true))
      .catch((err) => console.error(err));

    form.reset();
  };
  /********************/
  /******************************************/

  /***************[effects]********************/
  useEffect(() => {
    document.title = "tastebuds: menu details";
  }, []);
  useEffect(() => {
    fetch(`https://tastebuds-phi.vercel.app/menuDetails/${fetchId}`)
      .then((res) => res.json())
      .then((data) => {
        const loadedData = { ...data[0] };
        setMenuDetailsData(loadedData);
      })
      .then(() => setLoader(false));
  }, []);
  useEffect(() => {
    fetch(`https://tastebuds-phi.vercel.app/menuComments/${fetchId}`)
      .then((res) => res.json())
      .then((data) => {
        setMenuCommentsData(data);
      });
  }, [hasCommented]);
  useEffect(() => {}, [menuDetailsData]);

  /******************************************/

  return (
    <>
      <ToastContainer />

      <main
        className="l-main menu-container mx-auto"
        id={menuDetailsData.title}
      >
        <section className="section">
          {loader && !menuDetailsData ? (
            <Loader />
          ) : menuDetailsData ? (
            <div className="lg:w-[90%]  mx-auto">
              <div
                style={{ backgroundImage: `url("${menuDetailsData.banner}")` }}
                className={`bg-blend-darken bg-[rgba(0,0,0,0.3)]  bg-no-repeat w-[-webkit-fill-available]  h-[170px] sm:h-[178.422px] md:h-[210.667px] lg:h-[275.156px] xl:h-[343.946px] 2xl:h-[412.735px] relative min-h-[200px]   align-middle bg-cover flex  items-end justify-between rounded overflow-hidden my-4`}
              >
                <div className="m-8 flex flex-row flex-wrap gap-4 ">
                  <div className="max-w-[5rem] bg-white py-4 px-2 rounded-3xl hidden sm:inline">
                    <img src={icon} alt="" />
                  </div>
                  <div>
                    <div className="text-white">
                      <span className="font-semibold  text-2xl">
                        {menuDetailsData?.title}
                      </span>
                      <span className=" px-4 text-sm ">
                        <i className="fa-regular fa-circle-question "></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star-half-stroke text-[#54b435] px-2"></i>
                        3.5
                      </span>
                    </div>
                    <div className="text-white py-2">
                      <div>
                        <span> {menuDetailsData?.region}</span> -{" "}
                        <span> {menuDetailsData?.type}</span>
                        <span className="px-6">
                          <i className="fa-solid fa-circle text-[10px] text-green-400 px-1"></i>{" "}
                          open now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-4 text-xs sm:text-2xl text-white">
                  <i className="fa-regular fa-heart px-2"></i>
                  <span className="">{menuDetailsData?.rating}</span>
                </div>
              </div>
              <div className="flex flex-row gap-8 m-6 font-medium opacity-80  text-[10px] sm:text-base">
                <div className="">Delivery Time: 30min</div>
                <div className="">Price: {menuDetailsData?.price} Tk</div>
                <div className="">Delivery Fee: 30 Tk</div>
              </div>

              <hr className="border-[1px] mt-4 border-green-600  opacity-10 b-t-0" />
              <div className="flex flex-row flex-wrap gap-4 m-6 text-[10px] sm:text-base">
                <div>Menu</div>
                <div> {">"} </div>
                <div> {menuDetailsData?.title}</div>
              </div>
              <hr className="border-[1px] mt-4 border-green-600  opacity-10 b-t-0" />

              <div className=" text-justify">
                <div className=" mx-4 my-6">
                  <h1 className="text-3xl pb-4">About Our Food</h1>
                  <span className="text-green-400 text-ellipsis ">
                    Taste Buds
                  </span>{" "}
                  is an independent cloud kitchen based restaurant. We offer our
                  clients excellent quality services for many years, with the
                  best and delicious food in the city. we deliver fastest food
                  service in the city. late night , on diet, special date,
                  occasion - we got you. Fast food is kind of passion to us. Our
                  main focus are hygen freak, foodie & and fast food lovers. we
                  server the best type of food in the market
                </div>
                <div className=" mx-4 my-6">
                  <h1 className="text-3xl pb-4">Reviews</h1>

                  {/* <Comment /> */}
                  <Comment
                    submitHandler={reviewSubmitHandler}
                    productId={fetchId}
                    inputValidation={inputValidation}
                    inputValidate={inputValidate}
                  />
                </div>
                <div className="mx-4 my-6">
                  {menuCommentsData.map((item) => {
                    return (
                      <ReviewCard
                        key={item._id}
                        comment={item.comment}
                        userName={item.userName}
                        userPhoto={item.userPhoto}
                        time={item.time}
                        date={item.date}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            console.log("wait")
          )}
        </section>
      </main>
    </>
  );
}

export default MenuDetails;
