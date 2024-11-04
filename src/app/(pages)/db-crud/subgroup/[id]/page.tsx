"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export default function SubgroupDetailPage() {
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(() => {
    if (id) {
      fetchSubgroup(id as string);
    }
  }, [id]);

  const fetchSubgroup = async (id: string) => {
    try {
      const response = await fetch(`/api/subgroup/${id}`);
      if (!response.ok) throw new Error("Error al obtener el subgrupo");

      const data = await response.json();
      setForm({
        name: data.name,
        description: data.description,
      });
    } catch (error) {
      console.error("Error al obtener el subgrupo:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSubgroup(id as string);
  };

  const updateSubgroup = async (id: string) => {
    try {
      const body = {
        name: form.name,
        description: form.description,
      };

      await fetch(`/api/subgroup/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      router.push('/subgroup'); // Redirigir a la lista de subgrupos después de la actualización
    } catch (error) {
      console.error("Error al actualizar el subgrupo:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Editar Subgrupo
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Subgrupo"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descripción"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Actualizar
        </Button>
      </form>
    </Container>
  );
}
