import React from 'react'
import Slider from "react-slick";
import car from '../assets/car.png';

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
    return (
    <div className='container p-6'>
        <div>
        <Slider {...settings}>
          <div>
            <img src={car} className="py-2 px-2" />
            <h3>1</h3>
          </div>
          <div>
            <img src={car} className="py-2 px-2" />
            <h3>2</h3>
          </div>
          <div>
            <img src={car} className="py-2 px-2" />
            <h3>3</h3>
          </div>
          <div>
            <img src={car} className="py-2 px-2" />
            <h3>4</h3>
          </div>
          <div>
            <img src={car} className="py-2 px-2" />
            <h3>5</h3>
          </div>
          <div>
            <img src={car} className="py-2 px-2" />
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}
