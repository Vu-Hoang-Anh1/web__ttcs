import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/footer.css';
import { 
  faPaperPlane,
  faLinkedIn,
  faGitHub,
  faYouTube,
  faInstagram  } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <i FontAwesomeIcon icon={faPaperPlane} ></i>
                <h2 className="mb-0 text-black">Sign Up for Newsletter</h2>
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
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-black mb-4">Contact Us</h4>
              <div>
                <address className="text-black fs-6">
                  Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-black"
                >
                  +91 8264954234
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-black"
                >
                  navdeepdahiya753@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-black" href="#">
                    <faLinkedIn className="fs-4" />
                  </a>
                  <a className="text-black" href="#">
                    <faInstagram className="fs-4" />
                  </a>
                  <a className="text-black" href="#">
                    <faGitHub className="fs-4" />
                  </a>
                  <a className="text-black" href="#">
                    <faYouTube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-black mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-black py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-black py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-black py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-black py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-black py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-black mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-black py-2 mb-1">About Us</Link>
                <Link className="text-black py-2 mb-1">Faq</Link>
                <Link className="text-black py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-black mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-black py-2 mb-1">Laptops</Link>
                <Link className="text-black py-2 mb-1">Headphones</Link>
                <Link className="text-black py-2 mb-1">Tablets</Link>
                <Link className="text-black py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-black">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;