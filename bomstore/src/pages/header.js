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
  faUser,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
  return (
    <>
			<header>
			{/* header top nav */}
				<div className="header-top-nav">
							<div className="container">
							
								<div className="row">
									{/* change-select */}
									<div className="col-lg-3 offset-lg-9 col-md-12 col-sm-12">
										<div className="user-change d-flex justify-content-lg-evenly">
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
												<Link to= "/"><img width="167" height="69" src={logo} className="img-fluid" alt="logo"/></Link>

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
															<Link to = ""><i className="shopping-cart-icon img-fluid"><FontAwesomeIcon icon={faHeart} /></i></Link>

														</div>
														<div className="cart-content">
															<h2 className='text-center'><Link to = "">Yêu thích</Link></h2>
														</div>

													</div>

													<div className='shopping-cart-user d-flex align-items-center'>
														<div className="cart-icon p-lg-2 m-0">
															<Link to = ""><i className="shopping-cart-icon img-fluid"><FontAwesomeIcon icon={faUser} /></i></Link>

														</div>
														<div className="cart-content">
															<h2 className='text-center'><Link to="/Login_register">Đăng nhập</Link></h2>
														</div>

													</div>

													<div className='shopping-cart-user d-flex align-items-center'>
														<div className="cart-icon p-lg-2 m-0">
															<Link to = ""><i className="shopping-cart-icon img-fluid"><FontAwesomeIcon icon={faCartShopping} /></i></Link>

														</div>
														<div className="cart-content">
															<h2 className='text-center'><Link>Giỏ hàng</Link></h2>
														</div>

													</div>
													

													<div className="cart-floating-box" id="cart-floating-box">
														<div className="cart-items">
															<div className="cart-float-single-item d-flex">
																<span className="remove-item"><Link to = ""><i className="fa fa-trash"></i></Link></span>
																<div className="cart-float-single-item-image">
																	<img width="250" height="250" src={nikeForce} className="img-fluid" alt=""/>

																</div>
																<div className="cart-float-single-item-desc">
																	<p className="product-title"><span className="count">1x</span> <Link
																			to = "">nikeForce</Link></p>
																	<p className="size"> <Link to = "">Trắng, 42</Link></p>
																	<p className="price">500,000 VNĐ</p>
																</div>
															</div>
															<div className="cart-float-single-item d-flex">
																<span className="remove-item"><Link to = ""><i className="fa fa-trash"></i></Link></span>
																<div className="cart-float-single-item-image">
																<img width="250" height="250" src={adisdasStart} className="img-fluid" alt=""/>

																</div>
																<div className="cart-float-single-item-desc">
																	<p className="product-title"><span className="count">1x</span> <Link
																			to = "">adisdasStart</Link></p>
																	<p className="size"> <Link to = "">Đen, 42</Link></p>
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
																<Link href="checkout.html">Checkout</Link>
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
								<div className='col-lg-8 col-md-12 '>
								{/* main menu */}

								<div className='main-menu '>
									<nav>
										<ul>
											<li className="active menu-item-has-children"><Link href="/">Home  <FontAwesomeIcon icon={faChevronDown} /></Link>

											{/* change home*/}

												<ul className="sub-menu">
													<li className="active"><Link href="/">Home One</Link></li>
													<li><Link to = "">Home Two</Link></li>
													<li><Link to = "">Home Three</Link></li>
												</ul>

											</li>
											{/* End change home */}
											

											{/* submenu */}

											<li ><Link to = "">Shop</Link></li>

											<li ><Link to = "/Blog">Blog</Link></li>
											<li className="menu-item-has-children"><Link to = "">Pages  <FontAwesomeIcon icon={faChevronDown} /></Link>
															{/* <!-- ======  Submenu block  ======= --> */}

												<ul className="sub-menu">
													<li><Link to = "">cart</Link></li>
													<li><Link to = "">checkout</Link></li>
													<li><Link to = "">compare</Link></li>
													<li><Link to = "">store</Link></li>
													<li><Link to = "">wishlist</Link></li>
													<li><Link to = "/Login_register">My account</Link></li>
													<li><Link to="/Login_register">Login register</Link></li>
													<li><Link to = "/Login_register">Login register wide</Link></li>
												</ul>

															{/* <!-- ====  End of Submenu block  ==== --> */}
											</li>


											<li><Link to="/About">About</Link></li>

											
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