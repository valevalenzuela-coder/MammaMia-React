import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import Cart from "./components/cart/Cart";
import Pizza from "./components/pizza/Pizza";

function App() {

  return  (
    <div className='App'>
    <Navbar />

  <Home/>*
  {/*<Login/>*/}
  {/*<Cart/>*/}

  <Pizza/>
  <Footer/>
    </div>

  );
}

export default App;
