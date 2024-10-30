"use client";
import { Box, Typography, Divider, Link as MUILink } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: "primary.main", color: "white", textAlign: "center" }}>
      <Typography variant="body2">&copy; 2024 Aseo Total. Todos los derechos reservados.</Typography>
      <Divider sx={{ my: 1 }} />
      <Box display="flex" justifyContent="center" gap={2}>
        <MUILink href="https://www.facebook.com" target="_blank" color="inherit"><Facebook /></MUILink>
        <MUILink href="https://www.twitter.com" target="_blank" color="inherit"><Twitter /></MUILink>
        <MUILink href="https://www.instagram.com" target="_blank" color="inherit"><Instagram /></MUILink>
      </Box>
    </Box>
  );
};

export default Footer;
