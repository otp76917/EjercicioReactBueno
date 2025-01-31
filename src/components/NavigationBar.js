import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Mi Aplicación de Noticias</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;