import React from 'react'

const EditUser = () => {

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="formGroupExampleInput">Nombre usuario</label>
                    <input
                        name='nombre'
                        value={nombre}
                        onChange={handleCahnge}
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Example input"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        name='email'
                        value={email}
                        onChange={handleCahnge}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        name='password'
                        value={password}
                        onChange={handleCahnge}
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <button 
                class="btn btn-warning"
                onClick={() => agregarDatos()}>Guardar</button>
            </form>
        </div>
    )
}

export default EditUser
