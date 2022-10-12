import * as React from "react";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      columns={4}
      sx={{
        justifyContent: "space-around",
        backgroundColor: "#212121",
        color: "#fafafa",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box p={1.5} m={1}>
          <Typography
            variant="body1"
            onClick={() => navigate(`/`)}
            style={{ cursor: "pointer" }}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            onClick={() => navigate(`categoria/moda`)}
            style={{ cursor: "pointer" }}
          >
            Moda
          </Typography>
          <Typography
            variant="body1"
            onClick={() => navigate(`categoria/deportivas`)}
            style={{ cursor: "pointer" }}
          >
            Deportivas
          </Typography>
          <Typography
            variant="body1"
            onClick={() => navigate(`categoria/aventura`)}
            style={{ cursor: "pointer" }}
          >
            Aventura
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ justifyContent: "center", display: "flex" }}
            color="#fafafa"
          >
            Redes sociales
          </Typography>
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <Link href="https://www.facebook.com/" color="inherit">
              <FacebookIcon sx={{ fontSize: "30px" }} />
            </Link>
            <Link href="/https://www.whatsapp.com/" color="inherit">
              <WhatsAppIcon id="whatsapp" sx={{ fontSize: "30px" }} />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <TwitterIcon id="twitter" sx={{ fontSize: "30px" }} />
            </Link>
          </div>
        </Box>

        <Box>
          <Typography marginTop={2} variant="h5" color="#f4511e">
            {" "}
            ZOOMDEPORTES
          </Typography>
        </Box>
      </ThemeProvider>
    </Grid>
  );
}
