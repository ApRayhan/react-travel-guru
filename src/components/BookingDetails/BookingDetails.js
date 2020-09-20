import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import BookingDescription from '../BookingDescription/BookingDescription';
import BookingForm from '../BookingForm/BookingForm';
import NavbarArea from '../NavbarArea/NavbarArea';
import './BookingDetails.css';

const BookingDetails = () => {
  const {productId} = useParams();
  const product = fakeData.find(pd => pd.id == productId);
  
  return (
    <div>
      <div className="header">
        <NavbarArea />
        <BookingDescription product={product} />
        <BookingForm product={product} />
        <div className="image_ovelay"></div>
      </div>
    </div>
  );
};

export default BookingDetails;