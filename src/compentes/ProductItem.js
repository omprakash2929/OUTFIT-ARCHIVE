import React from 'react'

function ProductItem(props) {
    const {id, imageUrl, name, description, price} = props;
    return (
        <>
            <div className='container '>
                <div className="card text-center " id='card-items' >
                    <span className="position-absolute  text-white d-flex align-items-center justify-content-center">sale</span>
                    <img src={props.image} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title} </h5>

                        <p className='price text-uppercase  fw-bold'>${props.price}</p>
                        <a className="btn btn-primary text-uppercase snipcart-add-item"
                        data-item-id="item"
                        data-item-name={props.title}
                        data-item-url="/"
                        data-item-image={props.image}
                        data-item-price={props.price}
                        >
                            Buy Now
                            </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem