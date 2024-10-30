"use client";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from       "@/app/components/Navbar";
import Sidebar from      "@/app/components/Sidebar";
import MainContent from "@/app/components/MainContent";
import Footer from "@/app/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar toggleDrawer={toggleDrawer} />
          <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
          <MainContent>{children}</MainContent>
          <Footer />
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;
