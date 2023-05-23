import React from "react";
import SimpleSlider from "../../layout/components/slide/slide";
import BEST from "../../layout/components/product/bestSell";
import PRODUCTS from "../../layout/components/product/product";
import "../../assets/css/home.css";
import Menu from "../../layout/components/menu/menu";
const Home = () => {
  return (
    <>
      <div>
        <div className="homepage-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-50">
                <div className="row">
                  <Menu/>
                  <SimpleSlider />
                </div>

                <div className="col-12">
                  <BEST/>
                  <PRODUCTS/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
