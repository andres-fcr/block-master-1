import React from 'react'
import { LoginButton } from "./Login1";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from '../styles/Detail.module';

const LogIn = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            <Container className='mx-auto'>

                <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638920590/logo-blockBuster_apegqx.png" className="App-logo" alt="logo" />
              
                {isAuthenticated ? (
                    <>
                        <Profile />
                        <br />
                        <LogoutButton />
                    </>
                ) : (
                    <LoginButton />
                )}
            </Container>
        </div>
    )
}

export default LogIn
