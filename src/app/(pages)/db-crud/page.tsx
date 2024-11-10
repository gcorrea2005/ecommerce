"use client";
import useGlobalStore from "@/app/stores/useGlobalStore";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Stack,
  Grid,
} from "@mui/material";

interface Group {
  id: string;
  group: string;
  description: string;
  image: string;
}

export default function GroupTablePage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [form, setForm] = useState({ group: "", description: "", image: "" });
  const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
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
    fetchGroups();
  }, [selectedDB]); // Actualiza al cambiar la base de datos

  const fetchGroups = async () => {
    try {
      const response = await fetch(`/api/group?db=${selectedDB}`);
      if (!response.ok) throw new Error("Error al obtener los grupos");
      const data = await response.json();
      const groupsArray = Array.isArray(data.group) ? data.group : [];
      setGroups(groupsArray);
    } catch (error) {
      console.error("Error al obtener los grupos:", error);
      setGroups([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDB(e.target.value);
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
    if (editingGroupId) {
      await updateGroup(editingGroupId);
    } else {
      await createGroup();
    }
    fetchGroups();
    setForm({ group: "", description: "", image: "" });
    setEditingGroupId(null);
  };

  const createGroup = async () => {
    try {
      const body = {
        db: selectedDB, // Base de datos seleccionada
        group: form.group, // Nombre del grupo
        description: form.description, // Descripción del grupo
        image: form.image, // Aquí asumo que `form.image` es una URL o string
      };

      // console.log("Datos a enviar:", JSON.stringify(body)); // Para depurar

      const response = await fetch(`/api/group?db=${selectedDB}`, {
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
      console.log("Grupo creado:", result);
    } catch (error) {
      console.error("Error al crear el grupo:", error);
    }
  };

  const updateGroup = async (id: string) => {
    try {
      let body;
      let headers = {};

      if (typeof form.image === "string") {
        // Send as JSON if `image` is a filename (not a file)
        body = JSON.stringify({
          group: form.group,
          description: form.description,
          image: form.image,
        });
        headers = { "Content-Type": "application/json" };
      } else {
        // If `image` is a file, use FormData
        const formData = new FormData();
        formData.append("group", form.group);
        formData.append("description", form.description);
        formData.append("image", form.image); // Assuming `form.image` is a File object
        body = formData;
      }

      const response = await fetch(`/api/group/${id}?db=${selectedDB}`, {
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

  const handleEdit = (group: Group) => {
    const imagePath = "/images/" + group.image;

    setForm({
      group: group.group,
      description: group.description,
      image: group.image, // Cargar el nombre de la imagen existente
    });
    setImagePreview(imagePath); // Establecer la imagen existente para la previsualización
    setEditingGroupId(group.id);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/group/${id}?db=${selectedDB}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en el servidor:", errorData.message);
        return;
      }

      console.log("Grupo eliminado exitosamente");
      fetchGroups(); // Refreshes the groups after successful deletion
    } catch (error) {
      console.error("Error al eliminar el grupo:", error);
    }
  };


  
  // aca empieza el codigo HTML
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestión de Grupos
      </Typography>

      <Card
        variant="outlined"
        sx={{ maxWidth: 400, margin: "20px auto", padding: 2 }}
      >
        <CardContent>
          <FormLabel component="legend">Bases de datos disponibles</FormLabel>
          <RadioGroup row value={selectedDB} onChange={handleRadioChange}>
            <FormControlLabel value="mysql" control={<Radio />} label="MySQL" />
            <FormControlLabel
              value="sqlite"
              control={<Radio />}
              label="SQLite"
            />
            <FormControlLabel
              value="dynamodb"
              control={<Radio />}
              label="DynamoDB"
            />
          </RadioGroup>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Grupo"
          name="group"
          value={form.group}
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
                {editingGroupId ? "Actualizar" : "Crear"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>

      <Typography variant="h6" gutterBottom>
        Lista de Grupos
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Grupo</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.length > 0 ? (
              groups.map((group) => (
                <TableRow key={group.id}>
                  <TableCell>{group.id}</TableCell>
                  <TableCell>{group.group}</TableCell>
                  <TableCell>{group.description}</TableCell>
                  <TableCell>
                    <Image
                      src={`/images/${group.image}`}
                      alt={group.group}
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
                        onClick={() => handleEdit(group)}
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                      ></Button>
                      <Button
                        onClick={() => handleDelete(group.id)}
                        variant="outlined"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                      ></Button>
                      <Link
                        href={`/db-crud/subgroup?db=${selectedDB}&&groupId=${group.id}`}
                        passHref
                      >
                        <Button
                          onClick={() => {
                            setIdgroup(group.id);
                            setNameGroup(group.group);
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
                  No hay grupos disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
