import { Routes, Route } from 'react-router-dom';
import { ProveedorContexto } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Formulario from "./pages/Register";
import Profile from "./pages/Profile"
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza"; 
import Register from './pages/Register';
import NotFound from "./pages/NotFound";


function App() {

  return  (
  <ProveedorContexto>
    <div className='App'>
   
    <Navbar />
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/login' element={<Login/>}  />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/pizza/p001'element={<Pizza/>} />
  <Route path='/profile' element={<Profile/>} />
  <Route path='*' element={<NotFound/>} />
  
  </Routes>
  <Footer/>
  
    </div>
  </ProveedorContexto>

  );
}

export default App;
