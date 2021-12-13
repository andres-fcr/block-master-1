import React, { useState } from 'react'
import { url } from '../helpers/url'
import { Container } from '../styles/Detail.module'

const Registro = () => {

    const [user, setUser] = useState(
        {
            title: '',
            overview: '',
            release_date:'',
            vote_average:'',
            poster_path:''
        }
    )

    const { title, overview, release_date, vote_average, poster_path } = user

    const handleCahnge = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const agregarDatos = async () => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
    }

    return (
        <div>
            <h3 className="text-center"> Agregar Peliculas </h3>
            <Container id='contenedor1' className='mx-auto ps-3'>

            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="formGroupExampleInput">Nombre Pelicula</label>
                    <input
                        name='title'
                        value={title}
                        onChange={handleCahnge}
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Nombre Pelicula"
                    />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Descripcion</label>
                    <input
                        name='overview'
                        value={overview}
                        onChange={handleCahnge}
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Descripcion"
                    />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Fecha de lanzamiento</label>
                    <input
                        name='release_date'
                        value={release_date}
                        onChange={handleCahnge}
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="aaaa-mm-dd"
                    />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Puntuacion de la pelicula</label>
                    <input
                        name='vote_average'
                        value={vote_average}
                        onChange={handleCahnge}
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Puntuación"
                    />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Url imagen</label>
                    <input
                        name='poster_path'
                        value={poster_path}
                        onChange={handleCahnge}
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Url del poster"
                    />
                </div>
                <button 
                class="btn btn-warning ps-3"
                onClick={() => agregarDatos()}>Guardar</button>
            </form>
            </Container>
        </div>
    )
}

export default Registro
