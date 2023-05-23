import React from "react";
import "../../assets/css/about.css";
import AbouUs from "../../assets/img/istockphoto-1322842973-612x612.jpg";
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
                  <h2>OUR SHOP</h2>
                  <b className="bold-text">
                    Key to our success are our people and our culture. They
                    bring our identity to life, defined by our purpose, mission,
                    and attitude.
                  </b>
                  <p>
                    Everything we do is rooted in sport. Sport plays an
                    increasingly important role in more and more people’s lives,
                    on and off the field of play. It is central to every culture
                    and society and is core to our health and happiness.
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
                    To experience how our employees and partners are driving
                    change through purpose – and how you can find purpose{" "}
                  </b>
                  <p>
                    Our purpose, ‘through sport, we have the power to change
                    lives’, guides the way we run our company, how we work with
                    our partners, how we create our products, and how we engage
                    with our consumers. We will always strive to expand the
                    limits of human possibilities, to include and unite people
                    in sport, and to create a more sustainable world.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-single-block">
                  <h2>OUR ATTITUDE</h2>

                  <div className="testimonial-container">
                    <div className="single-testimonial">
                      <p>
                        {" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteLeft} />
                        </i>{" "}
                        At adidas, we are rebellious optimists driven by action,
                        with a desire to shape a better future together. We see
                        the world of sport and culture with possibility where
                        others only see the impossible. ‘Impossible is Nothing’
                        is not a tagline for us. By being optimistic and knowing
                        the power of sport, we see endless possibilities to
                        apply this power and push all people forward with
                        action.{" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteRight} />
                        </i>
                      </p>
                      <p className="customer-name">OUR ATTITUDE</p>
                    </div>

                    <div className="single-testimonial">
                      <p>
                        {" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteLeft} />
                        </i>{" "}
                        At adidas, we are rebellious optimists driven by action,
                        with a desire to shape a better future together. We see
                        the world of sport and culture with possibility where
                        others only see the impossible. ‘Impossible is Nothing’
                        is not a tagline for us. By being optimistic and knowing
                        the power of sport, we see endless possibilities to
                        apply this power and push all people forward with
                        action.{" "}
                        <i>
                          <FontAwesomeIcon icon={faQuoteRight} />
                        </i>
                      </p>
                      <p className="customer-name">RELATED</p>
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
