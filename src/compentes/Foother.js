import React from 'react'

function Foother() {
  return (
    <div>
       <div className="container mt-5">
                    <div className="title  text-center">
                        <h2 className="position-relative d-inline-block Head-text">Special Selection</h2>
                    </div>
  
            <div className = "special-list row g-0">
                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className = "special-img position-relative overflow-hidden">
                        <img src = "images/special_product_1.jpg" className = "w-100" />
                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div className = "text-center">
                        <p className = "text-capitalize mt-3 mb-1">gray shirt</p>
                        <span className = "fw-bold d-block">$ 45.50</span>
                        <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className = "special-img position-relative overflow-hidden">
                        <img src = "images/special_product_2.jpg" className = "w-100" />
                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div className = "text-center">
                        <p className = "text-capitalize mt-3 mb-1">gray shirt</p>
                        <span className = "fw-bold d-block">$ 45.50</span>
                        <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className = "special-img position-relative overflow-hidden">
                        <img src = "images/special_product_3.jpg" className = "w-100" />
                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div className = "text-center">
                        <p className = "text-capitalize mt-3 mb-1">gray shirt</p>
                        <span className = "fw-bold d-block">$ 45.50</span>
                        <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

                <div className = "col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className = "special-img position-relative overflow-hidden">
                        <img src = "images/special_product_4.jpg" className = "w-100" />
                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div className = "text-center">
                        <p className = "text-capitalize mt-3 mb-1">gray shirt</p>
                        <span className = "fw-bold d-block">$ 45.50</span>
                        <a href = "#" className = "btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>
            </div>
                    </div>
        <section id = "offers" className = "my-4 py-5">
        <div className = "container">
            <div className = "row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
                <div className = "offers-content">
                    <span className = "text-white">Discount Up To 40%</span>
                    <h2 className = "mt-2 mb-4 text-white">Grand Sale Offer!</h2>
                    <button type="button" className="btn m-2 text-dark  text-uppercase" data-filter=".new">Buy Now</button>

                </div>
            </div>
        </div>
    </section>

    
   {/* about us  */}
    <section id = "about" className = "py-5">
        <div className = "container">
            <div className = "row gy-lg-5 align-items-center">
                <div className = "col-lg-6 order-lg-1 text-center text-lg-start">
                    <div className = "title pt-3 pb-5">
                        <h2 className = "position-relative d-inline-block ms-4 Text-about">About Us</h2>
                    </div>
                    <p className = "lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
                </div>
                <div className = "col-lg-6 order-lg-0">
                    <img src = "Images/about_us.jpg" alt = "" className = "img-fluid" />
                </div>
            </div>
        </div>
    </section>
    {/* end of about us */}

    </div>
  )
}

export default Foother