import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/blog.css';
import Blog1 from '../assets/img/blog-1.webp';
import Blog2 from '../assets/img/blog-2.webp';
import Blog3 from '../assets/img/blog-3.webp';
import Blog4 from '../assets/img/blog-4.webp';
import Blog5 from '../assets/img/blog-5.webp';
import Blog6 from '../assets/img/blog-6.webp';
import Blog7 from '../assets/img/blog-7.webp';
import Blog8 from '../assets/img/blog-8.webp';
import Blog9 from '../assets/img/blog-9.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronLeft,
    faChevronRight
 } from "@fortawesome/free-solid-svg-icons";
const Blog = () =>{
    return(
        <>
        <div className="container">
        

            <div className="blog-section">
            
                <div className="container">
                

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
                                        width="370" height="290" src={Blog3} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Latest Play Station for plying
                                            exclusive games</Link></h4>
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
                                        width="370" height="290" src={Blog4} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Feel the Real bits of Song with
                                            the JBS
                                            headphone and enjoy </Link></h4>
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
                                        width="370" height="290" src={Blog5} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">The most attractive Smart watch
                                            coming in this
                                            February</Link></h4>
                                    <ul className="meta">
                                        <li><Link to ="#">Momen</Link></li>
                                        <li><Link to ="#">30 January, 2022</Link></li>
                                        <li><Link to ="#">Comments 05</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-40 ">
                            <div className="rossi-blog">
                                <Link href="single-blog-left-sidebar.html" className="image"><img
                                        width="370" height="290" src={Blog6} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Introducing innovative
                                            Smartsphone Uawei Mate
                                            10 Pro</Link></h4>
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
                                        width="370" height="290" src={Blog7} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">New Conan D70 don’t miss any
                                            moments any where</Link></h4>
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
                                        width="370" height="290" src={Blog8} alt="Blog Image"/></Link>
                                <div className="content">
                                    <h4><Link href="single-blog-left-sidebar.html">Introducing Jeilips Coffee
                                            maker for home and
                                            office</Link></h4>
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
                                        width="370" height="290" src={Blog9} alt="Blog Image"/></Link>
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

                    </div>

                    <div className="row">
                        <div className="col">

                            <ul className="pagination">
                                <li><Link to ="#"><i><FontAwesomeIcon icon={faChevronLeft} /></i>Back</Link></li>
                                <li><Link to ="#">1</Link></li>
                                <li className="active"><Link to ="#">2</Link></li>
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
        </>
    );

}
export default Blog;