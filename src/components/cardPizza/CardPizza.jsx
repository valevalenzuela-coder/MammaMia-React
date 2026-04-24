import React, {useContext} from "react";
import { CartContexto } from "../../context/CartContext";

export const CardPizza = ({name,price,ingredients,img, pizza}) => {
const {añadirCart} = useContext(CartContexto);

return (
    <div className="card h-100 shadow-sm">
    <img 
    src={img}
    className="card-img-top" 
    alt={`Pizza ${name}`} 
    crossOrigin="anonymous"
    onError={(e) => {
    e.target.src= "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000";
    }}
    />

    <div className="card-body">
    <h4 className="card-title">Pizzeria MamaMia {name}</h4>
    <hr />
    <p className="card-text text-center">
        <strong>Ingredientes</strong>
    </p>
    <ul className="card-text text-center mb-4 list-unstyled">
        {ingredients?.map((ingrediente, index) => (
        <li key={index}>{ingrediente}</li>
        ))}
    </ul>
    <hr />

    <h5 className="text-center mb-3"> Precio:${price.toLocaleString('es-CL')}</h5>

    <div className="mt-auto d-flex justify-content-around">
        <button className="btn btn-outline-dark">Ver más</button>

        <button 
        className="btn btn-dark"
        onClick ={() => añadirCart(pizza)}
        >
            Añadir 
        </button>
        </div>
    </div>
    </div>
);
};
export default CardPizza;


