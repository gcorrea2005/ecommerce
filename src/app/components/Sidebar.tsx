"use client";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <List>
        {["Inicio", "Productos", "Carrito"].map((text, index) => (
          <ListItem key={index} onClick={toggleDrawer}>
            <Link href={`/${text.toLowerCase()}`} passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={text} />
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
