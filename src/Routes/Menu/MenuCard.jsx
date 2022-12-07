import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import icon from "../../assets/img/icon.png";
import "./Menu.css";

function MenuCard({
  banner,
  discount,
  title,
  region,
  type,
  rating,
  price,
  id,
}) {
  return (
    <>
      <div
        className="card md:max-w-[33.333333%] md:flex-[0 0 33.333333%]"
        id={`title`}
      >
        <div className="pointer">
          <div className="relative w-full overflow-hidden ">
            <PhotoProvider>
              <PhotoView src={banner}>
                <img
                  className="w-full rounded align-middle card-img"
                  src={banner}
                  alt="food item"
                />
              </PhotoView>
            </PhotoProvider>
            <div className="card-img-overlay text-sm">
              <span className="inline">
                <i className="fa-solid fa-plate-wheat px-2 opacity-80"></i>
              </span>
              {discount}
            </div>
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
                <p className="text-base font-semibold inline">{title}</p>
                <p className="text-[10px]">
                  <span>{region}</span> - <span>{type}</span>
                </p>
              </div>

              <div className="card-rating-icon flex flex-col flex-wrap ml-1 text-sm mt-[2px]">
                <div className=" align-bottom text-[#54b435]">
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className="">
                  <p className="">4</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pb-4 mx-auto w-[95%] text-[13px] flex flex-row flex-wrap justify-between border-b border-b-[#f1f1f1]">
              <div className="">
                <i className="fa-regular fa-heart"></i>
                <span className="px-4">{rating}</span>
                <span>
                  <i className="fa-solid fa-circle text-[6px] text-[#54b435]"></i>
                </span>
                <span className="px-4">Tk {price}</span>
              </div>
              <div className="">
                <Link
                  to={`/menuDetails/${id}`}
                  state={{
                    id: id,
                  }}
                >
                  <button
                    type="button"
                    className="text-[#54b435] bg-white border-2 border-[#54b435]  hover:bg-[#54b435] hover:text-white font-medium rounded-full text-[10px] px-4 py-1.5 text-center mr-2 mb-2"
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCard;
