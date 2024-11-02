"use client";
import React from "react";
import { Container } from "@mui/material";

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
