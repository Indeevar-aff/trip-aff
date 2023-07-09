import React, { useState } from 'react';
import {  useNavigate , useLocation } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

const Trip = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const hotels = location.state.item.hotels;
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleClick = (item) => {
    setSelectedHotel(item);
  };

  const handleButtonClick = () => {
    if (selectedHotel) {
      // Perform an action with the selected hotel
    const updatedItem = {
      placeName: location.state.item.name,
      placeLocation: location.state.item.location,
      ...selectedHotel
    };
      console.log('Selected hotel:', updatedItem);
      navigate('/payment', { state: { item: updatedItem } });
    }
  };

  return (
	<div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
	  <Container>
	    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Hotels at {location.state.item.name}</h1>
	    <Row className="justify-content-center">
	      {hotels.map((item, index) => (
		<Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
		  <Card
		    className="card"
		    style={{ cursor: 'pointer', height: '400px', backgroundColor: selectedHotel === item ? 'lightgrey' : '' }}
		    onClick={() => handleClick(item)}
		  >
		    <Card.Img variant="top" src={item.image} alt={item.name} style={{ objectFit: 'cover', width: '100%', height: '200px' }} className="img-fluid" />
		    <Card.Body>
		      <Card.Title>{item.name}</Card.Title>
		      <Card.Text style={{ marginBottom: '0' }}>Rating: {item.rating}</Card.Text>
		      <Card.Text>Price: {item.price} INR/night</Card.Text>
		    </Card.Body>
		  </Card>
		</Col>
	      ))}
	    </Row>
	    <div className="d-flex justify-content-center">
	      <Button variant="primary" onClick={handleButtonClick} disabled={!selectedHotel}>
		Book Selected Hotel
	      </Button>
	    </div>
	  </Container>
	</div>
  );
};

export default Trip;
