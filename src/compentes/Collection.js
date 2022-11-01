import React, { useState } from 'react'
import ProductItem from './ProductItem';

import Menu from './Data.json'

export default function Collection(props) {
  
  const  product =Menu;
  const { name, description, price} = props
    
    const[items, setItems] = useState(product);

    const fItems = (categItem) =>{
            const updateItem = product.filter((curElem)=>{
                return curElem.category === categItem;
            });
            console.log(updateItem);
            setItems(updateItem);
    }

    return (
        <div>
            <section id="collection" className="py-5">
                <div className="container">
                    <div className="title  text-center">
                        <h2 className="position-relative d-inline-block Head-text">New Collection</h2>
                    </div>

                    <div className="row g-0">
                        <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                            <button type="button" className="btn1   m-2 text-dark active-filter-btn" onClick={()=> setItems(product)} >All</button>
                            <button type="button" className="btn1  m-2 text-dark" onClick={()=> fItems('Tshirt')}>T-shirt</button>
                            <button type="button" className="btn1  m-2 text-dark"  onClick={()=> fItems('Dress')}>Dress</button>
                            <button type="button" className="btn1  m-2 text-dark"  onClick={()=> fItems('new')} >New Arrival</button>
                        </div>

                    </div>

                    <div className='row my-1 mt-4 row gx-0 gy-4 collection-item '>

                        {items.map((elem) => {
                            const { id, title, image, price } = elem;
                            return (
                                <div className='col-md-4  ' key={elem.id} >
                                    <ProductItem image={elem.image} title={elem.title} price={elem.price} />
                                </div>)
                        })}
                    </div>


                </div>
                {/* <hr /> */}
               
            </section>
            <div id="snipcart"
            data-api-key="MjBhNDIxMWEtYmY1NC00ZmMzLWJkYzgtYmNiMzM0NzY3ZWNjNjM4MDAxNTQzMTI2NjM0ODQ0" hidden>
         </div>

        </div>
    )
}
