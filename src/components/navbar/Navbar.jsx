import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Navbar = () => { 
const total= 25000;
const token= false;
const formatNumber= (num) => num.toLocaleString('es-CL');

return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div className="container-fluid" >
        <Link  className="navbar-brand" to="/">Pizzeria Mamma Mía</Link>
        
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
            <Link to="/" className="btn btn-outline-light me-2">Home</Link>
            
            {token ? (
            <>
                <Link to="/profile" className="btn btn-outline-light me-2">Profile</Link>
                <button className="btn btn-outline-light me-2"> Logout</button>
            </>
            ) : (
            <>
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-outline-light me-2" >Register</Link>
            </>
            )}
        </div>

        <div className="navbar-nav">
            <Link to="/cart" className="btn btn-outline-info"> 
            Total: ${formatNumber(total)}
            </Link>
        
        </div>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
        
    
