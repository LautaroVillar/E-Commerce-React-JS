import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ItemCount from "./ItemCount";
import { deepOrange } from "@mui/material/colors";

const colorCart = deepOrange[600];
const colorCartHover = deepOrange[400];

let theme = createTheme();
theme = responsiveFontSizes(theme);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
 
};

const ItemDetail = ({ productDetail }) => {
  const { name, description, price, stock, img, id } = productDetail;
  const [count, setCount] = useState(1);
  const { cart, addItem } = useCart();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const onAdd = () => {
    let purchase = {
      id,
      name,
      price,
      stock,
      img,
      quantity: count,
    };
    addItem(purchase);
  };

  const stockLimit = () => {
    const found = cart.find((prod) => prod.id === id);
    if (found) {
      return found.stock - found.quantity;
    } else {
      return stock;
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: "auto" }}>
        <Grid container>
          <Grid item container lg={6} md={6} direction="column">
            <CardMedia
              sx={{ maxWidth: "450px" }}
              component="img"
              image={img}
              alt={name}
            />
          </Grid>
          <Grid item container md={6} lg={6} direction="column">
            <Grid item lg={10}>
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography gutterBottom variant="h4">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                  <Typography variant="body1" marginTop={1}>
                    Unidades disponibles: {stockLimit()}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h4"
                    fontWeight="bold"
                    marginTop={1}
                  >
                    $ {price}
                  </Typography>
                </ThemeProvider>
              </CardContent>
            </Grid>
            <Grid item lg={2}>
              <CardActions>
                <div style={{ width: "150px", padding: "10px" }}>
                  <ItemCount
                    stock={stock}
                    initial={1}
                    count={count}
                    setCount={setCount}
                    stockLimit={stockLimit()}
                  />
                </div>

                {!(stockLimit() === 0) ? (
                  <Button
                    size="normal"
                    sx={{
                      backgroundColor: colorCart,
                      "&:hover": {
                        backgroundColor: colorCartHover,
                      },
                    }}
                    variant="contained"
                    fullWidth
                    onClick={onAdd}
                    onClickCapture={handleOpen}
                  >
                    Agregar al carrito
                  </Button>
                ) : (
                  <Button
                    disabled
                    size="normal"
                    sx={{
                      backgroundColor: colorCart,
                      "&:hover": {
                        backgroundColor: colorCartHover,
                      },
                    }}
                    variant="contained"
                    fullWidth
                  >
                    {" "}
                    Agregar al carrito
                  </Button>
                )}

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Grid
                      container
                      gap={2}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Typography id="modal-modal-title" variant="h6">
                          <CheckCircleOutlineIcon fontSize="large" /> Tu
                          producto ha sido agregado al carrito
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          sx={{ margin: "10px" }}
                          variant="contained"
                          color="inherit"
                          onClick={() => navigate("/")}
                        >
                          Ver mas productos
                        </Button>
                        <Button
                          sx={{
                            margin: "10px",
                            backgroundColor: colorCart,
                            "&:hover": {
                              backgroundColor: colorCartHover,
                            },
                          }}
                          variant="contained"
                          onClick={() => navigate("/cart")}
                        >
                          Ir al carrito
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Modal>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default ItemDetail;
