import React from 'react';
import ReactDOM from 'react-dom/client'
// import { HellWorldApp } from './HellWorldApp';
import { FirstApp } from './FirstApp';

// Css styles import
import './styles.css'

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        {/* <HellWorldApp /> */}
        <FirstApp />
    </React.StrictMode>
);