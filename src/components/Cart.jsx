import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useCart} from "../context/CartContext"
import Button from '@mui/material/Button'
import CartItem from './CartItem'


const Cart = () => {
 const{cart, clear,cartTotal} = useCart()
 const navigate = useNavigate()

 return (
  <div>
    {
      !cart.length 
      ?<div>
        <h2>Tu carrito esta vacio!</h2>
        <h4>Te invitamos a ver nuestros productos</h4>
        <button onClick={()=>navigate('/')}>Ir a comprar</button>
      </div>
      :<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2>Tu carrito</h2>
          {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
          <span>Total a pagar : ${cartTotal()}</span>
          <div style={{display:"flex", justifyContent:"space-between", padding:"2rem"}}>
          <Button style={{margin:"10px"}}variant="contained" color="primary" onClick={clear}>Vaciar Carrito</Button >
          <Button style={{margin:"10px"}} variant="contained" color="primary" >Terminar compra</Button>
          </div>
      </div>
    }
  </div>
)
}

export default Cart

