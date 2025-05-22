import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center h-full w-full">
          <p className="text-accent text-sm ">${params.row.cost}</p>
        </div>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-10">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <div className="w-full h-[70vh]">
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Invoices;
