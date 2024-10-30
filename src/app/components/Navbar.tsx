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
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import favicon from "@/app/assets/favicon.ico";
import { useState } from "react";

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Image src={favicon} alt="Favicon" width={32} height={32} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Aseo Total
          </Typography>
        </Link>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
          <Button
            color="inherit"
            onClick={handleMenuClick}
          >
            Productos
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} href="/pages/productos/cat01" onClick={handleMenuClose}>
              Detergentes Ecológicos
            </MenuItem>
            <MenuItem component={Link} href="/pages/productos/cat02" onClick={handleMenuClose}>
              Desinfectantes
            </MenuItem>
            <MenuItem component={Link} href="/pages/productos/cat03" onClick={handleMenuClose}>
              Cuidado Personal
            </MenuItem>
            <MenuItem component={Link} href="/pages/productos/cat04" onClick={handleMenuClose}>
              Limpiadores Multiusos
            </MenuItem>
          </Menu>
          <Button
            color="inherit"
            component={Link}
            href="/pages/carrito"
          >
            Carrito
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
