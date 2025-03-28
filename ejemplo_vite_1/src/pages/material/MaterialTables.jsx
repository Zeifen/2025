import Breadcrumb from "../../components/Breadcrumb";
import { matConstants } from "../../text";
import { DataGrid } from "@mui/x-data-grid"; //npm install @mui/x-data-grid

const MaterialTables = () => {
  //Ejemplo de la documentación
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "Nombre", width: 130 },
    { field: "lastName", headerName: "E-Mail", width: 130 },
    {
      field: "age",
      headerName: "Edad",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Nombre completo",
      description:
        "Esta columna tiene un captador de valor y no se puede ordenar.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <>
      <Breadcrumb link={matConstants.matLink} title={matConstants.matTitle} description={matConstants.matTablesDescription}/>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </>
  );
};

export default MaterialTables;
