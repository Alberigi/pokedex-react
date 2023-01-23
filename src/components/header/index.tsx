import { Container, Button, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Pokedex</Navbar.Brand>
        <Nav className="me-auto">
          <Button>Add Pokemon</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};
