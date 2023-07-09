import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import jsonData from './touristplaces.json'; // Assuming your JSON file is named touristplaces.json
import './card.css';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate(); 

  const handleClick = (item) => {
    navigate("/trip",{state :{ item : item}});
  };

  return (
	<div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
	  <Container>
	    <Row className="justify-content-center">
	      {jsonData.map((item, index) => (
		<Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
		  <Card className="card-home" style={{ cursor: 'pointer', height: '300px' }} onClick={() => handleClick(item)}>
		    <Card.Img variant="top" src={item.image} alt={item.name} style={{ objectFit: 'cover', width: '100%', height: '150px' }} className="img-fluid"/>
		    <Card.Body>
		      <Card.Title>{item.name}</Card.Title>
		      <Card.Text style={{ maxHeight: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.location}</Card.Text>
		    </Card.Body>
		  </Card>
		</Col>
	      ))}
	    </Row>
	  </Container>
	</div>
  );
};

export default Home;
