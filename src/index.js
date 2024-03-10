import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {NavigationProvider} from './context/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<NavigationProvider>
        <App />
</NavigationProvider>
);

