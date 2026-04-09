import React from "react";

const Profile = () => {
    const userEmail="valentina@pizzeria.com"
    return (
        <div className="container mt-5 text-center" style={{ minHeight: "70vh"}}>
         <div className="card mx-auto shadow p-5" style={{maxWidth: "500px"}}>
            <h2 className="mb-4">Perfil</h2>
            <p className="fs-5">Usuario: <strong>{userEmail}</strong></p>

            <button className="btn btn-danger">Cerrar Sesión</button>
         </div>
        </div>
    );
}; 
 export default Profile; 