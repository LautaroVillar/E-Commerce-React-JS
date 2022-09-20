import React from 'react'
import Button from '@mui/material/Button'
import { useCart } from '../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete'

const CartItem = ({compra}) => {
    const{removeItem}=useCart()
  return (
    <>
    
    <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'80%'}}>
                <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                <span>{compra.name}</span>
                <span>{compra.quantity}</span>
                <span>${compra.price}</span>
                <Button variant="contained" color="warning" onClick={()=>removeItem(compra.id)}><DeleteIcon/> </Button>
    </div>
    </>
  )
}

export default CartItem