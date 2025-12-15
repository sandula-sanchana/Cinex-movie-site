import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid className="m-3">
                <Navbar.Brand href="#home">MOVIES</Navbar.Brand>

                {/* Hamburger button for small screens */}
                <Navbar.Toggle aria-controls="navbar-responsive" />

                {/* Collapsible content */}
                <Navbar.Collapse id="navbar-responsive">
                    <Nav className="ms-auto me-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
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
