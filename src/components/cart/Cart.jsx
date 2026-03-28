import { useState } from "react";
import { pizzaCart } from "../../assets/pizzas";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);
    const increaseCount = (id) => {
    const newCart =  cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1} : item 
        );
        setCart(newCart);
    };

    const decreaseCount = (id) => {
        const newCart = cart.map(item => 
            item.id === id ? {...item, count: item.count - 1} : item
        );
        setCart(newCart.filter(item => item.count > 0));
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

return (

    <div className="container mt-5 p-4  shadow-sm bg-white rounded">
        <h2 className="mb-4"> Detalles del pedido:</h2>
        {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
            <img src={item.img} alt={item.name} style={{width:"80px"}} className="rounded" />
            <h5 className="flex-grow-1 ms-3 text-capitalize">{item.name}</h5>
            <p className="mb-0 mx-3 fw-bold">${(item.price * item.count).toLocaleString()}</p>

    <div className="d-flex align-items-center">    
        <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseCount(item.id)}>-</button>
        <span className="mx-3 fw-bold ">{item.count}</span>
        <button className="btn btn-outline-primary btn-sm" onClick={() => increaseCount(item.id)}>+</button>
    </div>
                    </div>
        ))}

    <div className="mt-4 text-start">
        <h3>Total: ${total.toLocaleString ()}</h3>
        <button className="btn btn-dark btn-lg mt-2">Pagar</button>
    </div>

</div>
);
};

export default Cart;