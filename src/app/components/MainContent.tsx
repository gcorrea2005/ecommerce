"use client";
import { Container } from "@mui/material";
import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
      {children}
    </Container>
  );
};

export default MainContent;
