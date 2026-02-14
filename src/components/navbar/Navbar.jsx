import React, {useState} from 'react';


const Navbar = () => { 
const total= 25000;
const token= false;
const formatNumber= (num) => num.toLocaleString('es-CL');

return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div className="container-fluid" >
        <span className="navbar-brand" >Pizzeria Mamma Mia</span>
    <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav me-auto">
            <button className="btn btn-outline-light me-2"> Home</button>
            {token ? (
            <>
                <button className="btn btn-outline-light me-2"> Profile</button>
                <button className="btn btn-outline-light me-2"> Logout</button>
            </>
            ) : (
            <>
                <button className="btn btn-outline-light me-2"> Login</button>
                <button className="btn btn-outline-light me-2"> Register</button>
            </>
            )}
        </div>
        <div className="navbar-nav">
            <button className="btn btn-outline-info">
            Total: ${formatNumber(total)}
            </button>
        </div>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
        
    
