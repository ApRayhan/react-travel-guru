import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = (props) => {
  const [to, setTo] = useState(null);
  const [form, setForm] = useState(null);
  const {place} = props.product;

  return (
    <div className="booking_form">
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text" placeholder="Dhaka" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Destination</Form.Label>
          <Form.Control defaultValue={ place } type="text" placeholder="Destination" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Label>Form</Form.Label>
            <DatePicker className="form-control" selected={form} onChange={date => setForm(date)} />
          </Col>
          <Col>
            <Form.Label>To</Form.Label>
            <DatePicker className="form-control" selected={to} onChange={date => setTo(date)} />
          </Col>
        </Row><br />
        <Link to="/confirm-booking" variant="" className="booking_btn">
          Start Booking
        </Link>
      </Form>
    </div>
  );
};

export default BookingForm;