import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { AuthProvider } from './Provider/AuthProvider';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <AuthProvider>
    <App />
    </AuthProvider>
    );

