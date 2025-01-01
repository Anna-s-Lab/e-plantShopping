import React, { useState } from "react";
import AboutUs from "./AboutUs";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? "fade-out" : ""}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>¡Bienvenido al Paraíso de las Plantas!</h1>
            <div className="divider"></div>
            <p> ¡La naturaleza te invita a descubrir su magia!</p>

            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Empezar
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? "visible" : ""}`}
      >
        <ProductList />
      </div>
    </div>
  );
}

export default App;
