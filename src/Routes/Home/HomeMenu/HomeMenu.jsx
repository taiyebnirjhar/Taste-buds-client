import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

import icon from "../../../assets/img/icon.png";

function HomeMenu({ banner, title, region, type, price, rating, id }) {
  return (
    <>
      <div className="" id="menu">
        <PhotoProvider>
          <PhotoView src={banner}>
            <img src={banner} className="rounded-t-lg " alt="banner" />
          </PhotoView>
        </PhotoProvider>

        <div className=" flex py-[15px] mx-auto w-[95%] justify-around">
          <div className="card-title-icon ">
            <div className=" w-[45px] relative">
              <img
                className="w-full rounded-2xl align-middle"
                src={icon}
                alt="restaurant-logo"
                srcSet=""
              />
            </div>
          </div>
          <div className=" flex flex-col flex-wrap flex-shrink">
            <p className="text-[14px] sm:text-base font-semibold inline">
              {title.slice(0, title.lastIndexOf(" ") - 1)}
            </p>
            <p className="text-[10px]">
              <span>{region}</span> - <span>{type}</span>
            </p>
          </div>
        </div>
        <div className="mt-4 pb-4 mx-auto w-[95%] text-[13px] flex flex-row flex-wrap justify-between border-b border-b-[#f1f1f1]">
          <div className="mt-2">
            <i className="fa-regular fa-heart"></i>
            <span className="px-2">{rating}</span>
          </div>
          <div className="mt-2">
            <span className="px-2  sm:inline">Tk {price}</span>
          </div>
          <div className="mt-1">
            <Link to={`/menuDetails/${id}`}>
              <button
                type="button"
                className="text-[#54b435] bg-white border-2 border-[#54b435]  hover:bg-[#54b435] hover:text-white font-medium rounded-full text-[9px] px-3 py-1 text-center mr-2 mb-2"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMenu;
