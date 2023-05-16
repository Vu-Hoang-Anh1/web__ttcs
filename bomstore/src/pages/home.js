import React , {Component} from 'react';
import Slider from 'react-slick';
import adisdasStart from '../assets/img/adidas start.jpg';
import Custom from '../assets/img/giay-custom-la-gi-5.jpg';
import Boot from '../assets/img/boot-nam-1.jpg';
import Giay from '../assets/img/images.jpg';
import NikeAir1 from '../assets/img/Nike Air Max 1.webp';
import NikeAir from '../assets/img/Nike Air Force.jpg';
import '../assets/css/home.css';
import Banner1 from '../assets/img/banner-quang-cao-giay-3.webp';
import Blog1 from '../assets/img/blog-1.webp';
import Blog2 from '../assets/img/blog-2.webp';
import Blog3 from '../assets/img/blog-3.webp';
import Blog4 from '../assets/img/blog-4.webp';
import Blog5 from '../assets/img/blog-5.webp';
import Blog6 from '../assets/img/blog-6.webp';
import Blog7 from '../assets/img/blog-7.webp';
import Blog8 from '../assets/img/blog-8.webp';
import Blog9 from '../assets/img/blog-9.webp';
import { NavLink , Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlassPlus,
  faHeart
 } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
  <>
    <div>
      <div className='homepage-content'>

        <div className='container'>

          <div className='row'>

          <div className='col-lg-12 mb-50'>

            <div className='row'>

              <div className='col-lg-3 col-md-4'>

                  <div className='hero-side-category'>

                    <div className='category-toggle-wrap'>

                      <button className='category-toggle'>
                        Categories
                        <i ><FontAwesomeIcon icon={faBars} /></i>
                      </button>
                    </div>

                    <nav className='category-menu'>
                    <ul>
                        <li><Link to = "">Football</Link></li>
                        <li className="menu-item-has-children"><Link to = "">Tennis<i><FontAwesomeIcon icon={faChevronRight}/></i></Link>

                          <ul className="category-mega-menu">
                            <li className="menu-item-has-children">
                              <Link className="megamenu-head" to = "">Dresses</Link>
                              <ul>
                                <li><Link to = "">Coctail</Link></li>
                                <li><Link to = "">Day</Link></li>
                                <li><Link to = "">Evening</Link></li>
                                <li><Link to = "">Sports</Link></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <Link className="megamenu-head" to = "">Shoes</Link>
                              <ul>
                                <li><Link to = "">Coctail</Link></li>
                                <li><Link to = "">Day</Link></li>
                                <li><Link to = "">Evening</Link></li>
                                <li><Link to = "">Sports</Link></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <Link className="megamenu-head" to = "">Handbags</Link>
                              <ul>
                                <li><Link to = "">Coctail</Link></li>
                                <li><Link to = "">Day</Link></li>
                                <li><Link to = "">Evening</Link></li>
                                <li><Link to = "">Sports</Link></li>
                              </ul>
                            </li>
                          </ul>

                        </li>
                        <li className="menu-item-has-children"><Link to = "">Basketball<i><FontAwesomeIcon icon={faChevronRight}/></i></Link>

                          <ul className="category-mega-menu">
                            <li className="menu-item-has-children">
                              <Link className="megamenu-head" to = "">Dresses</Link>
                              <ul>
                                <li><Link to = "">Coctail</Link></li>
                                <li><Link to = "">Day</Link></li>
                                <li><Link to = "">Evening</Link></li>
                                <li><Link to = "">Sports</Link></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <Link className="megamenu-head" to = "">Shoes</Link>
                              <ul>
                                <li><Link to = "">Coctail</Link></li>
                                <li><Link to = "">Day</Link></li>
                                <li><Link to = "">Evening</Link></li>
                                <li><Link to = "">Sports</Link></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <Link className="megamenu-head" to = "">Handbags</Link>
                              <ul>
                                <li><Link to = "">Coctail</Link></li>
                                <li><Link to = "">Day</Link></li>
                                <li><Link to = "">Evening</Link></li>
                                <li><Link to = "">Sports</Link></li>
                              </ul>
                            </li>
                          </ul>

                        </li>
                        <li><Link to = "">Cricket</Link></li>
                        <li><Link to = "">Baseball</Link></li>
                        <li><Link to = "">Skateboarding</Link></li>
                        <li><Link to = "">Accessories</Link></li>
                        <li><Link to = "">Footwear</Link></li>
                        <li><Link to = "">Badminton</Link></li>
                      </ul>
                    </nav>

                  </div>
                </div>

                  <div className="col-lg-9 col-m-8" style={{paddingRight: '0'}}>
				<div className="hero-slider hero-slider-one">
<Slider>
					<div className="hero-item hero-bg-1">
						<div className="row align-items-center justify-content-between">
							<img style={ { height: 410 } } src={Banner1} className="img-fluid" alt="logo"/>
							<div className="hero-content col-md-8 offset-md-4 col-12 offset-0">
								<h1>THE WINTER</h1>
								<h2><span>SPORT WINTER</span></h2>
								<p>This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
									Aenean
									sollicitudin, lorem quis</p>
								<a href="shop-left-sidebar.html">shop now</a>
							</div>
						</div>
					</div>
  
</Slider>

{/* <div className="hero-item hero-bg-1">
						<div className="row align-items-center justify-content-between">
						<img src={Banner1} className="img-fluid" alt="logo"/>
								<div className="hero-content col-md-8 offset-md-4 col-12 offset-0">
									<h1>THE WINTER</h1>
									<h2><span>SPORT WINTER</span></h2>
									<p>This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
										Aenean
										sollicitudin, lorem quis</p>
									<a href="shop-left-sidebar.html">shop now</a>
								</div>
							</div>
						</div> */}

						
					</div>

											

					<div className="featured-service-container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="single-featured-service featured-service-bg-1">
									<div className="single-featured-service-content">
										<h3>Lorem ipsum dolor.</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
										<a href="shop-left-sidebar.html">View Collection</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-featured-service featured-service-bg-2">
									<div className="single-featured-service-content">
										<h3>Lorem ipsum dolor.</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
										<a href="shop-left-sidebar.html">View Collection</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-featured-service featured-service-bg-3">
									<div className="single-featured-service-content">
										<h3>Lorem ipsum dolor.</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
										<a href="shop-left-sidebar.html">View Collection</a>
									</div>
								</div>
							</div>
						</div>

					</div>

				
			</div>
          
              
            </div>


            <div className="col-12">
				<div className="row">
					<div className="col-lg-12 col-md-12 mb-50">
						<div className='homepage-main-content'>
						<div className="horizontal-product-slider">
							<div className="row">
								<div className="col-lg-12">
									<div className="block-title">
										<h2><a href="#">BEST SELLER</a></h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="horizontal-product-list">
										<div className="single-product">
											<div className="single-product-content">
												<div className="product-image new-badge">
													<a href="single-product-variable.html">
														<img width="250" height="250" src={adisdasStart} className="img-fluid" alt=""/>
														<img width="250" height="250" src={NikeAir} className="img-fluid" alt=""/>
													</a>
													<div className="image-btn">
														<a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container"><i
																className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></i></a>
														<a href="#"><i className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></i></a>
													</div>
												</div>
												<h5 className="product-name"><a href="single-product-variable.html">Faded Short
														Sleeve</a></h5>
												<div className="price-box">
													<h4>$ 12.00</h4>
												</div>

												<a href="#" className="add-to-cart-btn" data-bs-toggle="modal"
													data-bs-target="#add-to-cart-modal-container"><i className="fa fa-shopping-cart"></i> Add
													to cart</a>
											</div>
										</div>
										
										<div className="single-product">
											<div className="single-product-content">
												<div className="product-image sale-badge">
													<a href="single-product-variable.html">
														<img width="250" height="250" src={NikeAir} className="img-fluid" alt=""/>
														<img width="250" height="250" src={NikeAir1} className="img-fluid" alt=""/>
													</a>
													<div className="image-btn">
														<a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container"><i
																className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></i></a>
														<a href="#"><i className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></i></a>
													</div>
												</div>
												<h5 className="product-name"><a href="single-product-variable.html">Printed Dress</a>
												</h5>
												<div className="price-box">
													<h4>$ 12.00</h4>
												</div>

												<a href="#" className="add-to-cart-btn" data-bs-toggle="modal"
													data-bs-target="#add-to-cart-modal-container"><i className="fa fa-shopping-cart"></i> Add
													to cart</a>
											</div>
										</div>
										
										<div className="single-product">
											<div className="single-product-content">
												<div className="product-image">
													<a href="single-product-variable.html">
														<img width="250" height="250" src={NikeAir1} className="img-fluid" alt=""/>
														<img width="250" height="250" src={Boot} className="img-fluid" alt=""/>
													</a>
													<div className="image-btn">
														<a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container"><i
																className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></i></a>
														<a href="#"><i className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></i></a>
													</div>
												</div>
												<h5 className="product-name"><a href="single-product-variable.html">Printed Dress</a>
												</h5>
												<div className="price-box">
													<h4>$ 12.00</h4>
												</div>

												<a href="#" className="add-to-cart-btn" data-bs-toggle="modal"
													data-bs-target="#add-to-cart-modal-container"><i className="fa fa-shopping-cart"></i> Add
													to cart</a>
											</div>
										</div>
										
										<div className="single-product">
											<div className="single-product-content">
												<div className="product-image">
													<a href="single-product-variable.html">
														<img width="250" height="550" src={NikeAir1} className="img-fluid" alt=""/>
														<img width="250" height="250" src={adisdasStart} className="img-fluid" alt=""/>
													</a>
													<div className="image-btn">
														<a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container"><i
																className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></i></a>
														<a href="#"><i className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></i></a>
													</div>
												</div>
												<h5 className="product-name"><a href="single-product-variable.html">Faded Short
														Sleeve</a></h5>
												<div className="price-box">
													<h4>$ 12.00</h4>
												</div>

												<a href="#" className="add-to-cart-btn" data-bs-toggle="modal"
													data-bs-target="#add-to-cart-modal-container"><i className="fa fa-shopping-cart"></i> Add
													to cart</a>
											</div>
										</div>
										
										<div className="single-product">
											<div className="single-product-content">
												<div className="product-image new-badge sale-badge">
													<a href="single-product-variable.html">
														<img width="250" height="250" src={adisdasStart} className="img-fluid" alt=""/>
														<img width="250" height="250" src={NikeAir1} className="img-fluid" alt=""/>
													</a>
													<div className="image-btn">
														<a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container"><i
																className="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></i></a>
														<a href="#"><i className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></i></a>
													</div>
												</div>
												<h5 className="product-name"><a href="single-product-variable.html">Printed Dress</a>
												</h5>
												<div className="price-box">
													<h4>$ 12.00</h4>
												</div>

												<a href="#" className="add-to-cart-btn" data-bs-toggle="modal"
													data-bs-target="#add-to-cart-modal-container"><i className="fa fa-shopping-cart"></i> Add
													to cart</a>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
						</div>
						
						</div>

					</div>
          <div className="row">
								<div className="col-lg-12">
									<div className="block-title">
										<h2><a href="#">PRODUCTS</a></h2>
									</div>
								</div>
							</div>
					<div className="row">

                        <div className="col-lg-4 col-md-6 col-12 mb-40">
                            <div className="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" className="image"><img
                                        width="370" height="290" src={Blog1} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Latest Drone for taking sky
                                            view image and 4K
                                            video</Link></h4>
                                    <ul className="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-40">
                            <div className="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" className="image"><img
                                        width="370" height="290" src={Blog2} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Zeon Z 5 Pro Laptop makes your
                                            life easy and
                                            simple</Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
							<a href="#" class="add-to-cart-btn" data-bs-toggle="modal"
													data-bs-target="#add-to-cart-modal-container"><i class="fa fa-shopping-cart"></i> Add
													to cart</a>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-40">
                            <div class="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" class="image"><img
                                        width="370" height="290" src={Blog3} alt="Blog Image"/></Link>
                                <div class="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Latest Play Station for plying
                                            exclusive games</Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-40">
                            <div class="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" class="image"><img
                                        width="370" height="290" src={Blog4} alt="Blog Image"/></Link>
                                <div class="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Feel the Real bits of Song with
                                            the JBS
                                            headphone and enjoy </Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-40">
                            <div class="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" class="image"><img
                                        width="370" height="290" src={Blog5} alt="Blog Image"/></Link>
                                <div class="content">
                                    <h4><Link href="single-blog-left-sidebar.html">The most attractive Smart watch
                                            coming in this
                                            February</Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-40 ">
                            <div class="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" class="image"><img
                                        width="370" height="290" src={Blog6} alt="Blog Image"/></Link>
                                <div class="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Introducing innovative
                                            Smartsphone Uawei Mate
                                            10 Pro</Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-40">
                            <div class="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" class="image"><img
                                        width="370" height="290" src={Blog7} alt="Blog Image"/></Link>
                                <div class="content">
                                    <h4><Link href="single-blog-left-sidebar.html">New Conan D70 don’t miss any
                                            moments any where</Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-40">
                            <div class="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" class="image"><img
                                        width="370" height="290" src={Blog8} alt="Blog Image"/></Link>
                                <div class="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Introducing Jeilips Coffee
                                            maker for home and
                                            office</Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-40">
                            <div class="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" class="image"><img
                                        width="370" height="290" src={Blog9} alt="Blog Image"/></Link>
                                <div class="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Latest Drone for taking sky
                                            view image and 4K
                                            video</Link></h4>
                                    <ul class="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col">

                            <ul class="pagination">
                                <li><Link to ="#"><i><FontAwesomeIcon icon={faChevronLeft} /></i>Back</Link></li>
                                <li><Link to ="#">1</Link></li>
                                <li class="active"><Link to ="#">2</Link></li>
                                <li><Link to ="#">3</Link></li>
                                <li> - - - - - </li>
                                <li><Link to ="#">18</Link></li>
                                <li><Link to ="#">18</Link></li>
                                <li><Link to ="#">20</Link></li>
                                <li><Link to ="#">Next<i><FontAwesomeIcon icon={faChevronRight} /></i></Link></li>
                            </ul>

                        </div>
                    </div>
				</div>

			</div>
		</div>
	</div>
</div>
</div>
                        
        

    
  </>
  )
}

export default Home
