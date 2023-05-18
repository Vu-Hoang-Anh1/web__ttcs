import React, { Component } from "react";
import images from "../assets/img/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const PRODUCTS = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
                  <img
                    width="250"
                    height="250"
                    src={images.proNew4}
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
                  <img
                    width="250"
                    height="250"
                    src={images.proNew8}
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
                  <img
                    width="250"
                    height="250"
                    style={{ paddingBottom: "90px" }}
                    src={images.proNew9}
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
                  <img
                    width="250"
                    height="250"
                    style={{ paddingBottom: "70px" }}
                    src={images.proNew10}
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
                  <img
                    width="250"
                    height="250"
                    style={{ paddingBottom: "110px" }}
                    src={images.proNew11}
                    className="img-fluid"
                    alt=""
                  />
                  <img
                    width="250"
                    height="250"
                    src={images.proNew10}
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
                <a href="">SHOE SPORT</a>
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
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-40">
          <div className="single-product">
            <div className="single-product-content">
              <div className="product-image new-badge sale-badge">
                <a href="">
                  <img
                    width="250"
                    height="250"
                    src={images.proNew4}
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
                <a href="">SHOE SPORT</a>
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
        </div>
      </div>
    </>
  );
};

export default PRODUCTS;
