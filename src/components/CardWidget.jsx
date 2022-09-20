import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { useCart } from "../context/CartContext";


export default function CardWidget() {
  const {cartQuantity, cart} = useCart()
  return (
    <div>
      <ShoppingCartIcon fontSize="large"> </ShoppingCartIcon>
      <span /* style={{backgroundColor:"#6B8EE3", padding:"5px", borderRadius:"75%" }} */>{!cart.length ? "" : cartQuantity()}</span>
    </div>
  );
}
