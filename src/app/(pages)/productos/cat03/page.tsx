"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";

const inicio = 10;

const products = Array.from({ length: 5 }, (_, index) => ({
  id: inicio + index + 1,
  name: `Producto ${inicio + index + 1}`,
  price: (Math.random() * 20 + 5).toFixed(2), // Precios entre 5 y 25
  stock: Math.floor(Math.random() * 100) + 1, // Stock entre 1 y 100
  image: `/images/product${((inicio + index) % 10) + 1}.webp`, // Asumiendo que tienes 10 imágenes
}));

const Inicio: React.FC = () => {
  const router = useRouter();

  return (
    <section style={{ padding: "2rem" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => router.push("/productos")}
        style={{ marginBottom: "1rem" }}
      >
        Volver a Productos
      </Button>
      
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Cuidado Personal
      </Typography>
      
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card variant="outlined">
              <CardMedia
                component="div"
                style={{ height: 200, position: "relative" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Stock: {product.stock}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "1rem" }}
                >
                  Añadir al carrito
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Inicio;
