"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LocalLaundryService as EcoIcon, // Icono para Detergentes Ecológicos
  CleaningServices as CleaningIcon, // Limpiadores Multiusos
  Sanitizer as SanitizerIcon, // Desinfectantes
  Face as FaceIcon, // Cuidado Personal
  ShoppingCart as ShoppingCartIcon, // Carrito
  AccountCircle as AccountCircleIcon, // Mi Cuenta
  Search as SearchIcon, // Icono de Búsqueda
  Category as CategoryIcon, // Icono para Productos
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import favicon from "@/app/assets/logo.png"; // Asegúrate de que esta ruta sea correcta
import { useState } from "react";

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [productMenuAnchorEl, setProductMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProductMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setProductMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setProductMenuAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes manejar la búsqueda, por ejemplo, redirigir a una página de resultados de búsqueda
    console.log("Buscar:", searchQuery);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Image src={favicon} alt="Favicon" width={64} height={64} />
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Aseo Total
          </Typography>
        </Link>

        {/* Campo de búsqueda con botón estilizado */}
        <form
          onSubmit={handleSearchSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            marginLeft: "16px",
            marginRight: "16px",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              mr: 1,
              flexGrow: 1,
              bgcolor: "white", // Fondo blanco
              borderRadius: "4px",
              "& input": {
                padding: "8px", // Espaciado interno
              },
            }}
          />
          <IconButton type="submit" color="inherit">
            <SearchIcon />
          </IconButton>
        </form>

        {/* IconButton for mobile menu */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleMenuClick}
          sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown menu for mobile */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuItem
            component={Link}
            href="/productos/cat01"
            onClick={handleMenuClose}
          >
            <EcoIcon sx={{ mr: 1 }} /> Detergentes Ecológicos
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/cat02"
            onClick={handleMenuClose}
          >
            <SanitizerIcon sx={{ mr: 1 }} /> Desinfectantes
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/cat03"
            onClick={handleMenuClose}
          >
            <FaceIcon sx={{ mr: 1 }} /> Cuidado Personal
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/cat04"
            onClick={handleMenuClose}
          >
            <CleaningIcon sx={{ mr: 1 }} /> Limpiadores Multiusos
          </MenuItem>
          <MenuItem component={Link} href="/carrito" onClick={handleMenuClose}>
            <ShoppingCartIcon sx={{ mr: 1 }} /> Carrito
          </MenuItem>
          <MenuItem component={Link} href="/account" onClick={handleMenuClose}>
            <AccountCircleIcon sx={{ mr: 1 }} /> Mi Cuenta
          </MenuItem>
        </Menu>

        {/* Desktop menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
          <Button color="inherit" onClick={handleProductMenuClick}>
            <CategoryIcon sx={{ mr: 1 }} /> Productos
          </Button>

          {/* Dropdown menu for Products */}
          <Menu
            anchorEl={productMenuAnchorEl}
            open={Boolean(productMenuAnchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem
              component={Link}
              href="/productos/cat01"
              onClick={handleMenuClose}
            >
              <EcoIcon sx={{ mr: 1 }} /> Detergentes Ecológicos
            </MenuItem>
            <MenuItem
              component={Link}
              href="/productos/cat02"
              onClick={handleMenuClose}
            >
              <SanitizerIcon sx={{ mr: 1 }} /> Desinfectantes
            </MenuItem>
            <MenuItem
              component={Link}
              href="/productos/cat03"
              onClick={handleMenuClose}
            >
              <FaceIcon sx={{ mr: 1 }} /> Cuidado Personal
            </MenuItem>
            <MenuItem
              component={Link}
              href="/productos/cat04"
              onClick={handleMenuClose}
            >
              <CleaningIcon sx={{ mr: 1 }} /> Limpiadores Multiusos
            </MenuItem>
          </Menu>

          <Button color="inherit" component={Link} href="/carrito">
            <ShoppingCartIcon sx={{ mr: 1 }} /> Carrito
          </Button>
          <Button color="inherit" component={Link} href="/account">
            <AccountCircleIcon sx={{ mr: 1 }} /> Mi Cuenta
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
