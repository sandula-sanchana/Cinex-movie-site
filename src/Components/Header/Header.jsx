import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid className="m-3">
                <Navbar.Brand as={Link} to="/">MOVIES</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-responsive" />
                <Navbar.Collapse id="navbar-responsive">
                    <Nav className="ms-auto me-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
