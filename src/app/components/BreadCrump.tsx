// components/BreadCrump.tsx
"use client"; // Asegúrate de que este componente se ejecute en el cliente
import React from "react";
import { useRouterContext } from "../context/RouterContext"; // Asegúrate de que la ruta sea correcta
import { Breadcrumbs, Link as MUILink, Typography } from "@mui/material";

const BreadCrump: React.FC = () => {
  const { path } = useRouterContext(); // Obtén la ruta actual del contexto

  const getBreadcrumbs = () => {
    const pathSegments = path.split('/').filter((segment) => segment); // Filtrar segmentos vacíos
    return pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`; // Genera la URL correspondiente
      return (
        <MUILink key={index} href={href} onClick={(e) => { e.preventDefault(); router.push(href); }}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitaliza el primer carácter */}
        </MUILink>
      );
    });
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {getBreadcrumbs().length > 0 ? (
        getBreadcrumbs()
      ) : (
        <Typography color="textPrimary">Inicio</Typography>
      )}
    </Breadcrumbs>
  );
};

export default BreadCrump;
