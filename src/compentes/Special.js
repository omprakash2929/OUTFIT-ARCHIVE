import React, { useState } from 'react'
import Itemspecial from './Itemspecial'
import Lastfoother from './Lastfoother';
import Menuspecial from './special.json'



export default function Special() {

    const[items, setItems] = useState(Menuspecial);
  return (
    <div>
       <section id = "special" className = "my-4 py-5">
        <div className = "container">
            <div className = "row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
                <div className = "offers-content">
                    <span className = "text-white">Discount Up To 40%</span>
                    <h2 className = "mt-2 mb-4 text-white">Special Collection!</h2>
                    <button type="button" className="btn m-2 text-dark  text-uppercase" id='special-btn' data-filter=".new">Buy Now</button>

                </div>
            </div>
        </div>
    </section>
    <div className="container mt-5 pt-5">
                    <div className="title  text-center">
                        <h2 className="position-relative d-inline-block Head-text">Special Selection</h2>
                    </div>

            <div className = "special-list row g-0">
                {items.map((elem) => {
                            const { id, title, image } = elem;
                            return (
                                <div className='col-md-6 col-lg-4 col-xl-3 p-2  ' key={elem.id} >
                                    <Itemspecial image={elem.image} title={elem.title} price={elem.price} />
                                </div>)
                        })}
            
            </div>
                    </div>
                    <Lastfoother />
    </div>

  )
}
