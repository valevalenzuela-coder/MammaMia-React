import React from "react";
import Header from "../header/Header.jsx";
import CardPizza from "../cardPizza/CardPizza.jsx";

export const Home = () => {
return (
    <div>
    <Header/>
    
    <div className="container mt-5 mb-5">
    <div className="row g-4">
        <div className="col-md-4">
    <CardPizza
    name="Napolitana"
    price={5950}
    ingredients={["mozzarella","tomates","jamón","orégano"]}
    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    />
    </div>
<div className="col-md-4" >
    <CardPizza
    name="Española"
    price={6950}
    ingredients={["mozzarella","gorgonzola","parmesano","provolone"]}
    img="https://cdn.pixabay.com/photo/2022/08/02/07/30/pizza-7359753_1280.jpg"
    />
    </div>

<div className="col-md-4">
    <CardPizza
    name="Pepperoni"
    price={6950}
    ingredients={["mozzarella","pepperoni","orégano"]}
    img="https://media.istockphoto.com/id/1442417585/es/foto/persona-recibiendo-un-pedazo-de-pizza-de-pepperoni-con-queso.webp?s=1024x1024&w=is&k=20&c=okpgZ7WhSGy-697KHu_dT5N8dfYatJ7VWHouPzGmGBs="
    />
</div>
    
    </div>
    </div>
    </div>
);
};

export default Home;



