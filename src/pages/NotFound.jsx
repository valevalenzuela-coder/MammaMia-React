import React from "react";
import { Link } from "react-router-dom"; 

const NotFound = () => {
    return(
        <div className="container mt-5 text-center" style={{minHeight: "70vh"}}>
            <div className="py-5">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <h2 className="mb-4">¡Ups página no encontrada!</h2>
                <p className="fs-5 mb-5 text-muted">
                    Parece que la Pizza que buscas no esta en nuestro menú o la dirección es incorrecta
                </p>

            <Link to="/" className="btn btn-primary btn-lg shadow">
            Volver al Inicio
            </Link>
            </div>

        </div>
    );
}; 

export default NotFound;