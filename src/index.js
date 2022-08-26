import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line no-unused-vars
import { fas } from '@fortawesome/fontawesome-free-solid';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
