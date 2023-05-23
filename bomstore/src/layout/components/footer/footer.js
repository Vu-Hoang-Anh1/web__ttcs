import React from "react";
import payment from "../../../assets/img/payment.webp";
import { Link } from "react-router-dom";
import "../../../assets/css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="footer-nav">
        <div className="container">
          <div className="row">
            <footer className="py-4 footer-nav-top">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="footer-top-data d-flex gap-30 align-items-center">
                      <h2 className="mb-0 text-white">
                        Sign Up for Newsletter
                      </h2>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control py-1"
                        placeholder="Your Email Address"
                        aria-label="Your Email Address"
                        aria-describedby="basic-addon2"
                      />
                      <button
                        type="submit"
                        className="input-group-text p-2"
                        id="basic-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <footer className="py-4 bg-white">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-4">
                    <h4 className="block-title mb-4">CONTACT US</h4>
                    <div style={{ paddingLeft: "10px" }}>
                      <address className="fs-6">
                        Hanoi: 45 Nguyễn Văn Trỗi, <br /> Hà Đông, Hà Nội <br />
                        PinCode: 951402
                      </address>
                      <Link
                        href="tel:+84 386777421"
                        className="mt-3 d-block mb-1 "
                      >
                        (+84) 386777421
                      </Link>
                      <Link
                        href="mailto:navdeepdahiya753@gmail.com"
                        className="mt-2 d-block mb-0 "
                      >
                        bomstore9456@gmail.com
                      </Link>
                      <div className="social_icons d-flex align-items-center gap-30">
                        <Link className="pr-15" href="#">
                          <FontAwesomeIcon
                            icon={faFacebookSquare}
                            style={{ color: "#105ce0", fontSize: "40px" }}
                          />
                        </Link>
                        <Link className="pr-15" href="#">
                          <FontAwesomeIcon
                            icon={faInstagramSquare}
                            style={{ color: "#d97563", fontSize: "40px" }}
                          />
                        </Link>
                        <Link className="pr-15" href="#">
                          <FontAwesomeIcon
                            icon={faTwitterSquare}
                            style={{ color: "#216ef2", fontSize: "40px" }}
                          />
                        </Link>
                        <Link className="pr-15" href="#">
                          <FontAwesomeIcon
                            icon={faYoutubeSquare}
                            style={{ color: "#df1616", fontSize: "40px" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <h4 className="block-title mb-4">INFORMATION</h4>
                    <div className="footer-link d-flex flex-column">
                      <Link to="/privacy-policy" className=" ">
                        New Products
                      </Link>
                      <Link to="/refund-policy" className=" ">
                        Best Sellers
                      </Link>
                      <Link to="/shipping-policy" className=" ">
                        Contact Us
                      </Link>
                      <Link to="/term-conditions" className=" ">
                        About Us
                      </Link>
                      <Link className=" ">Specials</Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <h4 className="block-title mb-4">MY ACCOUNT</h4>
                    <div className="footer-link d-flex flex-column">
                      <Link className=" ">My Orders</Link>
                      <Link className=" ">My Addresses</Link>
                      <Link className=" ">My Personal Info</Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <h4 className="block-title mb-4">CATEGORIES</h4>
                    <div className="footer-link d-flex flex-column">
                      <Link className=" ">Football</Link>
                      <Link className=" ">Tennis</Link>
                      <Link className=" ">Formula</Link>
                      <Link className=" ">Baseball</Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <h4 className="block-title mb-4">QUICK LINKS</h4>
                    <div className="footer-link d-flex flex-column">
                      <Link
                        to="https://www.adidas.com.vn/en?cm_mmc=AdieSEM_Google-_-adidas-SEAPAC-eCom-PPC-B-Brand-Other-Exact-VN_EN-SEAPAC-eCom-Paid_Search_Bing-_-B-Other-Exact-EN_INDDAYSS23_Convert-_-adidas-_-dv:eCom&cm_mmc1=VN&cm_mmc2=e&gclid=8ba2cb734a4d1cda29a1af3f9356fbf2&gclsrc=3p.ds&"
                        className=" "
                      >
                        Adidas
                      </Link>
                      <Link
                        to="https://supersports.com.vn/en/collections/nike"
                        className=" "
                      >
                        Nikes
                      </Link>
                      <Link to="https://vansvietnam.com.vn/" className=" ">
                        Vans
                      </Link>
                      <Link to="https://www.balenciaga.com/en-en" className=" ">
                        Balenciagas
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <footer className="copyright-section">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <p className="text-center text-md-start">
                      &copy; {new Date().getFullYear()}. Powered by Bomstore
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="payment-logos text-md-end text-center">
                      <img
                        width="252"
                        height="28"
                        src={payment}
                        alt="payment logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
