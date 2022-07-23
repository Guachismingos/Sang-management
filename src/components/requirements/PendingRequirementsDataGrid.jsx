import { Box, Grid, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/";

import { DEFAULT_DISPLAY_TEXT } from "../../assets/localeDataGridText/localeText";
import { useState } from "react";

const PendingRequirementsDataGrid = () => {
  const rows = [
    //     { id: 1, col1: "Hello", col2: "World" },
    //     { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    //     { id: 3, col1: "MUI", col2: "is Amazing" },
    //     { id: 4, col1: "MUI", col2: "is Amazing" },
    //     { id: 5, col1: "MUI", col2: "is Amazing" },
    //     { id: 6, col1: "MUI", col2: "is Amazing" },
    //     { id: 7, col1: "MUI", col2: "is Amazing" },
    //     { id: 8, col1: "MUI", col2: "is Amazing" },
    //     { id: 9, col1: "MUI", col2: "is Amazing" },
    //     { id: 10, col1: "MUI", col2: "is Amazing" },
    //     { id: 11, col1: "MUI", col2: "is Amazing" },
    //     { id: 12, col1: "MUI", col2: "is Amazing" },
    //     { id: 13, col1: "MUI", col2: "is Amazing" },
    //     { id: 14, col1: "MUI", col2: "is Amazing" },
    //     { id: 15, col1: "MUI", col2: "is Amazing" },
    //     { id: 16, col1: "MUI", col2: "is Amazing" },
    //     { id: 17, col1: "MUI", col2: "is Amazing" },
    //     { id: 18, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Ticket" },
    { field: "col2", headerName: "Fecha" },
    { field: "col3", headerName: "Apellidos" },
    { field: "col4", headerName: "Correo" },
  ];

  const [selectedPage, setSelectedPage] = useState(0);
  return (
    <Box display="flex" flexDirection="column" container height="50vh" width="100%">
      <DataGrid
        density="compact"
        rows={rows}
        columns={columns}
        page={selectedPage}
        hideFooter
        localeText={DEFAULT_DISPLAY_TEXT}
      />
      <Box>a</Box>
    </Box>
  );
};

export default PendingRequirementsDataGrid;
