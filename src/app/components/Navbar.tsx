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
} from "@mui/material";
import {
  Menu as MenuIcon,
  HomeRepairService as GeneralCleaningIcon,
  Bathroom as PersonalCleaningIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  Search as SearchIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import favicon from "@/app/assets/logo.png";
import { useState } from "react";

interface NavbarProps {
  toggleDrawer: () => void;
}

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

        {/* Menú de Aseo General */}
        {!isSmallScreen && (
          <Link href="/productos/aseo-general" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <Link href="/productos/aseo-personal" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <Link href="/productos/desechables" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <IconButton color="inherit" component={Link} href="/carrito">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} href="/account">
            <AccountCircleIcon />
          </IconButton>

          {/* Botón de menú para pantallas pequeñas */}
          {isSmallScreen && (
            <IconButton color="inherit" onClick={handleHamburgerMenuClick}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Menú hamburguesa */}
        <Menu
          anchorEl={anchorElHamburger}
          open={Boolean(anchorElHamburger)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          {/* Actualización del menú hamburguesa */}
          <MenuItem
            component={Link}
            href="/productos/aseo-general/productos"
            onClick={handleMenuClose}
          >
            Productos de Limpieza
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/aseo-general/accesorios"
            onClick={handleMenuClose}
          >
            Accesorios de Limpieza
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/aseo-personal/productos"
            onClick={handleMenuClose}
          >
            Productos de Uso Personal
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/aseo-personal/accesorios"
            onClick={handleMenuClose}
          >
            Accesorios Aseo Personal
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/aseo-personal/dispensadores"
            onClick={handleMenuClose}
          >
            Dispensadores Aseo Personal
          </MenuItem>
          <MenuItem
            component={Link}
            href="/productos/desechables/mesa"
            onClick={handleMenuClose}
          >
            Desechables para la Mesa
          </MenuItem>
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
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
