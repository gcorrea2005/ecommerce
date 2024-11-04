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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Link,
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
  const [selectedDB, setSelectedDB] = useState("mysql"); // Base de datos por defecto
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Estado para la previsualización de la imagen

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
        db: selectedDB,           // Base de datos seleccionada
        group: form.group,        // Nombre del grupo
        description: form.description, // Descripción del grupo
        image: form.image,        // Aquí asumo que `form.image` es una URL o string
      };
  
      console.log("Datos a enviar:", JSON.stringify(body)); // Para depurar
  
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
      const formData = new FormData();
      formData.append("group", form.group);
      formData.append("description", form.description);
      formData.append("image", form.image); // Enviar el nombre de la imagen al backend

      await fetch(`/api/group/${id}?db=${selectedDB}`, {
        method: "PUT",
        body: formData,
      });
    } catch (error) {
      console.error("Error al actualizar el grupo:", error);
    }
  };

  const handleEdit = (group: Group) => {
    setForm({
      group: group.group,
      description: group.description,
      image: group.image, // Cargar el nombre de la imagen existente
    });
    setImagePreview(group.image); // Establecer la imagen existente para la previsualización
    setEditingGroupId(group.id);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/group/${id}?db=${selectedDB}`, {
        method: "DELETE",
      });
      fetchGroups();
    } catch (error) {
      console.error("Error al eliminar el grupo:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestión de Grupos
      </Typography>

      <FormLabel component="legend">Selecciona la base de datos:</FormLabel>
      <RadioGroup row value={selectedDB} onChange={handleRadioChange}>
        <FormControlLabel value="mysql" control={<Radio />} label="MySQL" />
        <FormControlLabel value="sqlite" control={<Radio />} label="SQLite" />
        <FormControlLabel value="dynamodb" control={<Radio />} label="DynamoDB" />
      </RadioGroup>

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
        <Button variant="contained" component="label" color="primary">
          Seleccionar Imagen
          <input type="file" hidden onChange={handleFileChange} accept="images/*" />
        </Button>
        {imagePreview && (
          <div style={{ marginTop: '10px' }}>
            <Typography variant="body1">Vista previa:</Typography>
            <img src={imagePreview} alt="Vista previa" style={{ width: '100px', height: '100px', marginTop: '5px' }} />
          </div>
        )}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          {editingGroupId ? "Actualizar" : "Crear"}
        </Button>
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
                    <img src={"images/" + group.image} alt={group.group} width="50" height="50" />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(group)} variant="outlined" color="primary">
                      Editar
                    </Button>
                    <Button onClick={() => handleDelete(group.id)} variant="outlined" color="secondary">
                      Eliminar
                    </Button>
                    <Link href={`/db-crud/subgroup/id=${group.id}`} passHref>
                      <Button variant="outlined" color="success">
                        SubGroup
                      </Button>
                    </Link>
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
