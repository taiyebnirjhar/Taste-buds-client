import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import "./Menu.css";
import MenuCard from "./MenuCard";

function Menu() {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  let id = 0;
  useEffect(() => {
    fetch("https://tastebuds-phi.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {
        return setItem(data);
      })
      .then(() => setLoader(false));
  }, []);
  useEffect(() => {
    document.title = "tastebuds: menu";
  }, []);

  return (
    <main className="l-main menu-container mx-auto">
      <section className="section">
        <hr className="border-[1px] mt-4 border-green-600  opacity-70 b-t-0" />
        {loader && <Loader />}
        <section className="mt-[20px] mx-[-15px] flex flex-row flex-wrap justify-center sm:justify-evenly md:justify-start">
          {item.map((i) => {
            return (
              <MenuCard
                key={i._id}
                id={i._id}
                banner={i.banner}
                discount={i.discount}
                title={i.title}
                region={i.region}
                type={i.type}
                rating={i.rating}
                price={i.price}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default Menu;
