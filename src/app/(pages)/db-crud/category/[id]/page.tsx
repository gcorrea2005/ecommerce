"use client";
import React, { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import useGlobalStore from "@/app/stores/useGlobalStore";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import Link from "next/link";

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
  Box,
} from "@mui/material";

interface subGroup {
  id: string;
  subgroup: string;
  description: string;
  image: string;
  grupoId: string;
}

export default function GroupTablePage() {
  const [groups, setGroups] = useState<subGroup[]>([]);
  const [form, setForm] = useState({
    subgroup: "",
    description: "",
    image: "",
  });
  const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
    fetchGroups(idgroup);
  }, [selectedDB]);

  const fetchGroups = async (groupId: string) => {
    try {
      const response = await fetch(`/api/subgroup/${groupId}?db=${selectedDB}`);

      console.log("response fetchGroups: ", response);

      if (!response.ok) throw new Error("Error al obtener los grupos");

      const data = await response.json();
      console.log("consulta data: ", data);

      const subGroupsArray = Array.isArray(data.subgroup) ? data.subgroup : [];
      setGroups(subGroupsArray);
    } catch (error) {
      console.error("Error al obtener el subGroup:", error);
      setGroups([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setForm((prev) => ({ ...prev, image: file.name }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingGroupId) {
      await updateSubGroup(editingGroupId);
    } else {
      await createSubGroup();
    }
    if (idgroup) fetchGroups(idgroup as string); // Recarga grupos
    setForm({ subgroup: "", description: "", image: "" });
    setEditingGroupId(null);
  };

  const createSubGroup = async () => {
    try {
      const body = {
        db: selectedDB,
        subgroup: form.subgroup,
        description: form.description,
        image: form.image,
        groupId: idgroup,
      };
      console.log(body);

      const response = await fetch(`/api/subgroup?db=${selectedDB}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al crear el grupo:", error);
    }
  };

  const updateSubGroup = async (subGroupId: string) => {
    try {
      const formData = new FormData();
      formData.append("subgroup", form.subgroup);
      formData.append("description", form.description);
      formData.append("image", form.image);

      await fetch(`/api/subgroup/${subGroupId}?db=${selectedDB}`, {
        method: "PUT",
        body: formData,
      });
    } catch (error) {
      console.error("Error al actualizar el subGrupo:", error);
    }
  };

  const handleEdit = (subgroup: subGroup) => {
    setForm({
      subgroup: subgroup.subgroup,
      description: subgroup.description,
      image: subgroup.image,
    });
    setImagePreview(subgroup.image);
    setEditingGroupId(subgroup.id);
  };

  const handleDelete = async (subGroupId: string) => {
    try {
      await fetch(`/api/subgroup/${subGroupId}?db=${selectedDB}`, {
        method: "DELETE",
      });
      if (idgroup) fetchGroups(idgroup as string);
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

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            mt: 2,
            p: 4,
            borderRadius: 3,
            boxShadow: 4,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            gap: 2, // Espacio uniforme entre los campos
          }}
        >
          {/* Campo: Nombre del subGrupo */}
          <TextField
            label="Nombre de la categoria"
            name="subgroup"
            value={form.category}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            variant="outlined"
          />
          {/* Campo: Descripción (Textarea) */}
          <TextField
            label="Descripción"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            multiline
            rows={4} // Configuración para convertirlo en un textarea de 4 filas visibles
            variant="outlined"
          />{" "}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            {editingGroupId ? "Actualizar" : "Crear"}
          </Button>
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
            {groups.length > 0 ? (
              groups.map((subgroup) => (
                <TableRow key={subgroup.id}>
                  <TableCell>{subgroup.id}</TableCell>
                  <TableCell>{subgroup.subgroup}</TableCell>
                  <TableCell>{subgroup.description}</TableCell>
                  <TableCell>
                    <Image
                      src={"images/" + subgroup.image}
                      alt={subgroup.subgroup}
                      width={50}
                      height={50}
                      style={{ marginTop: "5px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(subgroup)}
                      variant="outlined"
                      color="primary"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => handleDelete(subgroup.id)}
                      variant="outlined"
                      color="secondary"
                    >
                      Eliminar
                    </Button>
                    <Link href={`/db-crud/category/id=${subgroup.id}`} passHref>
                      <Button variant="outlined" color="success">
                        Category
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
