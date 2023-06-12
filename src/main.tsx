import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <header>
            <h1>Vendo MacBook Pro 16" 2019 Modelo A2141</h1>
        </header>
        <main>
            <h2>Intel Core i9 2.3GHz, 16GB RAM, 1TB SSD, Intel UHD Graphics 630 1536MB.</h2>
            <h2>Único dueño, comprada en marzo 2020. ¡Impecable!</h2>
            <App />
            <h2>Precio: USD 1600</h2>
            <h2>Contacto WhatsApp: +54 9 11 5860-3710</h2>
            <h2>Contacto email: macbook@jps.ar</h2>
        </main>
    </React.StrictMode>
);
