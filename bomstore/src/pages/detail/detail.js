import React from "react";
import { useParams } from "react-router-dom";
import productList from "../../layout/components/product/productList";
import "../../assets/css/detail.css";
function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productList.find((prod) => prod.id === productId);

  return (
    <>
      <div className="container mt-5">
        <main className="page-content about-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title">
                  <h2>Details</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="detail-item-image border border-info-subtle border-1 border-solid rounded-3 py-2 px-4">
                  <img
                    height="100%"
                    color="transparent"
                    src={thisProduct.image}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="detail-item-content">
                  <div className="detail-item-titel">
                    <h2 className="text-black fs-2">{thisProduct.name}</h2>
                    <div className="d-flex align-items-center mt-3">
                      <div className="col-lg-2 detail-item-price">
                        <div className="d-flex justify-content-center align-items-center border border-success border-2 border-solid rounded-3 py-2 px-4">
                          <span className="font-weight-bold">
                            ${thisProduct.price}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center m-3 fs-3 text-black">
                        <a
                          href="#reviews"
                          className="d-flex align-items-center text-black text-decoration-none fs-6"
                        >
                          <svg
                            className="star"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <div className="ml-1.5 d-flex ">
                            <span>4.9</span>
                            <span className="d-block mx-2">·</span>
                            <span>142 reviews</span>
                          </div>
                        </a>
                        <span className="d-block mx-2">·</span>
                        <div className="d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            style={{ height: "15px" }}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            ></path>
                          </svg>
                          <span className="fs-6">New in</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div>
                        <div className="d-flex justify-content-between text-black">
                          <label for="">
                            <span className="">
                              Size:<span className="m-2">XS</span>
                            </span>
                          </label>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="##"
                            className="text-black text-decoration-none sizing"
                          >
                            See sizing chart
                          </a>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                          <div className="border rounded-3 py-2 px-4 bg-success text-white">
                            XS
                          </div>
                          <div className="border rounded-3 py-2 px-4">S</div>
                          <div className="border rounded-3 py-2 px-4">M</div>
                          <div className="border rounded-3 py-2 px-4">L</div>
                          <div className="border rounded-3 py-2 px-4">XL</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="col-lg-5 col-md-6 offset-lg-7 nc-Button d-flex justify-content-center align-items-center text-bg-dark border rounded-5 py-2 px-4 mt-5">
                        <svg
                          className="m-2"
                          viewBox="0 0 9 9"
                          height="20px"
                          fill="none"
                        >
                          <path
                            d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="ml-3">Add to cart</span>
                      </button>
                    </div>
                    <hr class=" 2xl:!my-10 border-slate-200 dark:border-slate-700"></hr>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <div className="d-flex flex-column justify-content-center text-black">
                      <h2 className="fs-4">Description</h2>
                      <div className="">
                        <p className="">
                        {thisProduct.Description}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center text-black">
                      <h2 className="fs-4">Fabric + Care</h2>
                      <div className="">
                        <ul className="">
                            <li className="">74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
                            <li className="">Adjustable hook & eye closure and straps</li>
                            <li className="">Hand wash in cold water, dry flat</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProductDetail;
