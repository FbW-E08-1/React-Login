import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Routings from './routes/Routings';

const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<Routings/>);


