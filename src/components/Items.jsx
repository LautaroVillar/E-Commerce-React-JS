import {  useNavigate } from "react-router-dom"; 
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { grey} from '@mui/material/colors';

const color = grey[700];



const Items = ({product}) => {

    const {id, img, name, price}= product
    const navigate = useNavigate()
  return (

   <>
    <Card sx={{ minWidth: 400, margin: "15px"}}>
      <CardMedia component="img"  image={img} alt={name} style={{maxHeight:250}} />
      <CardContent>
        <Typography gutterBottom variant="h5"  component="div">
          {name}
        </Typography>
        <Typography variant="h6" color={color}>
          Precio:$ {price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button fullWidth  variant="contained" size="large" onClick={()=>navigate(`/detalle/${id}`)}>Ver más</Button>
      </CardActions>
      
    </Card>
    </>
  )
}

export default Items
