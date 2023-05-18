import React from "react";
import "../assets/css/about.css";
import AbouUs from "../assets/img/istockphoto-1322842973-612x612.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <div className="container">
        <section className="page-content about-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title">
                  <h2>About Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="about-single-block">
                  <h2>OUR COMPANY</h2>
                  <b className="bold-text">
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod tempor incididun.
                  </b>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet
                    conse ctetur adipisicing elit.
                  </p>

                  <div className="featured-points">
                    <ul>
                      <li>Top quality products</li>
                      <li>Best customer service</li>
                      <li>30-days money back guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-single-block">
                  <h2>OUR TEAM</h2>

                  <div className="about-team-image">
                    <img
                      width="1114"
                      height="742"
                      src={AbouUs}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <b className="bold-text">
                    Lorem set sint occaecat cupidatat non{" "}
                  </b>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet
                    conse ctetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-single-block">
                  <h2>TESTIMONIALS</h2>

                  <div className="testimonial-container">
                    <div className="single-testimonial">
                      <p>
                        {" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteLeft} />
                        </i>{" "}
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim et dolore magna aliqua. Ut
                        enim ad minim veniam. Lorem ipsum dolor sit amet conse
                        ctetur adipisicing elit. ad minim.{" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteRight} />
                        </i>
                      </p>
                      <p className="customer-name">Lorem ipsum dolor sit</p>
                    </div>

                    <div className="single-testimonial">
                      <p>
                        {" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteLeft} />
                        </i>{" "}
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim et dolore magna aliqua. Ut
                        enim ad minim veniam. Lorem ipsum dolor sit amet conse
                        ctetur adipisicing elit. ad minim.{" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteRight} />
                        </i>
                      </p>
                      <p className="customer-name">Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
