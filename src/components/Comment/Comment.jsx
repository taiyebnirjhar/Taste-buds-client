import React from "react";

function Comment({ submitHandler, inputValidate, inputValidation }) {
  /***************************************/

  /***************************************/

  return (
    <>
      <form className="w-[80%]" onSubmit={submitHandler}>
        <div className="mb-6">
          <input
            type="text"
            name="comment"
            placeholder="write your review"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:border-green-600"
            required
            onChange={inputValidation}
          />
          <p
            style={{ display: `${!inputValidate ? "none" : "inline"}` }}
            className="text-red-400 text-sm px-4 py-2 text-start "
          >
            comment length should be minimum 25 characters!
          </p>
        </div>

        <button
          type="submit"
          className=" border-2 text-green-400 border-green-400 hover:bg-green-400 hover:text-white font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
      {/* )} */}
    </>
  );
}

export default Comment;
