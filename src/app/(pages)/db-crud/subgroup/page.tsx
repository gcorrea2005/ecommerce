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

interface subGroup {
  id: string;
  subgroup: string;
  description: string;
  image: string;
}

export default function GroupTablePage() {
  const [subgroups, setSubGroups] = useState<subGroup[]>([]);
  const [form, setForm] = useState({
    subgroup: "",
    description: "",
    image: "",
  });
  const [editingSubGroupId, setEditingSubGroupId] = useState<string | null>(
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
    fetchSubGroups();
  }, [selectedDB]); // Actualiza al cambiar la base de datos

  const fetchSubGroups = async () => {
    try {
      const response = await fetch(`/api/subgroup?db=${selectedDB}&&groupId=${idgroup}`);
      if (!response.ok) throw new Error("Error al obtener los subgrupos");
      const data = await response.json();
      const subgroupsArray = Array.isArray(data.subgroup) ? data.subgroup : [];
      setSubGroups(subgroupsArray);
    } catch (error) {
      console.error("Error al obtener los grupos:", error);
      setSubGroups([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setForm((prev) => ({ ...prev, image: file.name })); // Guardar nombre del archivo seleccionado
      setImagePreview(URL.createObjectURL(file)); // Crear URL para la previsualización
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSubGroupId) {
      await updateSubGroup(editingSubGroupId);
    } else {
      await createSubGroup();
    }
    fetchSubGroups();
    setForm({ subgroup: "", description: "", image: "" });
    setEditingSubGroupId(null);
  };

  const createSubGroup = async () => {
    try {
      const body = {
        db: selectedDB, // Base de datos seleccionada
        subgroup: form.subgroup, // Nombre del grupo
        description: form.description, // Descripción del grupo
        image: form.image, // Aquí asumo que `form.image` es una URL o string
      };

      // console.log("Datos a enviar:", JSON.stringify(body)); // Para depurar

      const response = await fetch(`/api/subgroup?db=${selectedDB}&&groupId=${idgroup}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicar que se envía JSON
        },
        body: JSON.stringify(body), // Convertir el objeto a JSON
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const result = await response.json(); // Si el servidor devuelve JSON
      console.log("subGrupo creado:", result);
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

      const response = await fetch(`/api/subgroup/${id}?db=${selectedDB}&&groupId=${idgroup}`, {
        method: "PUT",
        headers, // Only set headers for JSON; FormData automatically sets them
        body,
      });

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

  const handleEdit = (subgroup: subGroup) => {
    const imagePath = "/images/" + subgroup.image;

    setForm({
      subgroup: subgroup.subgroup,
      description: subgroup.description,
      image: subgroup.image, // Cargar el nombre de la imagen existente
    });
    setImagePreview(imagePath); // Establecer la imagen existente para la previsualización
    setEditingSubGroupId(subgroup.id);
  };

  const handleDelete = async (id: string) => {
    // console.log(`/api/subgroup/${id}?db=${selectedDB}&&groupId=${idgroup}`);

    try {
      const response = await fetch(`/api/subgroup/${id}?db=${selectedDB}&&groupId=${idgroup}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en el servidor:", errorData.message);
        return;
      }

      console.log("Grupo eliminado exitosamente");
      fetchSubGroups(); // Refreshes the groups after successful deletion
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
        ➜ {nameGroup}
      </Typography>

      <Typography variant="h4" gutterBottom>
        Gestión de subGrupos
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del subGrupo"
          name="subgroup"
          value={form.subgroup}
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
        <TextField
          label="Imagen"
          name="image"
          value={form.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box sx={{ mt: 2, p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Grid container spacing={2} alignItems="center">
            {/* Columna 1: Botón de carga de imagen */}
            <Grid item xs={12} sm={4}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                fullWidth
              >
                Subir Imagen
                <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  hidden
                />
              </Button>
            </Grid>

            {/* Columna 2: Vista previa de la imagen */}
            <Grid item xs={12} sm={4} textAlign="center">
              {imagePreview ? (
                <Box>
                  <Typography variant="body1">Vista previa:</Typography>
                  <Image
                    src={imagePreview}
                    alt="Vista previa"
                    width={150}
                    height={150}
                    style={{ marginTop: "5px" }}
                  />
                </Box>
              ) : (
                <Typography variant="body1">Sin vista previa</Typography>
              )}
            </Grid>

            {/* Columna 3: Botón de envío */}
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {editingSubGroupId ? "Actualizar" : "Crear"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>

      <Typography variant="h6" gutterBottom>
        Lista de subGrupos
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>subGrupo</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subgroups.length > 0 ? (
              subgroups.map((subgroup) => (
                <TableRow key={subgroup.id}>
                  <TableCell>{subgroup.id}</TableCell>
                  <TableCell>{subgroup.subgroup}</TableCell>
                  <TableCell>{subgroup.description}</TableCell>
                  <TableCell>
                    <Image
                      src={`/images/${subgroup.image}`}
                      alt={subgroup.subgroup}
                      width={150}
                      height={150}
                      style={{ marginTop: "5px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <ButtonGroup
                      variant="contained"
                      aria-label="Basic button group"
                    >
                      <Button
                        onClick={() => handleEdit(subgroup)}
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                      ></Button>
                      <Button
                        onClick={() => handleDelete(subgroup.id)}
                        variant="outlined"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                      ></Button>
                      <Link
                        href={`/db-crud/category?db=${selectedDB}&&subGroupId=${idsubgroup}`}
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
                  No hay subGrupos disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
