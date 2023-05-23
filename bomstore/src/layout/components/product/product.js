import React from "react";
import images from "../../../assets/img/index";
import productList from "./productList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faHeart,
  faCartPlus,

} from "@fortawesome/free-solid-svg-icons";

const PRODUCTS = () => {
  const products = productList.map(product => {
    return (

        <div key={product.id} className="col-lg-4 col-md-6 col-12 mb-40">
        <div className="single-product">
              <div className="single-product-content">
                <div className="product-image new-badge sale-badge">
                  <Link to={`/products/${product.id}`}>
                    <img
                      width="250"
                      height="250"
                      src={product.image}
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
                      to={`/products/${product.id}`}
                      data-bs-toggle="modal"
                      data-bs-target="#quick-view-modal-container"
                    >
                      <i className="fa fa-search">
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                      </i>
                    </Link>
                    <Link to={`/products/${product.id}`}>
                      <i className="fa fa-heart-o">
                        <FontAwesomeIcon icon={faHeart} />
                      </i>
                    </Link>
                  </div>
                </div>
                <h5 className="product-name">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h5>
                <div className="price-box">
                  <h4>${product.price}</h4>
                </div>

                <Link
                  href="#"
                  className="add-to-cart-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add-to-cart-modal-container"
                >
                  <i className="fa fa-shopping-cart"></i> <FontAwesomeIcon icon={faCartPlus}/> Add to cart
                </Link>
              </div>
            </div>
        </div>

    );
  });
  return (
    <>    
      <div className="row">
        <div className="col-lg-12">
          <div className="block-title">
            <h2>
              <Link href="#">PRODUCTS</Link>
            </h2>
          </div>
        </div>

        <div className="row">
        
        {products}
        </div> 
      </div>
    </>
  );
};

export default PRODUCTS;
