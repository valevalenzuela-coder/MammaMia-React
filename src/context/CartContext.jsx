import { createContext, useState, useEffect } from "react";

export const CartContexto = createContext();

export const ProveedorContexto = ({ children }) => { 
    const [cart, setCarrito] = useState([]);
    const [pizzasApi, setPizzasApi] = useState([]);

    useEffect(() => {
        const getPizzas = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pizzas");
                const data = await response.json();
                setPizzasApi(data);
            } catch (error) {
                console.error("Error al obtener pizzas:", error);
            }
        };

        getPizzas();
    }, []); 

    
    const añadirCart = (pizza) => { 
        setCarrito((prevCart) => { 
            const existePizza = prevCart.find((p) => p.id === pizza.id);

            if (existePizza) {
                return prevCart.map((p) =>
                    p.id === pizza.id ? { ...p, count: p.count + 1 } : p
                );
            } 
            
            return [...prevCart, { ...pizza, count: 1 }];
        }); 
    }; 

    // 3. Lógica para incrementar cantidad (Requerimiento 4) [cite: 20]
    const incrementar = (id) => { 
        setCarrito((prevCart) =>
            prevCart.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
        );
    }; 

    // 4. Lógica para decrementar y eliminar (Requerimiento 4) [cite: 20]
    const decrementar = (id) => { 
        setCarrito((prevCart) =>
            prevCart
                .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
                .filter((p) => p.count > 0) // Si llega a 0, se elimina del carrito
        );
    }; 

    // 5. Cálculo del Total (Requerimiento 5) 
    const precioTotal = cart.reduce((acc, p) => acc + p.price * p.count, 0);

    return ( 
        <CartContexto.Provider value={{ 
            cart, 
            pizzasApi, 
            añadirCart, 
            incrementar, 
            decrementar, 
            precioTotal 
        }}>
            {children}
        </CartContexto.Provider> 
    ); 
};