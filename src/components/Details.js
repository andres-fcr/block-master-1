import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button1, ImgCard, Text } from '../styles/Detail.module';
import { Container } from '../styles/Detail.module'
import { BsHeartFill, BsPlusLg, BsCalendarPlus, BsArrowLeft } from "react-icons/bs";
import { url } from '../helpers/url';

const Details = ({ movie }) => {

    const params = useParams()
    const navigate = useNavigate()
    const { id } = params
    const buscando = movie.find(index => index.id === Number(id))

    const eliminarDatos = async (id) => {
        await fetch(url + id, {
            method: 'DELETE'
        })
    }


    return (

        <div>
            <Container id='container' className='mx-auto'>
                <ImgCard width="auto" height="500" src={buscando.poster_path} alt={buscando.title}></ImgCard>
                <Text>
                    <Link to={"/"}>
                        <Button1 variant="outline-warning" className=" float-end">
                            <BsArrowLeft />
                        </Button1>
                    </Link>
                    <h3> <strong>{buscando.title}</strong></h3>
                    <p>{buscando.overview}</p>
                    <div className='row'>

                        <p className="col"><BsCalendarPlus /> {buscando.release_date}</p>
                        <p className="col"> <BsHeartFill /> {buscando.vote_average}</p>
                    </div>

                    <div>
                        <div className='mx-auto container'>
                            <Button variant="warning">Editar Pelicula</Button>

                            <Button1 variant="outline-warning"
                                onClick={() => eliminarDatos(buscando.id)}
                            >Borrar Pelicula</Button1>

                        </div>
                    </div>
                </Text>
            </Container>

        </div>

    )
}

export default Details
