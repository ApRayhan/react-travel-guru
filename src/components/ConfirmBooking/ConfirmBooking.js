import React from 'react';
import LoginPageNavbar from '../LoginPage/LoginPageNavbar/LoginPageNavbar';
import './ConfirmBooking.css';
// Place Images
import Place1 from '../../Image/Rectangle 26.png';
import Place2 from '../../Image/Rectangle 27.png';
import Place3 from '../../Image/Rectangle 28.png';
import map from '../../Image/map.png';



const ConfirmBooking = () => {
  return (
    <div>
      <LoginPageNavbar />
      <hr/>
      <div className="placeInfo_and_map">
        <div className="placeInfo">
          <div className="top">
            <small>252 stays Apr 13-17 3 guests</small>
            <h5>Stay in Cox’s Bazar</h5>
          </div>
          <div className="single">
            <div className="infoLeft">
              <img src={Place1} alt=""/>
            </div>
            <div className="infoRight">
              <p>Light bright airy stylish apt & safe 
              peaceful stay</p>
              <small>4 guests   2 bedrooms   2 beds   2 baths</small>
              <small>Wif Air conditioning Kitchen</small>
              <small>Cancellation fexibility availiable</small>
            </div>
          </div>

          <div className="single">
            <div className="infoLeft">
              <img src={Place2} alt=""/>
            </div>
            <div className="infoRight">
              <p>Light bright airy stylish apt & safe 
              peaceful stay</p>
              <small>4 guests   2 bedrooms   2 beds   2 baths</small>
              <small>Wif Air conditioning Kitchen</small>
              <small>Cancellation fexibility availiable</small>
            </div>
          </div>

          <div className="single">
            <div className="infoLeft">
              <img src={Place3} alt=""/>
            </div>
            <div className="infoRight">
              <p>Light bright airy stylish apt & safe 
              peaceful stay</p>
              <small>4 guests   2 bedrooms   2 beds   2 baths</small>
              <small>Wif Air conditioning Kitchen</small>
              <small>Cancellation fexibility availiable</small>
            </div>
          </div>
        </div>
        <div className="map">
          <img src={map} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;