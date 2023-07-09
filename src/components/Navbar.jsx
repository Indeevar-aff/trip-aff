import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="px-4">
      <Navbar.Brand href="/">Travel Connect</Navbar.Brand>
    </Navbar>
  );
}

export default MyNavbar;
