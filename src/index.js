import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // סגנונות כלליים
import App from './components/App'; // וודא שהנתיב נכון

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
