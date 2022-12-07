import React from "react";

function ReviewCard({ comment, userName, userPhoto, time, date }) {
  return (
    <>
      <article className="py-6">
        <div className="flex items-center mb-4 space-x-4">
          <img className="w-10 h-10 rounded-full" src={userPhoto} alt="" />
          <div className="space-y-1 font-medium dark:text-white">
            <p>
              {userName}
              <time
                dateTime={`${time} ${date}`}
                className="block text-sm text-gray-500 dark:text-gray-400"
              >
                commented on {time} {date}
              </time>
            </p>
          </div>
        </div>

        <p className=" my-6 font-light text-gray-500 dark:text-gray-400">
          {comment}
        </p>

        <aside>
          <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Helpful
            </div>
            <div className="pl-4 text-sm font-medium text-green-400 hover:underline dark:text-green-500">
              Report abuse
            </div>
          </div>
        </aside>
      </article>
    </>
  );
}

export default ReviewCard;
