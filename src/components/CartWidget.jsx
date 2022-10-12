import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -7,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartWidget() {
  const { cartQuantity, cart } = useCart();
  const navigate = useNavigate();
  return (
    <IconButton aria-label="cart">
      {!cart.length ? (
        <StyledBadge invisible>
          {" "}
          <ShoppingCartIcon
            onClick={() => navigate("/cart")}
            sx={{ cursor: "pointer", color: "#fafafa" }}
            fontSize="large"
          ></ShoppingCartIcon>{" "}
        </StyledBadge>
      ) : (
        <StyledBadge badgeContent={cartQuantity()} color="warning">
          <ShoppingCartIcon
            onClick={() => navigate("/cart")}
            sx={{ cursor: "pointer", color: "#fafafa" }}
            fontSize="large"
          ></ShoppingCartIcon>
        </StyledBadge>
      )}
    </IconButton>
  );
}
