"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        // Redirige al usuario a la página de productos
        router.push('/productos'); // Cambia a la ruta correcta
      } else {
        const data = await res.json();
        setError(data.message); // Muestra el mensaje de error del servidor
      }
    } catch (err) {
      console.log(err);
      setError('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Iniciar Sesión</Typography>

        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
