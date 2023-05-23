import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <>
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
                <Link to="#">Football</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">
                  Tennis
                  <i>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </i>
                </Link>

                <ul className="category-mega-menu">
                  <li className="menu-item-has-children">
                    <Link className="megamenu-head" to="#">
                      Adidas
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Adidas MVC</Link>
                      </li>
                      <li>
                        <Link to="#">Adidas PL</Link>
                      </li>
                      <li>
                        <Link to="#">Adidas Float</Link>
                      </li>
                      <li>
                        <Link to="#">Adidas AM</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link className="megamenu-head" to="#">
                      Nikes
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Nike JTL</Link>
                      </li>
                      <li>
                        <Link to="#">Nike SM</Link>
                      </li>
                      <li>
                        <Link to="#">Nike DECOR</Link>
                      </li>
                      <li>
                        <Link to="#">Nike Sport</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link className="megamenu-head" to="#">
                      Vans
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Van AR</Link>
                      </li>
                      <li>
                        <Link to="#">Van AQ</Link>
                      </li>
                      <li>
                        <Link to="#">Van XC</Link>
                      </li>
                      <li>
                        <Link to="#">Van Sport</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">
                  Basketball
                  <i>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </i>
                </Link>

                <ul className="category-mega-menu">
                  <li className="menu-item-has-children">
                    <Link className="megamenu-head" to="#">
                      Adidas
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Adidas MVC</Link>
                      </li>
                      <li>
                        <Link to="#">Adidas PL</Link>
                      </li>
                      <li>
                        <Link to="#">Adidas Float</Link>
                      </li>
                      <li>
                        <Link to="#">Adidas AM</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link className="megamenu-head" to="#">
                      Nikes
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Nike JTL</Link>
                      </li>
                      <li>
                        <Link to="#">Nike SM</Link>
                      </li>
                      <li>
                        <Link to="#">Nike DECOR</Link>
                      </li>
                      <li>
                        <Link to="#">Nike Sport</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link className="megamenu-head" to="#">
                      Vans
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Van AR</Link>
                      </li>
                      <li>
                        <Link to="#">Van AQ</Link>
                      </li>
                      <li>
                        <Link to="#">Van XC</Link>
                      </li>
                      <li>
                        <Link to="#">Van Sport</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Cricket</Link>
              </li>
              <li>
                <Link to="#">Baseball</Link>
              </li>
              <li>
                <Link to="#">Skateboarding</Link>
              </li>
              <li>
                <Link to="#">Running</Link>
              </li>
              <li>
                <Link to="#">Footwear</Link>
              </li>
              <li>
                <Link to="#">Badminton</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
