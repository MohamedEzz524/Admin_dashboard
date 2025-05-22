import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <div className="flex items-center justify-center w-full h-full">
            <div
              className={`w-3/5 h-4/5 p-1 mx-auto flex items-center gap-1 justify-center ${
                access === "admin" ? "bg-admin" : "bg-not-admin"
              } rounded-lg text-white font-semibold`}
            >
              {access === "admin" && (
                <AdminPanelSettingsOutlinedIcon fontSize="small" />
              )}
              {access === "manager" && (
                <SecurityOutlinedIcon fontSize="small" />
              )}
              {access === "user" && <LockOpenOutlinedIcon fontSize="small" />}
              <p className="text-menu">{access}</p>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-10">
      <Header title="TEAM" subtitle="Managing The Team Members" />
      <div className="w-full h-[70vh]">
        <DataGrid rows={mockDataTeam} columns={columns} />
      </div>
    </div>
  );
};

export default Team;
