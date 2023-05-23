import React from "react";
import "../../assets/css/login_register.css";
import {Link } from "react-router-dom";
const Login_register = () => {
  return (
    <>
      <div className="container">
        <div className="account-area page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title">
                  <h2>Login - Register</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12 mb-30">
                <form action="#" className="login-form">
                  <div id="login-form">
                    <h4 className="login-title">Login</h4>

                    <div className="row">
                      <div className="col-md-12 col-12 mb-20">
                        <label>Email Address*</label>
                        <input
                          className="mb-0"
                          type="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="col-12 mb-20">
                        <label>Password</label>
                        <input
                          className="mb-0"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-md-8">
                        <button type="submit" className="register-button ">
                          Login
                        </button>
                        <div className="check-box d-inline-block ms-4 ">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"
                          />
                          <label for="vehicle1"> Remember Me</label>
                        </div>
                      </div>

                      <div className="col-md-4 mt-10 text-start text-md-end">
                        <Link href="#"> Forgotten pasward?</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-xs-12">
                <form action="#" className="login-form">
                  <div id="register-form">
                    <h4 className="login-title">Register</h4>

                    <div className="row">
                      <div className="col-lg-6 col-12 mb-20">
                        <label>First Name</label>
                        <input
                          className="mb-0"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-lg-6 col-12 mb-20">
                        <label>Last Name</label>
                        <input
                          className="mb-0"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-md-12 mb-20">
                        <label>Email Address*</label>
                        <input
                          className="mb-0"
                          type="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="col-lg-6 mb-20">
                        <label>Password</label>
                        <input
                          className="mb-0"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-lg-6 mb-20">
                        <label>Confirm Password</label>
                        <input
                          className="mb-0"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="register-button mt-0">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_register;
