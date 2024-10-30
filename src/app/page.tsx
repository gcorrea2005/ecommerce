"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { Box, Typography, Grid, Button, Paper, Container } from "@mui/material";

const Inicio: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Box
        position="relative"
        p={4}
        borderRadius={2}
        boxShadow={3}
        sx={{
          bgcolor: "linear-gradient(to right, #A8D5BA, #ADE1C3)",
          overflow: "hidden",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{
            opacity: 0.2,
            zIndex: 1,
          }}
        >
          <Image
            src="/background.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box position="relative" zIndex={2} textAlign="center">
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            color="text.primary"
          >
            ¡Bienvenido a Aseo Total!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 720, mx: "auto", mb: 4 }}
          >
            Descubre nuestra amplia gama de productos de aseo ecológicos y
            efectivos. Desde detergentes hasta limpiadores multiusos, tenemos
            todo lo que necesitas para mantener tu hogar limpio y fresco.
          </Typography>

          <Typography
            variant="h5"
            fontWeight="medium"
            color="text.primary"
            gutterBottom
          >
            🌟 ¡Ofertas especiales este mes! 🌟
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
          >
            ¿Por qué elegir productos ecológicos?
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            {[
              {
                title: "Seguridad",
                description:
                  "Libres de químicos dañinos, ideales para tu familia y mascotas.",
              },
              {
                title: "Efectividad",
                description:
                  "Limpieza profunda sin comprometer el medio ambiente.",
              },
              {
                title: "Sostenibilidad",
                description: "Productos biodegradables en envases reciclables.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{ p: 3, borderRadius: 2, textAlign: "center" }}
                >
                  <FaCheckCircle
                    size={32}
                    style={{ color: "#4CAF50", marginBottom: 8 }}
                  />
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box mt={4}>
            <Button
              component={Link}
              href="/pages/productos"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontWeight: "bold",
                boxShadow: 3,
                transition: "transform 0.3s",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              Explora nuestros productos
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Inicio;
