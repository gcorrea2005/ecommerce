"use client";
import React from "react";
import Link from "next/link";
import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";

const Inicio: React.FC = () => {
  return (
    <main style={{ flexGrow: 1, padding: "2rem" }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          Bienvenido a Aseo Total
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          En Aseo Total, estamos comprometidos a ofrecerte los mejores productos
          de aseo para que mantengas tu hogar limpio y fresco. Explora nuestra
          variedad de productos que satisfacen todas tus necesidades de limpieza.
        </Typography>

        {/* Sección de publicidad mejorada */}
        <Card variant="outlined" style={{ marginTop: "1rem", padding: "1rem" }}>
          <CardContent>
            <Typography variant="h5" color="primary" gutterBottom>
              ¡Descubre nuestros productos de aseo!
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Te ofrecemos una amplia gama de productos de limpieza diseñados para
              satisfacer todas tus necesidades, tanto en el hogar como en la
              oficina.
            </Typography>

            <Grid container spacing={2} style={{ marginTop: "1rem" }}>
              {[
                {
                  title: "🧴 Detergentes Ecológicos",
                  description: "Potentes y amigables con el medio ambiente, perfectos para cualquier tipo de lavado.",
                  link: "/productos/cat01",
                },
                {
                  title: "🧽 Desinfectantes",
                  description: "Eficaces contra gérmenes y bacterias, ideales para mantener tu hogar seguro.",
                  link: "/productos/cat02",
                },
                {
                  title: "🛁 Productos de Cuidado Personal",
                  description: "Jabones y champús de alta calidad que cuidan tu piel y cabello.",
                  link: "/productos/cat03",
                },
                {
                  title: "🏠 Limpiadores Multiusos",
                  description: "Perfectos para cualquier superficie, te ahorran tiempo y esfuerzo.",
                  link: "/productos/cat04",
                },
              ].map((product, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" color="primary">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Link href={product.link} passHref>
                        <Button variant="contained" color="primary" style={{ marginTop: "1rem" }}>
                          Ver Productos...
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography variant="body2" color="textSecondary" paragraph style={{ marginTop: "1rem" }}>
              Todos nuestros productos están formulados con ingredientes de alta
              calidad para asegurar resultados óptimos. Además, nos comprometemos
              con prácticas sostenibles, por lo que puedes cuidar de tu hogar y del
              planeta al mismo tiempo.
            </Typography>
            <Typography variant="h6" color="primary">
              ¡No te pierdas nuestras ofertas especiales! Visítanos en nuestra
              tienda y disfruta de descuentos exclusivos durante este mes.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default Inicio;
