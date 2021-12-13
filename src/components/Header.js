import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {

    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    console.log(search);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Navbar style={{ padding: '10px 90px 0px 90px ' }} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img
                                src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638920590/logo-blockBuster_apegqx.png"
                                width="auto"
                                height="64"
                                className="d-inline-block align-top"
                                alt="Block master"
                            />
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Brand href="#" style={{ color: '#FED941' }}>Inicio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto mx-3 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link style={{ color: '#FED941' }} href="#action1">Registrarse</Nav.Link>
                            <Nav.Link style={{ color: '#FED941' }} href="#action2">Iniciar sesión</Nav.Link>
                            <Nav.Link style={{ color: '#FED941' }} href="#" >Favoritos</Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSubmit} >
                            <FormControl
                                variant="outline-warning"
                                type="search"
                                placeholder="Busca tu pelicula favorita"
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    setQuery({ search: value });
                                }}
                            />
                            <Button variant="outline-warning"><BsSearch /></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
