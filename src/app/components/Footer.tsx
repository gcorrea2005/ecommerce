"use client";
import { Box, Typography, Divider, Link as MUILink, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: "primary.main", color: "white", textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">
            LimTech SAS &copy; 2024. Todos los derechos reservados.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">
            Calle 4 A # 21-79, Local 2, Barrio El Recreo, La Mesa - Cundinamarca
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Box display="flex" justifyContent="center" gap={2}>
        <MUILink href="https://www.facebook.com" target="_blank" color="inherit">
          <Facebook />
        </MUILink>
        <MUILink href="https://www.twitter.com" target="_blank" color="inherit">
          <Twitter />
        </MUILink>
        <MUILink href="https://www.instagram.com" target="_blank" color="inherit">
          <Instagram />
        </MUILink>
      </Box>
    </Box>
  );
};

export default Footer;
