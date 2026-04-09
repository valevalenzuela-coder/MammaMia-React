import { useState } from "react";

const Login= () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const validarLogin = (e) => {
        e.preventDefault();

    if(!email.trim() || !password.trim()){
      alert("Errror: Todos los campos son obligatorio");
      return;
    }
    
    if(password.length < 6){
        alert("Error: El password debe tener al menos 6 caracteres");
        return;
    }

    alert("¡Inicio de sesion exitoso!");
    };

return(
    <div className="container mt-5">
        <h1 className="text-center">Login</h1>
        <form className="mx-auto" style={{maxWidth:"400px"}} onSubmit={validarLogin}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                type="email" 
                className="form-control"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}/>
            </div>

        <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input 
            type="password" 
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
    </div>
);

};

export default Login;