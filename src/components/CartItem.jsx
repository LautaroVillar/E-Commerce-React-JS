import React from "react";
import Button from "@mui/material/Button";
import { useCart } from "../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const colorIcon = grey[900];

let theme = createTheme();
theme = responsiveFontSizes(theme);

const CartItem = ({ compra }) => {
  const { removeItem } = useCart();

  return (
    <>
      <Card
        sx={{
          width: 350,
          display: "flex",
          margin: "5px",
          padding: "5px",
          border: "1px solid #ffccbc",
        }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: 130, maxHeight:130 }}
          image={compra.img}
          alt={compra.name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography component="h6" variant="h6">
                {compra.name}
              </Typography>
              <Typography component="body">
                Unidades: {compra.quantity}
              </Typography>
              <Typography component="span">${compra.price}</Typography>
            </ThemeProvider>
          </CardContent>
        </Box>
        <Button
          sx={{
            color: colorIcon,
            "&:hover": {
              background: "none",
            },
          }}
          onClick={() => removeItem(compra.id)}
        >
          <DeleteIcon />
        </Button>
      </Card>
    </>
  );
};

export default CartItem;
