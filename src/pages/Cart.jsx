import { useContext } from "react";
import {CartContexto} from "../context/CartContext";

const Cart = () => {
const {cart, incrementar, decrementar, precioTotal} = useContext(CartContexto);

return (

    <div className="container mt-5 p-4  shadow-sm bg-white rounded">
        <h2 className="mb-4"> Detalles del pedido:</h2>
        {cart.length === 0 ? ( 
            <div className="text-center py-5">
                <h4>Tu Carrito esta vacio</h4>
                 <p>Agregar Pizzas</p>
            </div>
        ) : (
        <>
        {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
            <img src={item.img} alt={item.name} style={{width:"80px"}} className="rounded" />
            <h5 className="flex-grow-1 ms-3 text-capitalize">{item.name}</h5>
            <p className="mb-0 mx-3 fw-bold">${(item.price * item.count).toLocaleString()}</p>

    <div className="d-flex align-items-center">    
        <button className="btn btn-outline-danger btn-sm" onClick={() => decrementar(item.id)}>-</button>
        
        <span className="mx-3 fw-bold ">{item.count}</span>

        <button className="btn btn-outline-primary btn-sm" onClick={() => incrementar(item.id)}>+</button>
    </div>
                    </div>
        ))}

    <div className="mt-4 text-start">
        <h3>Total: ${precioTotal.toLocaleString ()}</h3>
        <button className="btn btn-dark btn-lg mt-2">Pagar</button>
    </div>
</>
)};
</div>
);
};


export default Cart;