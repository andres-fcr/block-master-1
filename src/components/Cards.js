import React from 'react'
import { Card, ImgCard, ListCard, Titulo } from '../styles/Cards.module'
import { Link } from 'react-router-dom'
import Carrusel from './Carrusel'

const Cards = ({ movie }) => {

    return (
        <div>
            <Carrusel />
            {/* <img className=" mt-5 img-fluid rounded mx-auto d-block" src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1639108493/ugZbX5lKx4L9ONEu0WTNsadbR96J0t_izofsi.jpg" alt="..." /> */}
            <Titulo>Todas las peliculas</Titulo>
            <ListCard>
                {movie &&
                    movie.map(movie => (

                        <Card key={movie.id}>
                            <Link to={`/detalle/${movie.id}`}>
                                <ImgCard width={200} height={280} src={movie.poster_path} alt={movie.title}></ImgCard>
                            </Link>
                        </Card>
                    ))
                }
            </ListCard>
        </div>
    )
}


export default Cards
