import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyReviewCard({
  comment,
  userName,
  userPhoto,
  productTitle,
  productId,
  reviewIndex,
  commentId,
  setUpdateSomething,
  successToast,
}) {
  const [edit, setEdit] = useState("");
  const [deleteOne, setDeleteOne] = useState("");
  let delete_one = false;

  const editHandler = (commentId) => {
    if (commentId !== edit) {
      setEdit(commentId);
    } else {
      setEdit("");
    }
  };
  const deleteHandler = (commentId) => {
    if (commentId !== deleteOne) {
      delete_one = commentId;
    }
    const agree = window.confirm("are you sure?");
    if (agree) {
      fetch(
        `https://tastebuds-phi.vercel.app/selectedReviewDelete/${delete_one}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => setDeleteOne(""))
        .then(() => successToast("Comment deleted"))
        .then(() => setUpdateSomething((prev) => !prev));
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedComment = e.target.newComment.value;

    fetch(`https://tastebuds-phi.vercel.app/updateSelectedReview/${edit}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment: updatedComment }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => setEdit(""))
      .then(() => successToast("Comment updated"))
      .then(() => setUpdateSomething((prev) => !prev));
  };

  return (
    <>
      <article className="py-4 px-4  lg:py-6 lg:px-6">
        <div className="flex items-center mb-4    lg:mb-8  space-x-4">
          <img className="w-10 h-10 rounded-full" src={userPhoto} alt="" />
          <div className="space-y-1 font-medium dark:text-white">
            <p>
              {userName} commented on
              <Link to={`/menuDetails/${productId}`}>
                <span className="text-green-400 underline px-2">
                  {productTitle}
                </span>
              </Link>
              <span className="block text-sm text-gray-500 dark:text-gray-400 opacity-60">
                comment id: {commentId}
              </span>
            </p>
          </div>
        </div>

        <p
          style={{ display: `${commentId === edit ? "none" : "inline"}` }}
          className="mb-2 font-light text-gray-500 dark:text-gray-400"
        >
          {comment}
        </p>
        {commentId === edit && (
          <form onSubmit={handleEditSubmit}>
            <input
              name="newComment"
              className="mb-2 mr-4 font-light text-gray-500 dark:text-gray-400"
              type="text"
              defaultValue={comment}
            />
            <button
              type="submit"
              className=" border-2 text-green-400 border-green-400 hover:bg-green-400 hover:text-white font-medium rounded-lg text-xs w-auto px-4 py-2 text-center"
            >
              Submit
            </button>
          </form>
        )}

        <aside>
          <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600 cursor-pointer">
            <div
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
              onClick={() => editHandler(commentId)}
            >
              Edit
            </div>
            <div
              className="pl-4 text-sm font-medium text-red-600 hover:underline "
              onClick={async () => {
                deleteHandler(commentId);
              }}
            >
              Delete comment
            </div>
          </div>
        </aside>
      </article>
    </>
  );
}

export default MyReviewCard;
