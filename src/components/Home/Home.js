import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import NavbarArea from '../NavbarArea/NavbarArea';
import SliderArea from '../SliderArea/SliderArea';
import './Home.css';


const Home = () => {

  const [items, setItem] = useState(fakeData);

  
  return (
    <div>
      <div className="header">
        <NavbarArea />
        <SliderArea items={items}></SliderArea>
        <div className="image_ovelay"></div>
      </div>
      <div>
      </div>
    </div>
    
  );
};

export default Home;