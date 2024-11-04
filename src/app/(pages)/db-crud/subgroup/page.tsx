"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";


interface Subgroup {
  id: string;
  name: string;
  description: string;
}

export default function SubgroupTablePage() {
  const [subgroups, setSubgroups] = useState<Subgroup[]>([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editingSubgroupId, setEditingSubgroupId] = useState<string | null>(null);


  useEffect(() => {
    fetchSubgroups();
  }, []);

  const fetchSubgroups = async () => {
    try {
      const response = await fetch("/api/subgroup");
      if (!response.ok) throw new Error("Error al obtener los subgrupos");

      const data = await response.json();
      const subgroupsArray = Array.isArray(data.subgroup) ? data.subgroup : [];
      setSubgroups(subgroupsArray);
    } catch (error) {
      console.error("Error al obtener los subgrupos:", error);
      setSubgroups([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSubgroupId) {
      await updateSubgroup(editingSubgroupId);
    } else {
      await createSubgroup();
    }
    fetchSubgroups();
    setForm({ name: "", description: "" });
    setEditingSubgroupId(null);
  };

  const createSubgroup = async () => {
    try {
      const body = {
        name: form.name,
        description: form.description,
      };

      await fetch("/api/subgroup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error("Error al crear el subgrupo:", error);
    }
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
    } catch (error) {
      console.error("Error al actualizar el subgrupo:", error);
    }
  };

  const handleEdit = (subgroup: Subgroup) => {
    setForm({
      name: subgroup.name,
      description: subgroup.description,
    });
    setEditingSubgroupId(subgroup.id);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/subgroup/${id}`, {
        method: "DELETE",
      });
      fetchSubgroups();
    } catch (error) {
      console.error("Error al eliminar el subgrupo:", error);
    }
  };

  const navigateToDetails = (id: string) => {
    router.push(`/subgroup/${id}`); // Redirige a la página de detalles
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestión de Subgrupos
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
          {editingSubgroupId ? "Actualizar" : "Crear"}
        </Button>
      </form>

      <Typography variant="h6" gutterBottom>
        Lista de Subgrupos
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subgroups.length > 0 ? (
              subgroups.map((subgroup) => (
                <TableRow key={subgroup.id}>
                  <TableCell>{subgroup.id}</TableCell>
                  <TableCell>{subgroup.name}</TableCell>
                  <TableCell>{subgroup.description}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(subgroup)} variant="outlined" color="primary">
                      Editar
                    </Button>
                    <Button onClick={() => handleDelete(subgroup.id)} variant="outlined" color="secondary">
                      Eliminar
                    </Button>
                    <Button onClick={() => navigateToDetails(subgroup.id)} variant="outlined" color="default">
                      Detalles
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No hay subgrupos disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
