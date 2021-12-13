import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useSearchParams } from 'react-router-dom'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import Cards from '../components/Cards'
import Details from '../components/Details'
import { url } from '../helpers/url'
import { BsSearch } from 'react-icons/bs'
import Registro from '../components/Registro'
import LogIn from '../components/LogIn'
import { useAuth0 } from '@auth0/auth0-react'


const RoutesApp = () => {

    const [movie, setMovie] = useState([])
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const {loginWithRedirect} = useAuth0()



    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setMovie(response.data);
                setTablaUsuarios(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ){
                return elemento;
            }
        });
        setMovie(resultadosBusqueda);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }
   

    return (
        <div>
            <BrowserRouter>
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
                        <Link to="/">
                        <Navbar.Brand href="#" style={{ color: '#FED941' }}>Inicio</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto mx-3 my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to="/register">
                                <Nav.Link style={{ color: '#FED941' }} href="#action1">Agregar pelicula</Nav.Link>
                                </Link>
                                <Link to="/login">
                                <Nav.Link style={{ color: '#FED941' }} href="#action2">Iniciar sesión</Nav.Link>
                                </Link>
                            </Nav>
                            <Form className="d-flex" onSubmit={handleSubmit} >
                                <FormControl
                                    variant="outline-warning"
                                    type="search"
                                    placeholder="Busca tu pelicula favorita"
                                    className="me-2"
                                    aria-label="Search"
                                    value={busqueda}
                                    onChange={handleChange}
                                />
                                <Button variant="outline-warning"><BsSearch /></Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Cards movie={movie} />} />
                    <Route path="/detalle/:id" element={<Details movie={movie} />} />
                    <Route path="/register" element={<Registro />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RoutesApp
