import React from 'react'
import Lastfoother from './Lastfoother'

export default function EndFoother() {
  return (
    <div>
        <section id = "popular" className = "py-5">
        <div className = "container">
            <div className = "title text-center pt-3 pb-5">
                <h2 className = "position-relative d-inline-block ms-4 Text-popular">Popular Of This Year</h2>
            </div>

            <div className = "row">
                <div className = "col-md-6 col-lg-4 row g-3">
                    <h3 className = "fs-5">Top Rated</h3>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/top_rated_1.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/top_rated_2.jpg" alt = "" className = "img-fluid pe-3 w-25"/>
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/top_rated_3.jpg" alt = "" className = "img-fluid pe-3 w-25" />
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                </div>

                <div className = "col-md-6 col-lg-4 row g-3">
                    <h3 className = "fs-5">Best Selling</h3>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/best_selling_1.jpg" alt = "" className = "img-fluid pe-3 w-25" />
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/best_selling_2.jpg" alt = "" className = "img-fluid pe-3 w-25" />
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/best_selling_3.jpg" alt = "" className = "img-fluid pe-3 w-25" />
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                </div>

                <div className = "col-md-6 col-lg-4 row g-3">
                    <h3 className = "fs-5">On Sale</h3>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/on_sale_1.jpg" alt = "" className = "img-fluid pe-3 w-25" />
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/on_sale_2.jpg" alt = "" className = "img-fluid pe-3 w-25" />
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                    <div className = "d-flex align-items-start justify-content-start">
                        <img src = "images/on_sale_3.jpg" alt = "" className = "img-fluid pe-3 w-25" />
                        <div>
                            <p className = "mb-0">Blue Shirt</p>
                            <span>$ 20.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id = "newsletter" className = "py-5">
        <div className = "container">
            <div className = "d-flex flex-column align-items-center justify-content-center">
                <div className = "title text-center pt-3 pb-5">
                    <h2 className = "position-relative d-inline-block ms-4 Text-Newsletter">Newsletter Subscription</h2>
                </div>

                <p className = "text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem officia accusantium maiores quisquam dolorum?</p>
                <div className = "input-group mb-3 mt-3">
                    <input type = "text" className = "form-control" placeholder="Enter Your Email ..." />
                    <button className = "btn btn-primary" type = "submit">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
   {/* end of newsletter  */}

     {/* footer  */}
   <Lastfoother />
    </div>
  )
}
