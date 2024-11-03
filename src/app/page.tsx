import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import Link from "next/link"; // Importa Link de Next.js

const PromotionsPage: React.FC = () => {
  return (
    <Box>
      {/* Sección de promociones */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          ¡Bienvenidos a LimTech SAS!
        </Typography>
        <Typography variant="h6" paragraph>
          Aprovecha nuestras ofertas especiales en productos de limpieza. En LimTech, estamos comprometidos a ofrecerte lo mejor en calidad y precio. 
          Todos nuestros productos están diseñados para hacer tu vida más fácil y eficiente.
        </Typography>
      </Box>

      {/* Tarjetas de productos */}
      <Grid container spacing={4} sx={{ padding: 2 }}>
        {/* Tarjeta de Aseo General */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              image="/images/aseo-general.png" // Reemplaza con la ruta de la imagen real
              alt="Productos de Aseo General"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Productos de Aseo General
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Nuestros productos de aseo general son perfectos para mantener tu hogar limpio y fresco. Desde detergentes potentes que eliminan manchas difíciles hasta limpiadores multiusos que garantizan superficies brillantes, tenemos todo lo que necesitas para una limpieza efectiva y rápida.
                Además, todos nuestros productos son respetuosos con el medio ambiente, asegurando que puedas limpiar sin comprometer la salud de tu familia ni del planeta.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/productos/aseo-general" // Enlace a la página de productos de aseo general
                sx={{ mt: 2 }}
              >
                Ver Productos
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta de Aseo Personal */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              image="/images/aseo-personal.png" // Reemplaza con la ruta de la imagen real
              alt="Productos de Aseo Personal"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Productos de Aseo Personal
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Cuida de ti mismo con nuestra amplia gama de productos de aseo personal. Desde jabones suaves que nutren la piel hasta champús revitalizantes que le dan vida a tu cabello, ofrecemos artículos esenciales que se adaptan a tu rutina diaria.
                Nuestros productos están formulados con ingredientes naturales, garantizando que tu cuidado personal sea tanto efectivo como seguro. Ya sea que necesites productos para el rostro, el cuerpo o el cabello, en LimTech tenemos lo que necesitas para lucir y sentirte bien.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/productos/aseo-personal" // Enlace a la página de productos de aseo personal
                sx={{ mt: 2 }}
              >
                Ver Productos
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta de Desechables */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              image="/images/desechables.png" // Reemplaza con la ruta de la imagen real
              alt="Productos Desechables"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Desechables
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Explora nuestra selección de productos desechables, ideales para eventos, fiestas y uso diario. Ofrecemos una variedad de platos, vasos, cubiertos y otros artículos desechables que no solo son prácticos, sino también elegantes.
                Perfectos para cualquier ocasión, nuestros productos desechables están diseñados para ser funcionales y estéticamente agradables, permitiéndote disfrutar de tus eventos sin la preocupación de la limpieza posterior.
                Además, todos nuestros desechables son reciclables, contribuyendo a un mundo más sostenible.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/productos/desechables" // Enlace a la página de productos desechables
                sx={{ mt: 2 }}
              >
                Ver Productos
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PromotionsPage;
