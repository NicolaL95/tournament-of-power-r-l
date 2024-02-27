import React from 'react'
import Slider from "react-slick";
import car from '../assets/car.png';

const SliderImage = ({img, text}) => {
  return (
    <div>
      <img src={img} className="py-2 px-2" />
      <h3>{text}</h3>
    </div>
  );
}

export default function Carousel() {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className='p-6'>
        <div>
        <Slider {...settings}>
          <SliderImage img={car} text="1" />
          <SliderImage img={car} text="2" />
          <SliderImage img={car} text="3" />
          <SliderImage img={car} text="4" />
          <SliderImage img={car} text="5" />
        </Slider>
      </div>
    </div>
  )
}
