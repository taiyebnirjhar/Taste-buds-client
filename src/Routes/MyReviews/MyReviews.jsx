import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../Contexts/AuthFireContext";
import MyReviewCard from "./MyReviewCard";

function MyReviews() {
  const { user, logOut } = useContext(AuthContext);
  const userId = user.uid;
  const [loader, setLoader] = useState(true);
  const [userReviews, setUserReviews] = useState([]);
  const [hasReview, setHasReview] = useState(false);
  const [updateSomething, setUpdateSomething] = useState(false);

  const successToast = (text) => {
    return toast.success(`${text} successfully 🦄!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  /*****[effects]*****/
  useEffect(() => {
    document.title = "tastebuds: my reviews";
  }, []);
  useEffect(() => {
    fetch(`https://tastebuds-phi.vercel.app/userReviews/${userId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }

        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setHasReview(true);
        } else {
          setHasReview(false);
        }
        setUserReviews(data);
      })
      .then(() => setLoader(false));
  }, [userId, updateSomething]);
  useEffect(() => {}, [updateSomething]);

  /******************/
  return (
    <>
      <ToastContainer />

      <section className="section mx-auto max-w-screen-xl ">
        <hr className="border-[1px] mt-4 border-green-600  opacity-70 b-t-0  mx-auto" />
        {loader && <Loader />}

        {userReviews &&
          userReviews.map((review, reviewIndex) => {
            return (
              <MyReviewCard
                reviewIndex={reviewIndex}
                key={review._id}
                commentId={review._id}
                comment={review.comment}
                userName={review.userName}
                userPhoto={review.userPhoto}
                productTitle={review.productTitle}
                productId={review.productId}
                setUpdateSomething={setUpdateSomething}
                successToast={successToast}
              />
            );
          })}
        {hasReview === false && (
          <section className="text-center my-40 max-h-96 flex justify-center items-center">
            <div className=" text-xl sm:text-3xl md:text-4xl text-green-400 font-extrabold opacity-40">
              No reviews were added
            </div>
          </section>
        )}
      </section>
    </>
  );
}

export default MyReviews;
