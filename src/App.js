import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import {CartProvider} from "./context/CartContext"
import Cart from './components/Cart';
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer  />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
