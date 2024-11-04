// context/RouterContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Crea el contexto
const RouterContext = createContext<
  { path: string; setPath: (path: string) => void } | undefined
>(undefined);

// Proveedor de contexto que recibe la ruta inicial
export const RouterProvider: React.FC<{
  children: React.ReactNode;
  initialPath: string;
}> = ({ children, initialPath }) => {
  const [path, setPath] = useState(initialPath); // Inicializa la ruta con el valor recibido

  useEffect(() => {
    // No es necesario manejar cambios de ruta aquí, a menos que estés gestionando manualmente
  }, []);

  return (
    <RouterContext.Provider value={{ path, setPath }}>
      {children}
    </RouterContext.Provider>
  );
};

// Hook para usar el contexto
export const useRouterContext = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouterContext must be used within a RouterProvider");
  }
  return context;
};
