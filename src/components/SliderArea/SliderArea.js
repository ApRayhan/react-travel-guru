import React from 'react';
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderArea.css'
import { Link } from 'react-router-dom';

const SliderArea = (props) => {
  const items = props.items;

  const settings = {
    dots: true,
    infinite: true,
    // speed: 2000,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
    pauseOnHover: true,
    slidesToShow: 2,
  };
  return (
    <div>
      <div>
        <div className="single_item">
          <h2 className="title">Cox's bazar</h2>
          <p className="details">
          Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
          </p>
          <button className="booking">Booking &#8594; </button>
        </div>
      </div>
      <div className="silder">
        <Slider {...settings}>
          {
            items.map(item => <div className="item">
            <Link to={"/bookingdetails/"+ item.id}>
              <div className="sliderImg">
                <img src={item.image} alt=""/>
                <h4 className="sliderName">{ item.place }</h4>
              </div>
            </Link>
          </div>)
          }
        </Slider>
      </div>
    </div>
  );
};

export default SliderArea;