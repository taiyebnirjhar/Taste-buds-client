import React from "react";
import home from "../../../assets/img/home.png";

function Hero() {
  return (
    <section className="home section" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">Taste Buds</h1>
          <h2 className="home__subtitle">
            Try the best food of <br /> the week.
          </h2>
          <a href="#menu" className="button">
            View Menu
          </a>
        </div>

        <img src={home} alt="" className="home__img" />
      </div>
    </section>
  );
}

export default Hero;
