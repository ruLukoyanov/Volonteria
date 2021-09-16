import React from 'react';

import MyApp from './MyApp';
import { AuthContextProvider } from '../store/auth-context';

import 'antd/dist/antd.css';
import '../styles/globals.css';

function Volonteria(props) {
  return (
    <AuthContextProvider>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Neucha&display=swap"
          rel="stylesheet"
        />
      </head>
      <MyApp {...props} />
    </AuthContextProvider>
  );
}

export default Volonteria;
