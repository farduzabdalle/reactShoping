import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
const App=()=>{
    const [cart,setcart]=useState(5);
return (
    <div className="container">
        <Header cart={cart} setcart={setcart}/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>   
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart setcart={setcart}/>}/>
       
        </Routes>
    </div>
)
}

export default App;