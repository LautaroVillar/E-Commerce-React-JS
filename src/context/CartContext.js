import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';
export const CartContext = createContext();
const productsFromLocalStorage = JSON.parse(localStorage.getItem("cartt") || "[]")
export const CartProvider = ({children}) => {
    
        
    const [cart, setCart] = useState(productsFromLocalStorage)
    const [send, setSend] = useState(0);
 

    useEffect(() => {
        localStorage.setItem("cartt",JSON.stringify(cart))
       
        }, [cart])
    const clear = () => {
        setCart([])
    }

    const addItem = (item) => {
        const existsInCart = cart.find((prod)=> prod.id === item.id)
        if(existsInCart){
            const carritoActualizado = cart.map((prod)=>{
                if(prod.id === item.id){
                    if(prod.quantity + item.quantity <= prod.stock){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }else{
                    console.log("no hay stock disponible")
                    return {...prod, quantity:prod.quantity}
                }
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado )
        }else{
            setCart([...cart, item])
        }

    }

    
    const removeItem =  (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id )
    }
    const cartTotal = () =>{
    return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
    }
    const cartQuantity = () =>{
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }
    const delivery = (add) => {
        return setSend(add)
    }
 
    return(
        <CartContext.Provider value={{cart, clear, removeItem, isInCart, addItem, cartQuantity, cartTotal, send, delivery }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext)