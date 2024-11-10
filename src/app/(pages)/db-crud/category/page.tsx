"use client";
import useGlobalStore from "@/app/stores/useGlobalStore";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  ButtonGroup,
  CardHeader,
  CardContent,
  FormControl,
  Card,
  Box,
  Grid,
} from "@mui/material";
import { Category } from "@mui/icons-material";

interface subGroup {
  id: string;
  subgroup: string;
  description: string;
  image: string;
}

export default function GroupTablePage() {
  const [categories, setCategories] = useState<categories[]>([]);
  const [form, setForm] = useState({
    category: "",
    description: "",
  });
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(
    null
  );
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Estado para la previsualización de la imagen
  const {
    idgroup,
    idsubgroup,
    idcategory,
    nameGroup,
    nameSubGroup,
    nameCategory,
    selectedDB,
    setIdgroup,
    setIdsubgroup,
    setIdcategory,
    setNameGroup,
    setNameSubGroup,
    setNameCategory,
    setSelectedDB,
  } = useGlobalStore();

  useEffect(() => {
    fetchCategories();
  }, [selectedDB]); // Actualiza al cambiar la base de datos

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `/api/category?db=${selectedDB}&&subGroupId=${idsubgroup}`
      );
      if (!response.ok) throw new Error("Error al obtener las categorias");
      const data = await response.json();
      const categoriesArray = Array.isArray(data.categories) ? data.categories : [];
      setCategories(categoriesArray);
    } catch (error) {
      console.error("Error al obtener las categorias:", error);
      setCategories([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategoryId) {
      await updateSubGroup(editingCategoryId);
    } else {
      await createSubGroup();
    }
    fetchCategories();
    setForm({ category: "", description: ""});
    setEditingCategoryId(null);
  };

  const createSubGroup = async () => {
    try {
      const body = {
        db: selectedDB, // Base de datos seleccionada
        category: form.category, // Nombre del grupo
        description: form.description, // Descripción del grupo
      };

      // console.log("Datos a enviar:", JSON.stringify(body)); // Para depurar

      const response = await fetch(
        `/api/category?db=${selectedDB}&&subGroupId=${idsubgroup}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Indicar que se envía JSON
          },
          body: JSON.stringify(body), // Convertir el objeto a JSON
        }
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const result = await response.json(); // Si el servidor devuelve JSON
      console.log("Category creado:", result);
    } catch (error) {
      console.error("Error al crear el grupo:", error);
    }
  };

  const updateSubGroup = async (id: string) => {
    try {
      let body;
      let headers = {};

      if (typeof form.image === "string") {
        // Send as JSON if `image` is a filename (not a file)
        body = JSON.stringify({
          subgroup: form.subgroup,
          description: form.description,
          image: form.image,
        });
        headers = { "Content-Type": "application/json" };
      } else {
        // If `image` is a file, use FormData
        const formData = new FormData();
        formData.append("subgroup", form.subgroup);
        formData.append("description", form.description);
        formData.append("image", form.image); // Assuming `form.image` is a File object
        body = formData;
      }

      const response = await fetch(
        `/api/subgroup/${id}?db=${selectedDB}&&groupId=${idgroup}`,
        {
          method: "PUT",
          headers, // Only set headers for JSON; FormData automatically sets them
          body,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en el servidor:", errorData.message);
        return;
      }

      console.log("Grupo actualizado exitosamente");
    } catch (error) {
      console.error("Error al actualizar el grupo:", error);
    }
  };

  const handleEdit = (category: category) => {
    setForm({
      category: categories.category,
      description: categories.description,
    });
    setEditingCategoryId(categories.id);
  };

  const handleDelete = async (id: string) => {
    // console.log(`/api/subgroup/${id}?db=${selectedDB}&&groupId=${idgroup}`);

    try {
      const response = await fetch(
        `/api/subgroup/${id}?db=${selectedDB}&&groupId=${idgroup}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en el servidor:", errorData.message);
        return;
      }

      console.log("Grupo eliminado exitosamente");
      fetchCategories(); // Refreshes the groups after successful deletion
    } catch (error) {
      console.error("Error al eliminar el grupo:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        <Link href="/db-crud" passHref>
          <Button variant="outlined" color="primary" startIcon={<HomeIcon />}>
            Inicio
          </Button>
        </Link>{" "}
        ➜
        <Link
          href={`/db-crud/subgroup?db=${selectedDB}&&groupId=${idgroup}`}
          passHref
        >
          <Button variant="outlined" color="primary" startIcon={<HomeIcon />}>
            {nameGroup} ( {idgroup} )
          </Button>
        </Link>{" "}
        ➜ {nameSubGroup} ( {idsubgroup} )
      </Typography>

      <Typography variant="h4" gutterBottom>
        Gestión de categorías
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ mt: 2, p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <TextField
              label="Nombre de la categoría"
              name="category"
              value={form.category}
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

            {/* Columna 3: Botón de envío */}
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {editingCategoryId ? "Actualizar" : "Crear"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>

      <Typography variant="h6" gutterBottom>
        Lista de categorias
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.length > 0 ? (
              categories.map((categorias) => (
                <TableRow key={categorias.id}>
                  <TableCell>{categorias.id}</TableCell>
                  <TableCell>{categorias.category}</TableCell>
                  <TableCell>{categorias.description}</TableCell>
  
                  <TableCell>
                    <ButtonGroup
                      variant="contained"
                      aria-label="Basic button group"
                    >
                      <Button
                        onClick={() => handleEdit(categorias)}
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                      ></Button>
                      <Button
                        onClick={() => handleDelete(categorias.id)}
                        variant="outlined"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                      ></Button>
                      <Link
                        href={`/db-crud/subgroup/${categorias.id}?db=${selectedDB}&&groupId=${idgroup}`}
                        passHref
                      >
                        <Button
                          onClick={() => {
                            setIdsubgroup(subgroup.id);
                            setNameSubGroup(subgroup.subgroup);
                          }}
                          variant="outlined"
                          color="success"
                          startIcon={<GroupWorkIcon />}
                        ></Button>
                      </Link>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No hay categorias disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
