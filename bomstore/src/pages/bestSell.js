import React, { Component } from "react";
import "../assets/css/slide.css";
import images from "../assets/img/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
export default class BEST extends Component {
  state = {
    display: true,
    width: 600,
  };
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <Slider {...settings}>
        <div className="single-product">
          <div className="single-product-content">
            <div className="product-image new-badge">
              <a href="">
                <img
                  width="250"
                  height="250"
                  src={images.adisdasStart}
                  className="img-fluid"
                  alt=""
                />
                <img
                  width="250"
                  height="250"
                  src={images.proNew1}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="image-btn">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view-modal-container"
                >
                  <i className="fa fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </i>
                </a>
                <a href="#">
                  <i className="fa fa-heart-o">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </a>
              </div>
            </div>
            <h5 className="product-name">
              <a href="single-product-variable.html">Faded Short Sleeve</a>
            </h5>
            <div className="price-box">
              <h4>$ 12.00</h4>
            </div>

            <a
              href="#"
              className="add-to-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#add-to-cart-modal-container"
            >
              <i className="fa fa-shopping-cart"></i> Add to cart
            </a>
          </div>
        </div>

        <div className="single-product">
          <div className="single-product-content">
            <div className="product-image sale-badge">
              <a href="single-product-variable.html">
                <img
                  width="250"
                  height="250"
                  src={images.NikeAir}
                  className="img-fluid"
                  alt=""
                />
                <img
                  width="250"
                  height="250"
                  src={images.proNew2}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="image-btn">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view-modal-container"
                >
                  <i className="fa fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </i>
                </a>
                <a href="#">
                  <i className="fa fa-heart-o">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </a>
              </div>
            </div>
            <h5 className="product-name">
              <a href="single-product-variable.html">SHOE SPORT</a>
            </h5>
            <div className="price-box">
              <h4>$ 12.00</h4>
            </div>

            <a
              href="#"
              className="add-to-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#add-to-cart-modal-container"
            >
              <i className="fa fa-shopping-cart"></i> Add to cart
            </a>
          </div>
        </div>

        <div className="single-product">
          <div className="single-product-content">
            <div className="product-image">
              <a href="single-product-variable.html">
                <img
                  width="250"
                  height="250"
                  src={images.NikeAir1}
                  className="img-fluid"
                  alt=""
                />
                <img
                  width="250"
                  height="250"
                  src={images.proNew3}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="image-btn">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view-modal-container"
                >
                  <i className="fa fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </i>
                </a>
                <a href="#">
                  <i className="fa fa-heart-o">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </a>
              </div>
            </div>
            <h5 className="product-name">
              <a href="single-product-variable.html">SHOE SPORT</a>
            </h5>
            <div className="price-box">
              <h4>$ 12.00</h4>
            </div>

            <a
              href="#"
              className="add-to-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#add-to-cart-modal-container"
            >
              <i className="fa fa-shopping-cart"></i> Add to cart
            </a>
          </div>
        </div>

        <div className="single-product">
          <div className="single-product-content">
            <div className="product-image">
              <a href="single-product-variable.html">
                <img
                  width="250"
                  height="550"
                  src={images.proNew4}
                  className="img-fluid"
                  alt=""
                />
                <img
                  width="250"
                  height="250"
                  src={images.proNew5}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="image-btn">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view-modal-container"
                >
                  <i className="fa fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </i>
                </a>
                <a href="#">
                  <i className="fa fa-heart-o">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </a>
              </div>
            </div>
            <h5 className="product-name">
              <a href="single-product-variable.html">Faded Short Sleeve</a>
            </h5>
            <div className="price-box">
              <h4>$ 12.00</h4>
            </div>

            <a
              href="#"
              className="add-to-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#add-to-cart-modal-container"
            >
              <i className="fa fa-shopping-cart"></i> Add to cart
            </a>
          </div>
        </div>

        <div className="single-product">
          <div className="single-product-content">
            <div className="product-image new-badge sale-badge">
              <a href="single-product-variable.html">
                <img
                  width="250"
                  height="250"
                  src={images.proNew6}
                  className="img-fluid"
                  alt=""
                />
                <img
                  width="250"
                  height="250"
                  src={images.proNew7}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="image-btn">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view-modal-container"
                >
                  <i className="fa fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </i>
                </a>
                <a href="#">
                  <i className="fa fa-heart-o">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </a>
              </div>
            </div>
            <h5 className="product-name">
              <a href="single-product-variable.html">SHOE SPORT</a>
            </h5>
            <div className="price-box">
              <h4>$ 12.00</h4>
            </div>

            <a
              href="#"
              className="add-to-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#add-to-cart-modal-container"
            >
              <i className="fa fa-shopping-cart"></i> Add to cart
            </a>
          </div>
        </div>

        <div className="single-product">
          <div className="single-product-content">
            <div className="product-image new-badge sale-badge">
              <a href="single-product-variable.html">
                <img
                  width="250"
                  height="250"
                  src={images.proNew7}
                  className="img-fluid"
                  alt=""
                />
                <img
                  width="250"
                  height="250"
                  src={images.proNew6}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="image-btn">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view-modal-container"
                >
                  <i className="fa fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </i>
                </a>
                <a href="#">
                  <i className="fa fa-heart-o">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </a>
              </div>
            </div>
            <h5 className="product-name">
              <a href="single-product-variable.html">SHOE SPORT</a>
            </h5>
            <div className="price-box">
              <h4>$ 12.00</h4>
            </div>

            <a
              href="#"
              className="add-to-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#add-to-cart-modal-container"
            >
              <i className="fa fa-shopping-cart"></i> Add to cart
            </a>
          </div>
        </div>
      </Slider>
    );
  }
}
