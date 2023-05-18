import React, { Component } from "react";
import "../assets/css/slide.css";
import images from "../assets/img/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Thêm thuộc tính autoplay và đặt giá trị là true
      autoplaySpeed: 2000,
    };
    return (
      <>
        <div className="col-lg-9 col-m-8" style={{ paddingRight: "0" }}>
          <div className="hero-slider hero-slider-one">
            <Slider {...settings}>
              <div className="A1 hero-item hero-bg-1">
                <div className="row align-items-center justify-content-between">
                  <img
                    style={{ height: 410 }}
                    src={images.Banner1}
                    className="img-fluid"
                    alt="logo"
                  />
                  <div className="hero-content col-md-8 offset-md-4 col-12 offset-0">
                    <h1>IMPOSSIBLE IS NOTHING</h1>
                    <h2>
                      <span>SPORT WINTER</span>
                    </h2>
                    <p>
                      This will definitely be a great gift for your loved one,
                      buy it now, what are you waiting for
                    </p>
                    <a href="#">shop now</a>
                  </div>
                </div>
              </div>

              <div className="A2 hero-item hero-bg-1">
                <div className="row align-items-center justify-content-between">
                  <img
                    style={{ height: 410 }}
                    src={images.Banner2}
                    className="img-fluid"
                    alt="logo"
                  />
                  <div className="hero-content col-md-8 offset-md-4 col-12 offset-0">
                    <h1 className="text-muted">IMPOSSIBLE IS NOTHING</h1>
                    <h2>
                      <span className="text-muted">SPORT WINTER</span>
                    </h2>
                    <p className="text-muted">
                      This will definitely be a great gift for your loved one,
                      buy it now, what are you waiting for
                    </p>
                    <a className="text-muted" href="#">
                      shop now
                    </a>
                  </div>
                </div>
              </div>

              <div className="A3 hero-item hero-bg-1">
                <div className="row align-items-center justify-content-between">
                  <img
                    style={{ height: 410 }}
                    src={images.Banner3}
                    className="img-fluid"
                    alt="logo"
                  />
                  <div className="hero-content col-md-8 offset-md-4 col-12 offset-0 ">
                    <h1>IMPOSSIBLE IS NOTHING</h1>
                    <h2>
                      <span>SPORT WINTER</span>
                    </h2>
                    <p>
                      This will definitely be a great gift for your loved one,
                      buy it now, what are you waiting for
                    </p>
                    <a href="#">shop now</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="featured-service-container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-featured-service featured-service-bg-1">
                  <div className="single-featured-service-content">
                    <h3>THE WINTER</h3>
                    <p>
                      This will definitely be a great gift for your loved one{" "}
                    </p>
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-featured-service featured-service-bg-2">
                  <div className="single-featured-service-content">
                    <h3>THE WINTER</h3>
                    <p>
                      This will definitely be a great gift for your loved one{" "}
                    </p>
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-featured-service featured-service-bg-3">
                  <div className="single-featured-service-content">
                    <h3>THE WINTER</h3>
                    <p>
                      This will definitely be a great gift for your loved one{" "}
                    </p>
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
