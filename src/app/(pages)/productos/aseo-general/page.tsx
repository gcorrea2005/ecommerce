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
import Link from "next/link"; // Importa Link de Next.js

const AseoGeneralPage: React.FC = () => {
  const theme = useTheme(); // Obtén el tema actual

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
      >
        Aseo General: Productos que Cuidan de Ti
      </Typography>
      <Typography
        variant="h6"
        align="center"
        paragraph
        sx={{ color: theme.palette.text.secondary }}
      >
        Descubre nuestra selección de productos biodegradables, eficaces y
        seguros para el medio ambiente.
      </Typography>

      <Paper
        elevation={3}
        sx={{
          padding: 4,
          mb: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          ¿Por Qué Elegir Productos Biodegradables?
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
          Los productos biodegradables son aquellos que se descomponen de forma
          natural en el medio ambiente, reduciendo la contaminación y el impacto
          en nuestros ecosistemas. Elegir productos biodegradables no solo es
          beneficioso para la Tierra, sino también para tu salud y la de tu
          familia. Estos productos son más seguros, ya que evitan el uso de
          químicos dañinos, y suelen ser igual de eficaces que sus contrapartes
          no biodegradables.
        </Typography>
      </Paper>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/accesorios-limpieza.png" // Ruta de la imagen
              alt="Accesorios de Limpieza"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Accesorios de Limpieza
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Nuestros accesorios de limpieza están diseñados para maximizar
                la eficiencia. Desde escobas de bambú hasta mopas de microfibra,
                cada accesorio ayuda a mantener un hogar limpio de manera
                ecológica. Son reutilizables, duraderos y fáciles de usar.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $5.99
              </Typography>
              <Link href="/productos/aseo-general/accesorios" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver accesorios
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/productos-limpieza.png" // Ruta de la imagen
              alt="Productos de Limpieza Biodegradables"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Productos de Limpieza
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Ofrecemos una gama completa de productos de limpieza
                biodegradables, incluyendo detergentes, limpiadores multiusos y
                jabones. Cada producto está formulado con ingredientes naturales
                que son seguros para el medio ambiente y efectivos contra la
                suciedad y las manchas.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $7.49
              </Typography>
              <Link href="/productos/aseo-general/productos" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver productos
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
        ¡Únete al cambio y elige productos que cuidan de ti y del planeta!
      </Typography>
    </Box>
  );
};

export default AseoGeneralPage;
