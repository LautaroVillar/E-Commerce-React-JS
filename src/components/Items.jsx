import { useNavigate } from "react-router-dom";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { grey, deepOrange } from "@mui/material/colors";

const color = grey[700];
const colorCart = deepOrange[600];
const colorCartHover = deepOrange[400];

const Items = ({ product }) => {
  const { id, img, name, price } = product;
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: 300, maxHeight: 500, margin: "15px" }}>
        <CardMedia component="img" image={img} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="h6" color={color}>
            Precio:$ {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            sx={{
              backgroundColor: colorCart,
              "&:hover": {
                backgroundColor: colorCartHover,
              },
            }}
            variant="contained"
            onClick={() => navigate(`/detalle/${id}`)}
          >
            Ver más
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Items;
