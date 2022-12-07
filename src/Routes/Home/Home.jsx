import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import About from "./About/About";
import App from "./App/App";
import Hero from "./Hero/Hero";
import HomeMenu from "./HomeMenu/HomeMenu";
import Offering from "./Offering/Offering";

function Home() {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://tastebuds-phi.vercel.app/")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .then(() => setLoader(false));
  }, []);
  useEffect(() => {
    document.title = "tastebuds";
  }, []);

  return (
    <>
      <main className="l-main">
        {/* <!--========== HERO ==========--> */}
        <Hero />
        {/* <!--========== MENU ==========--> */}
        <section className="menu section bd-container" id="menu">
          <span className="section-subtitle">Special</span>
          <h2 className="section-title">Menu of the week</h2>
          {loader && <Loader />}
          <div className="menu__container bd-grid">
            {item.map((i) => {
              return (
                <HomeMenu
                  key={i._id}
                  id={i._id}
                  banner={i.banner}
                  title={i.title}
                  region={i.region}
                  type={i.type}
                  price={i.price}
                  rating={i.rating}
                />
              );
            })}
          </div>
          <Link to="/menu">
            <div className="mt-14 w-full flex">
              <div className="button max-w-fit mx-auto">View All Menu</div>
            </div>
          </Link>
        </section>

        {/* <!--========== ABOUT ==========--> */}
        <About />
        {/* <!--========== SERVICES ==========--> */}

        <Offering />
        {/* <!--===== APP =======--> */}
        <App />
      </main>
    </>
  );
}

export default Home;
