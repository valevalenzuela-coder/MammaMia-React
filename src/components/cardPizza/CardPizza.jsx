
export const CardPizza = ({name,price,ingredients,img}) => {
return (
    <div className="card h-100 shadow-sm">
    <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
    <div className="card-body">
    <h4 className="card-title">Pizzeria MamaMia {name}</h4>
    <hr />
    <p className="card-text text-center">
        <strong>Ingredientes</strong>
    </p>
    <ul className="card-text text-center mb-4 list-unstyled">
        {ingredients.map((ingrediente, index) => (
        <li key={index}>{ingrediente}</li>
        ))}
    </ul>
    <hr />

    <h5 className="text-center mb-3"> Precio:${price}</h5>
    <div className="mt-auto d-flex justify-content-around">
        <button className="btn btn-outline-dark">Ver más</button>
        <button className="btn btn-dark">Añadir</button>
        </div>
    </div>
    </div>
);
};
export default CardPizza;


