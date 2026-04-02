import React, {useState, useEffect} from "react";

const Pizza = () => {
    const [pizza, setPizza] = useState(null);
    const getPizza =async () => {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
    };

useEffect(() => {
    getPizza();
}, []);

if (!pizza) {
    return <div className="text-center mt-5"> Cargando Pizza..</div>;
}

return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card mb-3 shadow" style={{maxWidth: "800px"}}>
            <div className="row g-0">
                <div className="col-md-6">
                <img 
                src={pizza.img}
                className="img-fluid rounded-start h-100"
                alt={pizza.name}
                style={{objectFit: "cover"}}
                crossOrigin="anonymous"
                />
                </div>

                <div className="col-md-6 p-4">
                    <div className="card-body">
                        <h2 className="card-title text-capitalize border-bottom pb-2">{pizza.name}</h2>
                        <p className="card-text text-muted mt-3">
                        {pizza.desc}
                        </p>
                        <div className="mt-4">
                            <strong>Ingredientes:</strong>
                            <ul className="mt-2">
                                {pizza.ingredients?.map((ingrediente, index) => (
                                    <li key={index}>{ingrediente}</li>
                                ))}
                            </ul>
                        </div>
                        <h4 className="mt-4 text-success">
                            Precio: ${pizza.price?.toLocaleString('es-CL')}
                        </h4>
                        <button className="btn btn-dark w-100 mt-3">
                        Añadir al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}; 
export default Pizza; 