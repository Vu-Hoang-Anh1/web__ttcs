import React, { Component } from "react";
import "../../../assets/css/slide.css";
import images from "../../../assets/img/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
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
      <div className="row">
        <div className="col-lg-12 col-md-12 mb-50">
          <div className="homepage-main-content">
            <div className="horizontal-product-slider">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block-title">
                    <h2>
                      <Link href="#">BEST SELLER</Link>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="horizontal-product-list">
                    <Slider {...settings}>
                      <div className="single-product">
                        <div className="single-product-content">
                          <div className="product-image new-badge">
                            <Link href="">
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
                            </Link>
                            <div className="image-btn">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal-container"
                              >
                                <i className="fa fa-search">
                                  <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                  />
                                </i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-heart-o">
                                  <FontAwesomeIcon icon={faHeart} />
                                </i>
                              </Link>
                            </div>
                          </div>
                          <h5 className="product-name">
                            <Link to="">
                              Faded Short Sleeve
                            </Link>
                          </h5>
                          <div className="price-box">
                            <h4>$ 12.00</h4>
                          </div>

                          <Link
                            href="#"
                            className="add-to-cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart-modal-container"
                          >
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </Link>
                        </div>
                      </div>

                      <div className="single-product">
                        <div className="single-product-content">
                          <div className="product-image sale-badge">
                            <Link to="">
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
                            </Link>
                            <div className="image-btn">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal-container"
                              >
                                <i className="fa fa-search">
                                  <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                  />
                                </i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-heart-o">
                                  <FontAwesomeIcon icon={faHeart} />
                                </i>
                              </Link>
                            </div>
                          </div>
                          <h5 className="product-name">
                            <Link to="">
                              SHOE SPORT
                            </Link>
                          </h5>
                          <div className="price-box">
                            <h4>$ 12.00</h4>
                          </div>

                          <Link
                            href="#"
                            className="add-to-cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart-modal-container"
                          >
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </Link>
                        </div>
                      </div>

                      <div className="single-product">
                        <div className="single-product-content">
                          <div className="product-image">
                            <Link to="">
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
                            </Link>
                            <div className="image-btn">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal-container"
                              >
                                <i className="fa fa-search">
                                  <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                  />
                                </i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-heart-o">
                                  <FontAwesomeIcon icon={faHeart} />
                                </i>
                              </Link>
                            </div>
                          </div>
                          <h5 className="product-name">
                            <Link to="">
                              SHOE SPORT
                            </Link>
                          </h5>
                          <div className="price-box">
                            <h4>$ 12.00</h4>
                          </div>

                          <Link
                            href="#"
                            className="add-to-cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart-modal-container"
                          >
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </Link>
                        </div>
                      </div>

                      <div className="single-product">
                        <div className="single-product-content">
                          <div className="product-image">
                            <Link to="">
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
                            </Link>
                            <div className="image-btn">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal-container"
                              >
                                <i className="fa fa-search">
                                  <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                  />
                                </i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-heart-o">
                                  <FontAwesomeIcon icon={faHeart} />
                                </i>
                              </Link>
                            </div>
                          </div>
                          <h5 className="product-name">
                            <Link to="">
                              Faded Short Sleeve
                            </Link>
                          </h5>
                          <div className="price-box">
                            <h4>$ 12.00</h4>
                          </div>

                          <Link
                            href="#"
                            className="add-to-cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart-modal-container"
                          >
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </Link>
                        </div>
                      </div>

                      <div className="single-product">
                        <div className="single-product-content">
                          <div className="product-image new-badge sale-badge">
                            <Link to="">
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
                            </Link>
                            <div className="image-btn">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal-container"
                              >
                                <i className="fa fa-search">
                                  <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                  />
                                </i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-heart-o">
                                  <FontAwesomeIcon icon={faHeart} />
                                </i>
                              </Link>
                            </div>
                          </div>
                          <h5 className="product-name">
                            <Link to="">
                              SHOE SPORT
                            </Link>
                          </h5>
                          <div className="price-box">
                            <h4>$ 12.00</h4>
                          </div>

                          <Link
                            href="#"
                            className="add-to-cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart-modal-container"
                          >
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </Link>
                        </div>
                      </div>

                      <div className="single-product">
                        <div className="single-product-content">
                          <div className="product-image new-badge sale-badge">
                            <Link to="">
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
                            </Link>
                            <div className="image-btn">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal-container"
                              >
                                <i className="fa fa-search">
                                  <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                  />
                                </i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-heart-o">
                                  <FontAwesomeIcon icon={faHeart} />
                                </i>
                              </Link>
                            </div>
                          </div>
                          <h5 className="product-name">
                            <Link to="">
                              SHOE SPORT
                            </Link>
                          </h5>
                          <div className="price-box">
                            <h4>$ 12.00</h4>
                          </div>

                          <Link
                            href="#"
                            className="add-to-cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart-modal-container"
                          >
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </Link>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
