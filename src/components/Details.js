import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button1, ImgCard, Text } from '../styles/Detail.module';
import { Container } from '../styles/Detail.module'
import { BsHeartFill, BsPlusLg, BsCalendarPlus, BsArrowLeft } from "react-icons/bs";

const Details = ({ movie }) => {

    const params = useParams()
    const navigate = useNavigate()
    const { id } = params
    const buscando = movie.find(index => index.id === Number(id))


    return (

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
                    <Button variant="warning">Ver Trailer</Button>
                    <Button1 variant="outline-warning"> <BsPlusLg /> Favoritos</Button1>
                </div>
            </Text>
        </Container>

    )
}

export default Details
