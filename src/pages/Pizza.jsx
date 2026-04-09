import React from "react";
import { pizzas } from "../assets/pizzas"; 

const Pizza = () => {
    const pizza = pizza[0];
    return(
        <div className="container mt-5 d-flex justify-content-center" style={{minHeight: "70vh"}}>
            <div className="card shadow-lg" style={{maxWidth: "800px"}}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={pizza.img} className="img-fluid rounded-start h-100" alt={pizza.name} style={{objectFit: "cover"}} /> 
                    </div>

                    <div className="col.md-6">
                        <div className="card-body p-4">
                            <h2 className="card-title text-capitalize border-bottom pb-2">Pizza {pizza.name}</h2>
                            <p className="card-text text-muted mt-3">{pizza.desc}</p>

                            <h5 className="mt-4">Ingredientes:</h5>
                            <ul className="text.muted">
                                {pizza.ingredients.map((ing, index) => (
                                    <li key={index}>🍕</li>
                                ))}
                            </ul>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h3 className="text-primary fw-bold"> Precio: ${pizza.price.toLocaleString()} </h3>
                        <button className="btn btn-dark">Añadir 🛒</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}; 

export default Pizza;  
