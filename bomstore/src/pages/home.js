import React, { Component } from "react";
import images from "../assets/img/index";
import SimpleSlider from "./slide";
import BEST from "./bestSell";
import PRODUCTS from "./image";
import "../assets/css/home.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlassPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <>
      <div>
        <div className="homepage-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-50">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="hero-side-category">
                      <div className="category-toggle-wrap">
                        <button className="category-toggle">
                          Categories
                          <i>
                            <FontAwesomeIcon icon={faBars} />
                          </i>
                        </button>
                      </div>

                      <nav className="category-menu">
                        <ul>
                          <li>
                            <Link to="">Football</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="">
                              Tennis
                              <i>
                                <FontAwesomeIcon icon={faChevronRight} />
                              </i>
                            </Link>

                            <ul className="category-mega-menu">
                              <li className="menu-item-has-children">
                                <Link className="megamenu-head" to="">
                                  Adidas
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="">Adidas MVC</Link>
                                  </li>
                                  <li>
                                    <Link to="">Adidas PL</Link>
                                  </li>
                                  <li>
                                    <Link to="">Adidas Float</Link>
                                  </li>
                                  <li>
                                    <Link to="">Adidas AM</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <Link className="megamenu-head" to="">
                                  Nikes
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="">Nike JTL</Link>
                                  </li>
                                  <li>
                                    <Link to="">Nike SM</Link>
                                  </li>
                                  <li>
                                    <Link to="">Nike DECOR</Link>
                                  </li>
                                  <li>
                                    <Link to="">Nike Sport</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <Link className="megamenu-head" to="">
                                  Vans
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="">Van AR</Link>
                                  </li>
                                  <li>
                                    <Link to="">Van AQ</Link>
                                  </li>
                                  <li>
                                    <Link to="">Van XC</Link>
                                  </li>
                                  <li>
                                    <Link to="">Van Sport</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="">
                              Basketball
                              <i>
                                <FontAwesomeIcon icon={faChevronRight} />
                              </i>
                            </Link>

                            <ul className="category-mega-menu">
                              <li className="menu-item-has-children">
                                <Link className="megamenu-head" to="">
                                  Adidas
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="">Adidas MVC</Link>
                                  </li>
                                  <li>
                                    <Link to="">Adidas PL</Link>
                                  </li>
                                  <li>
                                    <Link to="">Adidas Float</Link>
                                  </li>
                                  <li>
                                    <Link to="">Adidas AM</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <Link className="megamenu-head" to="">
                                  Nikes
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="">Nike JTL</Link>
                                  </li>
                                  <li>
                                    <Link to="">Nike SM</Link>
                                  </li>
                                  <li>
                                    <Link to="">Nike DECOR</Link>
                                  </li>
                                  <li>
                                    <Link to="">Nike Sport</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <Link className="megamenu-head" to="">
                                  Vans
                                </Link>
                                <ul>
                                  <li>
                                    <Link to="">Van AR</Link>
                                  </li>
                                  <li>
                                    <Link to="">Van AQ</Link>
                                  </li>
                                  <li>
                                    <Link to="">Van XC</Link>
                                  </li>
                                  <li>
                                    <Link to="">Van Sport</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="">Cricket</Link>
                          </li>
                          <li>
                            <Link to="">Baseball</Link>
                          </li>
                          <li>
                            <Link to="">Skateboarding</Link>
                          </li>
                          <li>
                            <Link to="">Accessories</Link>
                          </li>
                          <li>
                            <Link to="">Footwear</Link>
                          </li>
                          <li>
                            <Link to="">Badminton</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <SimpleSlider />
                </div>

                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 mb-50">
                      <div className="homepage-main-content">
                        <div className="horizontal-product-slider">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="block-title">
                                <h2>
                                  <a href="#">BEST SELLER</a>
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="horizontal-product-list">
                                <BEST />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="block-title">
                        <h2>
                          <a href="#">PRODUCTS</a>
                        </h2>
                      </div>
                    </div>
                    <PRODUCTS />
                  </div>

                  <div class="row">
                    <div class="col">
                      <ul class="pagination">
                        <li>
                          <Link to="#">
                            <i>
                              <FontAwesomeIcon icon={faChevronLeft} />
                            </i>
                            Back
                          </Link>
                        </li>
                        <li>
                          <Link to="#">1</Link>
                        </li>
                        <li class="active">
                          <Link to="#">2</Link>
                        </li>
                        <li>
                          <Link to="#">3</Link>
                        </li>
                        <li> - - - - - </li>
                        <li>
                          <Link to="#">18</Link>
                        </li>
                        <li>
                          <Link to="#">18</Link>
                        </li>
                        <li>
                          <Link to="#">20</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Next
                            <i>
                              <FontAwesomeIcon icon={faChevronRight} />
                            </i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
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
