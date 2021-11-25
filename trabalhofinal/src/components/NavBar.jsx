import { Component } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';

export default class NavBar extends Component {

    render() {
        return (
            <>
                <Navbar style={{background: "#FAFF00"}} expand="lg" sticky="top" fixed="top" expand={false}>
                    <Container fluid>
                        <Navbar.Brand href="#">Livre Mercado 💸</Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Bem vindo(a) ao Livre Mercado</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home 🏠</Nav.Link>
                                    <Nav.Link href="#action1">Entre ou Cadastre 🔑</Nav.Link>
                                    <Nav.Link href="#action2">Carrinho 🛒</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Pesquisar"
                                        className="me-2"
                                        aria-label="Pesquisar"
                                    />
                                    <Button variant="primary">Pesquisar</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        );
    }
    
}