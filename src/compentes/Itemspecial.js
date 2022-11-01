import React from 'react'

export default function Itemspecial(props) {
  const {id, imageUrl, name, description, price} = props;
  return (
    <div className='container'>
        <div className = "">
                    <div className = "special-img position-relative overflow-hidden">
                        <img src ={props.image} className = "w-100" />
                        <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div className = "text-center">
                        <p className = "text-capitalize mt-3 mb-1">{props.title}</p>
                        <span className = "fw-bold d-block">${props.price}</span>
                        <button  className = "btn btn-primary mt-3 snipcart-add-item"
                           data-item-id="item"
                           data-item-name={props.title}
                           data-item-url="/"
                           data-item-image={props.image}
                           data-item-price={props.price}
                            
                            >Add to Cart</button>
                    </div>
                    
                </div>
                
    </div>
  )
}
