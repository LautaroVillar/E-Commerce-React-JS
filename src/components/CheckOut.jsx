import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CircularProgress from "@mui/material/CircularProgress";

import { useForm } from "react-hook-form";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function CheckOut() {
  const { cart, cartTotal, clear, send } = useCart();
  const [buy, setBuy] = useState(false);
  const [idBuy, setIdBuy] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    finishPurchase(data);
    setLoading(true);
  };

  function finishPurchase(data) {
    let order = {
      buyer: data,
      carrito: cart,
      envio: send,
      total: Number(cartTotal() * 1000 + send),
      date: serverTimestamp(),
    };
    const db = getFirestore();
    const miCollection = collection(db, "orders");
    addDoc(miCollection, order)
      .then(({ id }) => {
        setIdBuy(id);
        clear();
        setBuy(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10vh 0",
          textAlign: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={3}>
          <Grid sx={{ padding: "5vh 15vh" }}>
            {!buy ? (
              <>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    paddingBottom: "4vh",
                  }}
                >
                  Checkout
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <AccountCircle sx={{ color: "#212121", mr: 1, my: 0.5 }} />
                    <TextField
                      color="warning"
                      autoComplete="given-name"
                      id="input-with-sx"
                      label="Nombre"
                      variant="standard"
                      type="text"
                      error={errors.name}
                      helperText={
                        errors.name ? "Por favor ingresar un nombre válido" : ""
                      }
                      {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 40,
                        pattern: /^[a-zA-Z]+$/,
                      })}
                    />
                  </Box>
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <AccountCircle sx={{ color: "#212121", mr: 1, my: 0.5 }} />
                    <TextField
                      color="warning"
                      autoComplete="family-name"
                      id="input-with-sx"
                      label="Apellido"
                      variant="standard"
                      type="text"
                      error={errors.lastname}
                      helperText={
                        errors.lastname
                          ? "Por favor ingresar un apellido válido"
                          : ""
                      }
                      {...register("lastname", {
                        required: true,
                        minLength: 3,
                        maxLength: 40,
                        pattern: /^[a-zA-Z]+$/,
                      })}
                    />
                  </Box>
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneIcon sx={{ color: "#212121", mr: 1, my: 0.5 }} />
                    <TextField
                      color="warning"
                      id="input-with-sx"
                      label="Telefono"
                      autoComplete="phone"
                      variant="standard"
                      helperText={
                        errors.tel ? "Ingrese un teléfono válido" : ""
                      }
                      error={errors.tel}
                      {...register("tel", {
                        required: "Ingrese un telefono válido",
                        minLength: 6,
                        maxLength: 20,
                        pattern: /^(0|[0-9]\d*)(\.\d+)?$/,
                      })}
                    />
                  </Box>
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      paddingBottom: "10vh",
                    }}
                  >
                    <EmailIcon sx={{ color: "#212121", mr: 1, my: 0.5 }} />
                    <TextField
                      color="warning"
                      id="input-with-sx"
                      label="Email"
                      autoComplete="email"
                      variant="standard"
                      error={errors.email}
                      helperText={errors.email ? "Ingrese un email válido" : ""}
                      {...register("email", {
                        required: true,
                        maxLength: 50,
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Email no válido",
                        },
                      })}
                      type="text"
                    />
                  </Box>
                  {!loading ? (
                    <Button
                      disabled={cart.length === 0}
                      variant="contained"
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: "#f4511e",
                        "&:hover": {
                          backgroundColor: "#ff7043",
                        },
                      }}
                    >
                      Comprar
                    </Button>
                  ) : (
                    <Button
                      disabled
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#f4511e",
                        "&:hover": {
                          backgroundColor: "#ff7043",
                        },
                      }}
                    >
                      Aguarde un Momento...
                    </Button>
                  )}
                </form>
              </>
            ) : (
              <Grid sx={{ padding: "10vh 0" }}>
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h5"
                    noWrap
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      justifyItems: "center",
                      textAling: "center",
                      p: "10px",
                      m: "10px",
                      alignItems: "center",
                      alignContent: "center",
                      fontWeight: "bold",
                      letterSpacing: ".3rem",
                      color: "#f4511e",
                      borderRadius: "10px",

                      backgroundColor: "#212121",
                    }}
                  >
                    ZOOMDEPORTES
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: 30, fontWeight: "bold", padding: "5px" }}
                  >
                    {!error
                      ? "Su pedido  esta siendo procesado"
                      : "Hubo un error al procesar los datos"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 22, fontWeight: "bold", padding: "5px" }}
                  >
                    {!error
                      ? "Gracias por su compra"
                      : "Intente nuevamente en un instante"}
                  </Typography>
                  <br />
                  {!idBuy ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontSize: 18, fontWeight: "bold", padding: "5px" }}
                    >
                      {!error ? "Su id de compra es " + idBuy : ""}
                    </Typography>
                  )}
                </ThemeProvider>
                <br />
                <Button
                  variant="contained"
                  onClick={() => navigate("/")}
                  sx={{
                    backgroundColor: "#f4511e",
                    "&:hover": {
                      backgroundColor: "#ff7043",
                    },
                  }}
                >
                  Volver
                </Button>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
