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

const AseoPersonalPage: React.FC = () => {
  const theme = useTheme(); // Obtén el tema actual

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
      >
        Aseo Personal: Cuida tu Bienestar
      </Typography>
      <Typography
        variant="h6"
        align="center"
        paragraph
        sx={{ color: theme.palette.text.secondary }}
      >
        Explora nuestra gama de productos de aseo personal, desde accesorios 
        hasta soluciones biodegradables que cuidan tu salud y el medio ambiente.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {/* Accesorios de Aseo Personal */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/accesorios-aseo-personal.png" // Ruta de la imagen
              alt="Accesorios de Aseo Personal"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Accesorios de Aseo Personal
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Descubre nuestros peines de madera, esponjas vegetales, y 
                cepillos de bambú, diseñados para una rutina de aseo respetuosa 
                con el medio ambiente. Cada accesorio es duradero, biodegradable 
                y perfecto para el cuidado diario.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $4.99
              </Typography>
              <Link href="/productos/aseo-personal/accesorios" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver Accesorios
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Dispensadores */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/dispensadores.png" // Ruta de la imagen
              alt="Dispensadores Ecológicos"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Dispensadores Ecológicos
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Los dispensadores ecológicos para jabón y gel están fabricados 
                con materiales reciclables. Reducen el uso de plásticos y te 
                ayudan a controlar la cantidad de producto que utilizas, 
                promoviendo un consumo responsable.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $10.99
              </Typography>
              <Link href="/productos/aseo-personal/dispensadores" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver Dispensadores
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Productos de Aseo Personal */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/productos-aseo-personal.png" // Ruta de la imagen
              alt="Productos de Aseo Personal"
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Productos de Aseo Personal
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Nuestra selección incluye jabones, shampoo y cremas hechos con 
                ingredientes naturales. Cada producto es biodegradable, 
                eficaz para la limpieza diaria y seguro para el medio ambiente.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Precio:</strong> Desde $6.99
              </Typography>
              <Link href="/productos/aseo-personal/productos" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver Productos
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
        ¡Cuida de ti mismo y del planeta con nuestra selección de productos de aseo personal!
      </Typography>
    </Box>
  );
};

export default AseoPersonalPage;
