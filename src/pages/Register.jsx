import { useState } from "react";

const Register= () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");

    const validarDatos = (e) => {
    e.preventDefault(); 
 
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        alert("ERROR: todos los campos son obligatorios");
        return;
    }

    if (password.length < 6){
        alert("ERROR: El password debe tener al menos 6 caracteres");
        return;
    }

    if (password !== confirmPassword){
        alert("ERROR: El password y la confirmacion deben ser iguales");
        return;
    }

    alert("¡Inicio de sesion exitoso!");
}; 

return(
    <div className="container mt-5">
    <h1 className="text-center">Iniciar Sesión</h1>
    <form className="mx-auto" style={{maxWidth:"400px"}} onSubmit={validarDatos}>
    <div className="form-group mb-3">
    <label className="form-label">Email</label>
    <input 
    type="email" 
    className="form-control"
    placeholder="prueba@prueba.com"
    onChange={(e) => setEmail (e.target.value)} 
    value={email}
    />
    </div>
    <div className="form-group mb-3">
    <label className="form-label">Contraseña</label>
    <input 
    type="password" 
    className="form-control"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    />
    </div >  
     
     <div className="form-group mb-3">
    <label className="form-label">Confirmar Contraseña</label>
    <input 
    type="password" 
    className="form-control"
    placeholder="Repite Contraseña"
    onChange={(e) => setConfirmPassword(e.target.value)}
    />
     </div>

    <button type="submit" className="btn btn-primary w-100">Ingresr</button>    
    </form>
    </div>

);
};

export default Register;