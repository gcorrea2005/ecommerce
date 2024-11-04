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
  useMediaQuery,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  HomeRepairService as GeneralCleaningIcon,
  Bathroom as PersonalCleaningIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  Search as SearchIcon,
  Category as CategoryIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import favicon from "@/app/assets/logo.png";

interface NavbarProps {
  toggleDrawer: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [anchorElHamburger, setAnchorElHamburger] =
    useState<null | HTMLElement>(null);
  const [generalCleaningMenuAnchorEl, setGeneralCleaningMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const [personalCleaningMenuAnchorEl, setPersonalCleaningMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const [disposablesMenuAnchorEl, setDisposablesMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDbEnabled, setIsDbEnabled] = useState(false); // Estado para el toggle

  const handleHamburgerMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElHamburger(event.currentTarget);
  };

  const handleGeneralCleaningMenuClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setGeneralCleaningMenuAnchorEl(event.currentTarget);
  };

  const handlePersonalCleaningMenuClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setPersonalCleaningMenuAnchorEl(event.currentTarget);
  };

  const handleDisposablesMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setDisposablesMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElHamburger(null);
    setGeneralCleaningMenuAnchorEl(null);
    setPersonalCleaningMenuAnchorEl(null);
    setDisposablesMenuAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Buscar:", searchQuery);
  };

  // Manejo del cambio de estado del toggle
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsDbEnabled(isChecked);
    console.log("DB CRUD activado:", isChecked);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Box display="flex" alignItems="center" sx={{ mr: 2 }}>
            <Image src={favicon} alt="Favicon" width={48} height={48} />
            {!isSmallScreen && (
              <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                LimTech SAS
              </Typography>
            )}
          </Box>
        </Link>

        {/* Campo de búsqueda */}
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
              bgcolor: "white",
              borderRadius: "4px",
              "& input": { padding: "8px" },
            }}
          />
          <IconButton type="submit" color="inherit">
            <SearchIcon />
          </IconButton>
        </form>

        {/* Menú Hamburguesa */}
        {isSmallScreen && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleHamburgerMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElHamburger}
              open={Boolean(anchorElHamburger)}
              onClose={handleMenuClose}
            >
              <MenuItem
                component={Link}
                href="/productos/aseo-general"
                onClick={handleMenuClose}
              >
                <GeneralCleaningIcon sx={{ mr: 1 }} /> Aseo General
              </MenuItem>
              <MenuItem
                component={Link}
                href="/productos/aseo-personal"
                onClick={handleMenuClose}
              >
                <PersonalCleaningIcon sx={{ mr: 1 }} /> Aseo Personal
              </MenuItem>
              <MenuItem
                component={Link}
                href="/productos/desechables"
                onClick={handleMenuClose}
              >
                <CategoryIcon sx={{ mr: 1 }} /> Desechables
              </MenuItem>
              <MenuItem
                component={Link}
                href="/account"
                onClick={handleMenuClose}
              >
                <AccountCircleIcon sx={{ mr: 1 }} /> Cuenta
              </MenuItem>
              <MenuItem
                component={Link}
                href="/carrito"
                onClick={handleMenuClose}
              >
                <ShoppingCartIcon sx={{ mr: 1 }} /> Carrito
              </MenuItem>
            </Menu>
          </>
        )}

        {/* Menú de Aseo General */}
        {!isSmallScreen && (
          <Link
            href="/productos/aseo-general"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit" onClick={handleGeneralCleaningMenuClick}>
              <GeneralCleaningIcon sx={{ mr: 1 }} /> Aseo General
            </Button>
          </Link>
        )}
        <Menu
          anchorEl={generalCleaningMenuAnchorEl}
          open={Boolean(generalCleaningMenuAnchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem
            component={Link}
            href="/productos/aseo-general/accesorios"
            onClick={handleMenuClose}
          >
            Accesorios de Limpieza
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/aseo-general/productos"
            onClick={handleMenuClose}
          >
            Productos de Limpieza
          </MenuItem>
        </Menu>

        {/* Menú de Aseo Personal */}
        {!isSmallScreen && (
          <Link
            href="/productos/aseo-personal"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit" onClick={handlePersonalCleaningMenuClick}>
              <PersonalCleaningIcon sx={{ mr: 1 }} /> Aseo Personal
            </Button>
          </Link>
        )}
        <Menu
          anchorEl={personalCleaningMenuAnchorEl}
          open={Boolean(personalCleaningMenuAnchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem
            component={Link}
            href="/productos/aseo-personal/accesorios"
            onClick={handleMenuClose}
          >
            Accesorios de Uso Personal
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/aseo-personal/dispensadores"
            onClick={handleMenuClose}
          >
            Dispensadores
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/aseo-personal/productos"
            onClick={handleMenuClose}
          >
            Productos de Aseo Personal
          </MenuItem>
        </Menu>

        {/* Menú de Desechables */}
        {!isSmallScreen && (
          <Link
            href="/productos/desechables"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit" onClick={handleDisposablesMenuClick}>
              <CategoryIcon sx={{ mr: 1 }} /> Desechables
            </Button>
          </Link>
        )}
        <Menu
          anchorEl={disposablesMenuAnchorEl}
          open={Boolean(disposablesMenuAnchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem
            component={Link}
            href="/productos/desechables/empaques"
            onClick={handleMenuClose}
          >
            Desechables para Empacar
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/desechables/envolver"
            onClick={handleMenuClose}
          >
            Desechables para Envolver
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/desechables/mesa"
            onClick={handleMenuClose}
          >
            Desechables para la Mesa
          </MenuItem>
        </Menu>

        {/* Carrito y Cuenta */}
        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          <IconButton color="inherit" component={Link} href="/account">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} href="/carrito">
            <ShoppingCartIcon />
          </IconButton>

          {/* Toggle Switch */}
          <FormControlLabel
            control={
              <Switch
                checked={isDbEnabled}
                onChange={handleToggleChange}
                color="primary"
                sx={{
                  "& .MuiSwitch-thumb": {
                    width: 20,
                    height: 20,
                    backgroundColor: isDbEnabled ? "#4caf50" : "#f44336",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: isDbEnabled ? "#c8e6c9" : "#ffcdd2",
                  },
                }}
              />
            }
            label={isDbEnabled ? "ON" : "OFF"}
            sx={{
              ml: 2,
              "& .MuiFormControlLabel-label": {
                color: "inherit",
                fontSize: "1rem",
                fontWeight: "normal",
              },
            }}
          />

          {/* Enlace a /db-crud si el toggle está activado */}
          {isDbEnabled && (
            <Link href="/db-crud" style={{ textDecoration: "none" }}>
              <Button
                variant="contained" // Botón con fondo
                color="primary" // Color primario del tema
                sx={{
                  ml: 2, // Margen a la izquierda para separación
                  "&:hover": {
                    backgroundColor: "#1976d2", // Color al pasar el mouse
                  },
                }}
              >
                Panel de Control
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
