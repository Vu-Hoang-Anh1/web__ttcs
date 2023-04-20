import React ,{useState} from 'react';
import '../assets/css/header.css';
import logo from '../assets/img/z4270514755923_918792fdd8c1aca1f5bae9b037e632ff.jpg';
import nikeForce from '../assets/img/Nike Air Force.jpg';
import adisdasStart from '../assets/img/adidas start.jpg';
import { NavLink , Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
  faUser
} from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
  return (
    <>
			<header>
			{/* header top nav */}
				<div class="header-top-nav">
							<div class="container">
							
								<div class="row">
									{/* change-select */}
									<div class="col-lg-3 offset-lg-9 col-md-12 col-sm-12">
										<div class="user-change d-flex justify-content-lg-evenly">
											<div className='change-language'>
												<select name="language" id="language">
													<option value="">Tiếng Việt</option>
													<option value="01">Tiếng Anh</option>
															
												</select>

											</div>
											<div className='change-currency'>
												<select name="currency" id="currency">
													<option value="">VNĐ</option>
													<option value="01">USD</option>
															
												</select>

											</div>

											

											
											
										
										</div>
									</div>
								{/* end change-select */}

									

								</div>
							</div>
						</div>

			{/* end header top nav		 */}


			{/*header-content  */}
				<div className="header-content">
									<div className="container">
										<div className="row">
											<div className="col-lg-2 col-md-4 offset-lg-0 text-md-start text-sm-center">
												
												<div className="logo">
												<a href="#"><img width="167" height="69" src={logo} className="img-fluid" alt="logo"/></a>

												</div>     
												
											</div>
											<div className="col-lg-6 col-md-8">
												{/* header search bar */}
												<div className="header-search-bar">
													<div className="input-group">
														<select name="categoryName" id="categoryName">
															<option value="">Categories</option>
															<option value="01">Football</option>
															<option value="02">--- Dresses</option>
															<option value="03">--- Jursey</option>
															<option value="04">--- Boot</option>
															<option value="05">Cricket</option>
															<option value="06">--- Dresses</option>
															<option value="07">--- Jursey</option>
															<option value="08">--- Boot</option>
														</select>
														<div className="input-group-append">
															<input type="search" placeholder='Vui long nhập sản phẩm' name="search"/>
															<button type="submit"><i className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></i></button>
														</div>

														
													</div>
												</div>
												
												{/* end of header search bar */}
											</div>
											<div className="col-lg-4 col-md-3">
												{/*user */}
												<div className="shopping-cart float-lg-end d-flex justify-content-start " id="shopping-cart">
													<div className='shopping-cart-user d-flex align-items-center'>
														<div className="cart-icon p-lg-2 m-0">
															<a href="#"><i className="shopping-cart-icon img-fluid"><FontAwesomeIcon icon={faHeart} /></i></a>

														</div>
														<div className="cart-content">
															<h2 className='text-center'><a href="#">Yêu thích</a></h2>
														</div>

													</div>

													<div className='shopping-cart-user d-flex align-items-center'>
														<div className="cart-icon p-lg-2 m-0">
															<a href="#"><i className="shopping-cart-icon img-fluid"><FontAwesomeIcon icon={faUser} /></i></a>

														</div>
														<div className="cart-content">
															<h2 className='text-center'><a href="#">Đăng nhập</a></h2>
														</div>

													</div>

													<div className='shopping-cart-user d-flex align-items-center'>
														<div className="cart-icon p-lg-2 m-0">
															<a href="#"><i className="shopping-cart-icon img-fluid"><FontAwesomeIcon icon={faCartShopping} /></i></a>

														</div>
														<div className="cart-content">
															<h2 className='text-center'><a href="#">Giỏ hàng</a></h2>
														</div>

													</div>
													

													<div className="cart-floating-box" id="cart-floating-box">
														<div className="cart-items">
															<div className="cart-float-single-item d-flex">
																<span className="remove-item"><a href="#"><i className="fa fa-trash"></i></a></span>
																<div className="cart-float-single-item-image">
																	<img width="250" height="250" src={nikeForce} className="img-fluid" alt=""/>

																</div>
																<div className="cart-float-single-item-desc">
																	<p className="product-title"><span className="count">1x</span> <a
																			href="">nikeForce</a></p>
																	<p className="size"> <a href="">Trắng, 42</a></p>
																	<p className="price">500,000 VNĐ</p>
																</div>
															</div>
															<div className="cart-float-single-item d-flex">
																<span className="remove-item"><a href="#"><i className="fa fa-trash"></i></a></span>
																<div className="cart-float-single-item-image">
																<img width="250" height="250" src={adisdasStart} className="img-fluid" alt=""/>

																</div>
																<div className="cart-float-single-item-desc">
																	<p className="product-title"><span className="count">1x</span> <a
																			href="">adisdasStart</a></p>
																	<p className="size"> <a href="">Đen, 42</a></p>
																	<p className="price">400,000 VNĐ</p>
																</div>
															</div>
														</div>
														<div className="cart-calculation d-flex">
															<div className="calculation-details">
																<p className="shipping">Phí ship <span>0 VNĐ</span></p>
																<p className="total">Total <span>900,000 VNĐ</span></p>
															</div>
															<div className="checkout-button">
																<a href="checkout.html">Checkout</a>
															</div>
														</div>
													</div>
													{/* end of user */}
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* end user */}
				{/* header-navigation */}
				<div className='header-navigation'>
					<div className='container'>
						<div className='navigation-container'>

							<div className='row'>
								<div className='col-lg-3 d-none d-lg-block'>
								{/* header menu left text */}
									<p className='call-us-text'>Call us 24/7: (+84) 386777421</p>
								</div>
								<div className='col-lg-9 col-md-12'>
								{/* main menu */}

								<div className='main-menu'>
									<nav>
										<ul>
											<li class="active menu-item-has-children"><a href="#">Home</a>

											{/* change home*/}

												<ul class="sub-menu">
													<li class="active"><a href="#">Home One</a></li>
													<li><a href="#">Home Two</a></li>
													<li><a href="#">Home Three</a></li>
												</ul>

											</li>
											{/* End change home */}
											

											{/* submenu */}

											<li ><a href="#">Shop</a></li>

											<li ><a href="#">Blog</a></li>
											<li class="menu-item-has-children"><a href="#">Pages</a>
															{/* <!-- ======  Submenu block  ======= --> */}

												<ul class="sub-menu">
													<li><a href="">cart</a></li>
													<li><a href="">cart wide</a></li>
													<li><a href="">checkout</a></li>
													<li><a href="">checkout wide</a></li>
													<li><a href="">compare</a></li>
													<li><a href="">compare wide</a></li>
													<li><a href="">store</a></li>
													<li><a href="">store wide</a></li>
													<li><a href="">wishlist</a></li>
													<li><a href="">wishlist wide</a></li>
													<li><a href="">My account</a></li>
													<li><a href="">My account wide</a></li>
													<li><Link to="/Login_register">Login register</Link></li>
													<li><a href="">Login register wide</a></li>
												</ul>

															{/* <!-- ====  End of Submenu block  ==== --> */}
											</li>


											<li><a href="">About</a></li>

											
											<li><Link to = "/Contact">Contact</Link></li>
											
										</ul>
									

									</nav>
								</div>
							</div>
							</div>
							

						</div>

					</div>
				</div>			
			</header>
      
    </>
  )
}

export default Header