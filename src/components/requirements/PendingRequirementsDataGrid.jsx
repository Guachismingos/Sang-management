import { DEFAULT_DISPLAY_TEXT } from "../../assets/localeDataGridText/localeText";
import { Box, Chip, IconButton, Paper, Stack, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid/";
import { useEffect, useState } from "react";
import {
  ArrowBack,
  ArrowForward,
  ConfirmationNumber,
} from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PendingRequirementsDataGrid = () => {
  const navigate = useNavigate();
  const { loadPendingRequirements } = useAuth();

  const [rows, setRows] = useState([]);

  const formatStatus = ({ value }) => {
    let label = "Error",
      color = "error";
    switch (value) {
      case -1:
        label = "Cancelado";
        color = "error";
        break;
      case 0:
        label = "Pendiente";
        color = "warning";
        break;
      case 1:
        label = "En Progreso";
        color = "info";
        break;
      default:
        break;
    }
    return <Chip size="small" color={color} label={label} />;
  };

  const columns = [
    { field: "id", headerName: "Ticket", minWidth: 200 },
    {
      field: "date",
      headerName: "Fecha",
      renderCell: ({ value }) => new Date(value).toLocaleDateString("es-CR"),
    },
    {
      field: "type",
      headerName: "Tipo",
      renderCell: ({ value }) =>
        value === 0 ? "Bono ordinario" : "Bono crédito",
      minWidth: 140,
    },
    {
      field: "status",
      headerName: "Estado",
      renderCell: formatStatus,
      minWidth: 120,
    },
    { field: "lastNames", headerName: "Apellidos", minWidth: 160, flex: 1 },
    { field: "email", headerName: "Correo", minWidth: 200, flex: 1 },
    { field: "primaryPhone", headerName: "Teléfono 1", minWidth: 150 },
    { field: "secondaryPhone", headerName: "Teléfono 2" },
    { field: "address", headerName: "Dirección", minWidth: 300, flex: 2 },
  ];

  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const unsubscribe = loadPendingRequirements((querySnapShot) => {
      const docs = [];
      querySnapShot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setRows(docs);
    });
    return unsubscribe;
  }, [loadPendingRequirements]);

  return (
    <Box flexDirection="column" display="flex" height="50vh" width="100%">
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        localeText={DEFAULT_DISPLAY_TEXT}
        page={selectedPage}
        disableColumnMenu
        columns={columns}
        density="compact"
        rows={rows}
        hideFooter
        onCellDoubleClick={({ id }) => navigate(id)}
      />
      <Paper variant="outlined" sx={{ mt: 1 }}>
        <Stack direction="row-reverse">
          <IconButton>
            <ArrowForward fontSize="small" />
          </IconButton>
          <IconButton>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PendingRequirementsDataGrid;
