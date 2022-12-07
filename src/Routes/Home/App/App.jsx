import React from "react";
import app1 from "../../../assets/img/app1.png";
import app2 from "../../../assets/img/app2.png";
import appMobile from "../../../assets/img/movil-app.png";

function App() {
  return (
    <>
      <section className="app section bd-container">
        <div className="app__container bd-grid">
          <div className="app__data">
            <span className="section-subtitle app__initial">App</span>
            <h2 className="section-title app__initial">App is aviable</h2>
            <p className="app__description">
              Find our application and download it, you can make reservations,
              food orders, see your deliveries on the way and much more.
            </p>
            <div className="app__stores flex flex-row gap-4">
              <div>
                <img src={app1} alt="" className="app__store" />
              </div>
              <div>
                <img src={app2} alt="" className="app__store" />
              </div>
            </div>
          </div>

          <img src={appMobile} alt="" className="app__img" />
        </div>
      </section>
    </>
  );
}

export default App;
