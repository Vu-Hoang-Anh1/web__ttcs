import React from 'react'
import '../assets/css/login_register.css'
const Login_register = () => {
  return (
    <>
      <div class="account-area page-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="page-title">
                                        <h2>Login - Register</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-xs-12 mb-30">
                                    <form action="#" class="login-form">

                                        <div id="login-form">
                                            <h4 class="login-title">Login</h4>

                                            <div class="row">
                                                <div class="col-md-12 col-12 mb-20">
                                                    <label>Email Address*</label>
                                                    <input class="mb-0" type="email" placeholder="Email Address"/>
                                                </div>
                                                <div class="col-12 mb-20">
                                                    <label>Password</label>
                                                    <input class="mb-0" type="password" placeholder="Password"/>
                                                </div>
                                                <div class="col-md-8">
                                                    <button type='submit' class="register-button ">Login</button>
                                                    <div class="check-box d-inline-block ms-4 ">
                                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    <label for="vehicle1"> Remember Me</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4 mt-10 text-start text-md-end">
                                                    <a href="#"> Forgotten pasward?</a>
                                                </div>

                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <form action="#" class="login-form">

                                        <div id="register-form">
                                            <h4 class="login-title">Register</h4>

                                            <div class="row">
                                                <div class="col-lg-6 col-12 mb-20">
                                                    <label>First Name</label>
                                                    <input class="mb-0" type="text" placeholder="First Name"/>
                                                </div>
                                                <div class="col-lg-6 col-12 mb-20">
                                                    <label>Last Name</label>
                                                    <input class="mb-0" type="text" placeholder="Last Name"/>
                                                </div>
                                                <div class="col-md-12 mb-20">
                                                    <label>Email Address*</label>
                                                    <input class="mb-0" type="email" placeholder="Email Address"/>
                                                </div>
                                                <div class="col-lg-6 mb-20">
                                                    <label>Password</label>
                                                    <input class="mb-0" type="password" placeholder="Password"/>
                                                </div>
                                                <div class="col-lg-6 mb-20">
                                                    <label>Confirm Password</label>
                                                    <input class="mb-0" type="password" placeholder="Confirm Password"/>
                                                </div>
                                                <div class="col-12">
                                                    <button type='submit' class="register-button mt-0">Register</button>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Login_register