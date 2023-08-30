import React from 'react';
import ReactDOM from 'react-dom/client'
// import { HellWorldApp } from './HellWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

// Css styles import
import './styles.css'

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <CounterApp value={20}/>
    </React.StrictMode>
);