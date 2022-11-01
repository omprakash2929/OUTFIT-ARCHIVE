import React, { useState } from 'react'
import Carditem from './Carditem'
import Alldata from './AllData.json'
import Lastfoother from './Lastfoother';


export default function Allcollection(props) {

  const Allproduct = Alldata;
  const { name, description, price } = props

  const [items, setItems] = useState(Allproduct);

  const fItems = (categItem) => {
    const updateItem = Allproduct.filter((curElem) => {
      return curElem.category === categItem;
    });
    console.log(updateItem);
    setItems(updateItem);
  }

  return (
    <div >

      <section id="collection" className="py-5">
        <div className="container">
          <div className="title  text-center">
            <h2 className="position-relative d-inline-block Head-text">New Collection</h2>
          </div>

          <div className="row g-0">
            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <button type="button" className="btn1   m-2 text-dark active-filter-btn" onClick={() => setItems(Allproduct)} >All</button>
              <button type="button" className="btn1  m-2 text-dark" onClick={() => fItems('Tshirt')}>T-shirt</button>
              <button type="button" className="btn1  m-2 text-dark" onClick={() => fItems('Dress')}>Dress</button>
              <button type="button" className="btn1  m-2 text-dark" onClick={() => fItems('Jeans')} >Jeans</button>
              <button type="button" className="btn1  m-2 text-dark" onClick={() => fItems('shorts')} >Shorts </button>
              <button type="button" className="btn1  m-2 text-dark" onClick={() => fItems('new')} >New Arrival</button>
            </div>

          </div>
        </div>
        <hr />
<div className='container '>
        <div className=' row my-1 mt-4 row gx-0 gy-4'>

          {items.map((elem) => {
            const { id, title, image } = elem;
            return (
              <div className='col-md-4 ' key={elem.id} >
                <Carditem image={elem.image} title={elem.title} price={elem.price} />
              </div>)
          })}

        </div>
        </div>

        {/* </div> */}
        {/* <hr /> */}

      </section>
<Lastfoother />
    </div>
  )
}
