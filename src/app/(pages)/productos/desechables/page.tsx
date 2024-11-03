"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const ProductosDesechablesPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
      >
        Desechables: Opciones Responsables
      </Typography>
      <Typography
        variant="h6"
        align="center"
        paragraph
        sx={{ color: theme.palette.text.secondary }}
      >
        Descubre nuestra selección de productos desechables de un solo uso, diseñados para minimizar el impacto ambiental sin comprometer calidad o conveniencia.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {/* Desechables para Empacar */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/desechables-empacar.png" // Ruta de la imagen
              alt="Desechables para Empacar"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Desechables para Empacar
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Encuentra una gama de envases y bolsas desechables ideales para empacar alimentos. Fabricados con materiales biodegradables, son seguros para el ambiente y perfectos para llevar tus comidas a donde quieras.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $2.99
              </Typography>
              <Link href="/productos/desechables/empaques" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Desechables para Envolver */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/desechables-envolver.png" // Ruta de la imagen
              alt="Desechables para Envolver"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Desechables para Envolver
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Protege tus alimentos frescos y mantén su calidad con nuestros envoltorios desechables biodegradables. Ideales para envolver sándwiches, frutas y otros alimentos, estos productos son convenientes y responsables con el medio ambiente.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $3.49
              </Typography>
              <Link href="/productos/desechables/envolver" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Desechables para la Mesa */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/desechables-mesa.png" // Ruta de la imagen
              alt="Desechables para la Mesa"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Desechables para la Mesa
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Dale un toque ecoamigable a tu mesa con nuestras servilletas y manteles desechables biodegradables, ideales para reuniones y eventos sin dañar el planeta.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $3.49
              </Typography>
              <Link href="/productos/desechables/mesa" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography
        variant="h6"
        align="center"
        paragraph
        sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
      >
        ¡Elige desechables que no dejan huella en el planeta!
      </Typography>
    </Box>
  );
};

export default ProductosDesechablesPage;
