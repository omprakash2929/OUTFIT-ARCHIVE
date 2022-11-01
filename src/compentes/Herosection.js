import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/img-1.jpg'
import img2 from '../Images/img-2.jpg'
import img3 from '../Images/img-3.jpg'



function Herosection() {
    return (
        <div >
            
          <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner"
                        src={img1}
                        
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='container Hero-text-1 ' >
                        <h3 className=' ' >Best Collection</h3> 
                         
                        <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?</p>
                        <button type="button" className="btn1 mt-3 text-uppercase">BUY NOW</button>
                        </div>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner"
                        
                        src={img2} 
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <div className='container Hero-text-2 ' >
                        <h3>Sale 20% Off On Everything</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button type="button" className="btn1 mt-3 text-uppercase">Shop NOW</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className='container Hero-text-3 ' >
                        <h3>Best Price & Offer</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <button type="button" className="btn1 mt-3 text-uppercase"> visite Offer</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Herosection