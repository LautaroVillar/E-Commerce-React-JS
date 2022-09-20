import ItemCount from "./ItemCount";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ productDetail }) => {
  const { name, description, price, stock, img, id } = productDetail;
  const [count, setCount] = useState(1);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [compra, setCompra]= useState(false) 
  const onAdd = () => {
    let purchase = {
      id,
      name,
      price,
      stock,
      img,
      quantity: count,
    };
     setCompra(true) 
    addItem(purchase);
  };
  return (
    <Card style={{ maxWidth: 345, margin: "2rem" }}>
      <CardMedia component="img" image={img} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography style={{ margin: "3px" }}>Precio:$ {price}</Typography>
        <Typography style={{ margin: "3px" }}>Stock: {stock}</Typography>
      </CardContent>
      {!compra ? 
      <CardActions style={{ justifyContent: "space-between" }}>
        <ItemCount
          stock={stock}
          initial={1}
          count={count}
          setCount={setCount}
          onAdd={onAdd}
        />
      </CardActions>
     : <div>
      <Button
        fullWidth
        onClick={() => navigate("/cart")}
        variant="contained"
        size="large"
        sx={{marginTop:"5px"}}
        
      >
        Ir al carrito
      </Button>
      <Button
        fullWidth
        onClick={() => navigate("/")}
        variant="contained"
        size="large"
        sx={{marginTop:"5px"}}
        
      >
        Seguir comprando
      </Button>
      </div> 
      }
    </Card>
  );
};
export default ItemDetail;
