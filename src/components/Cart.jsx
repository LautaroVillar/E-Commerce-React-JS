import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const colorCart = deepOrange[600];
const colorCartHover = deepOrange[400];

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Cart = () => {
  const { cart, cartTotal, delivery, send } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {!cart.length ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          marginTop={4}
          marginBottom={5}
        >
          <Box width={600} gap={10} p={10}>
            <ThemeProvider theme={theme}>
              <Typography m={2} component="h3" variant="h3">
                Tu carrito esta vacío!
              </Typography>
              <Typography m={2} component="h5" variant="h5">
                Te invitamos a ver nuestros productos
              </Typography>
              <Button
                sx={{
                  backgroundColor: colorCart,
                  "&:hover": {
                    backgroundColor: colorCartHover,
                  },
                }}
                variant="contained"
                size="large"
                onClick={() => navigate("/")}
              >
                Ir a comprar
              </Button>
            </ThemeProvider>
          </Box>
        </Grid>
      ) : (
        <Grid container>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" p={1}>
                Tu carrito
              </Typography>
              <Typography variant="body1">
                {" "}
                <Link to={"/"} style={{ color: "black" }}>
                  Seguir comprando
                </Link>{" "}
              </Typography>
              {cart.map((compra) => (
                <CartItem key={compra.id} compra={compra} />
              ))}
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "40px",
              }}
            >
              <Typography variant="h6" p={2}>
                Calculá el costo de envío
              </Typography>
              <FormControl sx={{ m: 1, width: 250 }} color="warning">
                <InputLabel>Provincia</InputLabel>
                <Select
                  onChange={(choice) => delivery(Number(choice.target.value))}
                  style={{ width: "100%" }}
                  label="Provincia"
                >
                  <MenuItem value={2000}>Buenos Aires $2000</MenuItem>
                  <MenuItem value={3000}>Cordoba $3000 </MenuItem>
                  <MenuItem value={5000}>Chubut $5000</MenuItem>
                  <MenuItem value={4000}>Resto de Argentina $4000</MenuItem>
                </Select>
              </FormControl>
              <Typography sx={{ margin: "20px", padding: "10px" }} variant="h6">
                Total a pagar: ${Math.round(cartTotal() * 1000) + send}
              </Typography>
              <Button
                style={{ margin: "10px" }}
                onClick={() => navigate("/checkout")}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: colorCart,
                  "&:hover": {
                    backgroundColor: colorCartHover,
                  },
                }}
              >
                Finalizar Compra
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Cart;
