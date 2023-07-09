import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state.item;

  const handlePayment = () => {
    // Handle the payment action
    setPaymentCompleted(true);
  };

  const item = {
    name: 'Hotel Name',
    location: 'Hotel Location',
  };

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const calculateNumberOfDays = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // milliseconds to days
      return numberOfDays;
    }
    return 0;
  };

  const calculateTotalPrice = () => {
    const numberOfDays = calculateNumberOfDays();
    const pricePerNight = info.price;
    return numberOfDays * pricePerNight;
  };

  useEffect(() => {
    if (paymentCompleted && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else if (paymentCompleted && countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate, paymentCompleted]);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Card style={{ width: '30rem' }}>
        <Card.Body className="text-center">
          <Card.Title>Tourist place: {info.placeName}</Card.Title>
          <Card.Text style={{ marginBottom: '0' }}>Location: {info.placeLocation}</Card.Text>
          <Card.Text style={{ marginBottom: '0' }}>Hotel: {info.name}</Card.Text>
          <Card.Text style={{ marginBottom: '0' }}>Rating: {info.rating}</Card.Text>
          <Card.Text>Price: {info.price} INR/night</Card.Text>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center" style={{ marginRight: '30px' }}>
              <label htmlFor="checkin">Check-in</label>
              <input
                id="checkin"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <label htmlFor="checkout">Check-out</label>
              <input
                id="checkout"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <Card.Text style={{ marginTop: '20px' }}>Number of days: {calculateNumberOfDays()}</Card.Text>
          <Card.Text style={{ fontSize: '24px' }}>Total Price: {calculateTotalPrice()} INR</Card.Text>
          {!paymentCompleted ? (
            <Button onClick={handlePayment}>Make Payment</Button>
          ) : (
            <Button disabled>
              <FaCheckCircle style={{ marginRight: '5px' }} /> Payment Completed
            </Button>
          )}
          {paymentCompleted && (
            <p>Redirecting back to the home page in {countdown} seconds...</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Payment;
