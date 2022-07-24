import { DEFAULT_DISPLAY_TEXT } from "../../assets/localeDataGridText/localeText";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/";
import { useState } from "react";
import {
  ArrowBack,
  ArrowForward,
  ConfirmationNumber,
} from "@mui/icons-material";

const PendingRequirementsDataGrid = () => {
  const rows = [{ id: 1, col1: "Hello", col2: "World" }];

  const columns = [
    { field: "id", headerName: "Ticket" },
    { field: "date", headerName: "Fecha" },
    { field: "type", headerName: "Tipo" },
    { field: "status", headerName: "Estado" },
    { field: "lastNames", headerName: "Apellidos" },
    { field: "email", headerName: "Correo" },
    { field: "address", headerName: "Dirección" },
    { field: "primaryPhone", headerName: "Teléfono 1" },
    { field: "secondaryPhone", headerName: "Teléfono 2" },
    { field: "idFile", headerName: "📄Cédula" },
    { field: "depositFile", headerName: "📄Deposito" },
    { field: "waterFile", headerName: "📄Agua" },
    { field: "lightFile", headerName: "📄Luz" },
    { field: "taxesFile", headerName: "📄Impuestos" },
  ];

  const [selectedPage, setSelectedPage] = useState(0);
  return (
    <Box flexDirection="column" display="flex" height="50vh" width="100%">
      <DataGrid
        localeText={DEFAULT_DISPLAY_TEXT}
        page={selectedPage}
        columns={columns}
        density="compact"
        rows={rows}
        hideFooter
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
