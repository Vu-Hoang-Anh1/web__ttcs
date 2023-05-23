import React from "react";
import "../../assets/css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <>
      <div className="container">
        <section className="page-content mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title">
                  <h2>CUSTOMER SERVICE - CONTACT US</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-form-container">
                  <h2>SEND A MESSAGE</h2>
                  <form
                    id="contact-form"
                    action="https://htmldemo.net/rossi/rossi/assets/php/mail.php"
                    method="post"
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" name="first_name" />
                        </div>

                        <div className="form-group">
                          <label>Email Address</label>
                          <input type="email" name="email_address" />
                        </div>

                        <div className="form-group">
                          <label>Subject</label>
                          <input type="text" name="contact_subject" />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            name="message"
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-5">
                        <div className="form-group">
                          <button type="submit" name="submit">
                            {" "}
                            Submit{" "}
                            <i className="fa fa-chevron-right">
                              <FontAwesomeIcon icon={faChevronRight} />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege pt-10 pb-10 mt-10 mb-10"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
