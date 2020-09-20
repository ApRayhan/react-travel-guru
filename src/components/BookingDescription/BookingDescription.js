import React from 'react';

const BookingDescription = (props) => {
  const {place, body} = props.product;
  return (
    <div className="booking_description">
      <h2>{ place }</h2>
      <p>{ body }</p>
    </div>
  );
};

export default BookingDescription;