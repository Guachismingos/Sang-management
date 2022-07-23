export const DEFAULT_DISPLAY_TEXT = {
  // Root
  noRowsLabel: "No existen Requerimientos",
  noResultsOverlayLabel: "No hay resultados",
  errorOverlayDefaultLabel: "Ocurrio un error.",
  // Density selector toolbar button text
  toolbarDensity: "Densidad",
  toolbarDensityLabel: "Densidad",
  toolbarDensityCompact: "Compacto",
  toolbarDensityStandard: "Normal",
  toolbarDensityComfortable: "Intermedio",
  // Columns selector toolbar button text
  toolbarColumns: "Columnas",
  toolbarColumnsLabel: "Seleccione las columnas",
  // Filters toolbar button text
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Ocultar filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} activar filtros` : `${count} activar filtro`,
  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "Buscar...",
  toolbarQuickFilterLabel: "Buscar",
  toolbarQuickFilterDeleteIconLabel: "Limpiar",
  // Export selector toolbar button text
  toolbarExport: "Exportar",
  toolbarExportLabel: "Exportar",
  toolbarExportCSV: "Descargar como CSV",
  toolbarExportPrint: "Imprimir",
  toolbarExportExcel: "Descargar como Excel",
  // Columns panel text
  columnsPanelTextFieldLabel: "Find column",
  columnsPanelTextFieldPlaceholder: "Titulo de la columna",
  columnsPanelDragIconLabel: "Reordenar columnas",
  columnsPanelShowAllButton: "Mostrar todo",
  columnsPanelHideAllButton: "Ocultar todo",
  // Filter panel text
  filterPanelAddFilter: "Añadir filtro",
  filterPanelDeleteIconLabel: "Eliminar",
  filterPanelLinkOperator: "Operador logico",
  filterPanelOperators: "Operador",
  // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: "y",
  filterPanelOperatorOr: "o",
  filterPanelColumns: "Columnas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor del filtro",
  // Filter operators text
  filterOperatorContains: "contiene",
  filterOperatorEquals: "igual",
  filterOperatorStartsWith: "empieza con",
  filterOperatorEndsWith: "termina con",
  filterOperatorIs: "es",
  filterOperatorNot: "no es",
  filterOperatorAfter: "es despues",
  filterOperatorOnOrAfter: "esta en o despues",
  filterOperatorBefore: "es antes",
  filterOperatorOnOrBefore: "esta en o antes",
  filterOperatorIsEmpty: "está vacio",
  filterOperatorIsNotEmpty: "no está vacio",
  filterOperatorIsAnyOf: "es cualquiera de los siguientes",
  // Filter values text
  filterValueAny: "cualquiera",
  filterValueTrue: "true",
  filterValueFalse: "false",
  // Column menu text
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Mostrar columnas",
  columnMenuFilter: "Filtro",
  columnMenuHideColumn: "Ocualtar",
  columnMenuUnsort: "Restablecer",
  columnMenuSortAsc: "Ordenar por ASC",
  columnMenuSortDesc: "Ordenar por DESC",
  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} activar filtros` : `${count} activar filtro`,
  columnHeaderFiltersLabel: "Mostrar Filtros",
  columnHeaderSortIconLabel: "Ordenar",
  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} filas seleccionadas`
      : `${count.toLocaleString()} fila seleccionada`,
  // Total row amount footer text
  footerTotalRows: "Total de filas:",
  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
  // Checkbox selection text
  checkboxSelectionHeaderName: "Seleccion",
  checkboxSelectionSelectAllRows: "Seleccionar todas las filas",
  checkboxSelectionUnselectAllRows: "Cancelar seleccion de las filas",
  checkboxSelectionSelectRow: "Seleccionar fila",
  checkboxSelectionUnselectRow: "Cancelar seleccion de fila",
  // Boolean cell text
  booleanCellTrueLabel: "sí",
  booleanCellFalseLabel: "no",
  // Actions cell more text
  actionsCellMore: "más",
  // Column pinning text
  pinToLeft: "Pin to left",
  pinToRight: "Pin to right",
  unpin: "Unpin",
  // Tree Data
  treeDataGroupingHeaderName: "Grupo",
  treeDataExpand: "ver hijos",
  treeDataCollapse: "ocultar hijos",
  // Grouping columns
  groupingColumnHeaderName: "Grupo",
  groupColumn: (name) => `Grupo by ${name}`,
  unGroupColumn: (name) => `Parar agrupacion por ${name}`,
  // Master/detail
  detailPanelToggle: "Detail panel toggle",
  expandDetailPanel: "Expandir",
  collapseDetailPanel: "Cerrar",
  // Used core components translation keys
  MuiTablePagination: {},
  // Row reordering text
  rowReorderingHeaderName: "Reordenar filas",
};
