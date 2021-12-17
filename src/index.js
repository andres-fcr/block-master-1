import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/Container';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="dev-4-z-mte5.us.auth0.com"
    clientId="9wc3BEz1ApWylzp1PPHY7Vnw4JpH9vJs"
    redirectUri={window.location.origin}
  >
    <Container />
  </Auth0Provider>,

  document.getElementById('root')
);

