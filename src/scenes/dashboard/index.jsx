import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import Header from "../../components/Header";
import { mockTransactions as trans } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useMediaQuery } from "@mui/material";

const stats = [
  {
    id: "st-1",
    title: "431,225",
    subtitle: "Sales Obtained",
    progress: "0.50",
    increase: "+21%",
    icon: <PointOfSaleIcon className="text-accent" />,
  },
  {
    id: "st-2",
    title: "12,361",
    subtitle: "Emails Sent",
    progress: "0.75",
    increase: "+14%",
    icon: <EmailIcon className="text-accent" />,
  },
  {
    id: "st-3",
    title: "32,441",
    subtitle: "New Clients",
    progress: "0.30",
    increase: "+5%",
    icon: <PersonAddIcon className="text-accent" />,
  },
  {
    id: "st-4",
    title: "1,325,134",
    subtitle: "Traffic Inbound",
    progress: "0.80",
    increase: "+43%",
    icon: <TrafficIcon className="text-accent" />,
  },
];
const Dashboard = () => {
  const inMobile = useMediaQuery("(max-width:640px)");

  return (
    <div className="m-5 flex flex-col h-full lg:max-h-[87vh]">
      {/* Top Section */}
      <div className="flex md:flex-row flex-col justify-between items-start gap-2.5 md:items-end">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <button
          type="button"
          className="flex items-center gap-2.5 py-2.5 px-5 text-menu rounded-sm bg-secondary-accent hover:opacity-85 transition duration-300 cursor-pointer"
        >
          <GetAppOutlinedIcon />
          <h6 className="font-medium">Download Reports</h6>
        </button>
      </div>

      {/* GRID & CHARTS */}
      <div className="grow overflow-hidden">
        <div className="grid grid-cols-12 auto-rows-[140px] lg:auto-rows-fr gap-4 mt-5 h-full">
          {/* Row 1 - Stats */}
          {stats.map(({ id, title, subtitle, icon, progress, increase }) => (
            <div
              key={id}
              className="col-span-full md:col-span-6 lg:col-span-3 row-span-1 bg-sidebar rounded-sm"
            >
              <StatBox
                title={title}
                subtitle={subtitle}
                progress={progress}
                increase={increase}
                icon={icon}
              />
            </div>
          ))}
          {/* Row 2 - LineCharts + Transaction */}
          {!inMobile && (
            <div className="col-span-full lg:col-span-8 row-span-2 bg-sidebar rounded-sm px-4 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col gap-2.5 pt-4">
                  <h5 className="h5 text-menu">Revenue Generated</h5>
                  <h3 className="h3 font-bold text-accent">$56,342.32</h3>
                </div>
                <GetAppOutlinedIcon
                  className="text-accent"
                  sx={{ fontSize: 32, cursor: "pointer" }}
                />
              </div>

              <div className="grow min-h-0">
                <LineChart isDashboard />
              </div>
            </div>
          )}
          {/* Transactions */}
          <div className="card-style row-span-2 ">
            <h5 className="h5 text-menu py-3 px-4">Recent Transactions</h5>
            <div className="grow min-h-0 overflow-y-auto bg-bg ">
              {trans.map(({ txId, user, date, cost }, i) => (
                <div key={txId + i}>
                  <div className="flex justify-between items-center bg-sidebar mt-1.5 px-4 py-3">
                    <div>
                      <h5 className="h5 text-accent">{txId}</h5>
                      <h6 className="h6 text-menu">{user}</h6>
                    </div>
                    <div>
                      <h5 className="h5 text-menu">{date}</h5>
                    </div>
                    <div>
                      <h5 className="h5 bg-accent p-2 rounded-sm text-gray-50">
                        {cost}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Campaign + barChart +  geography */}
          <div className="card-style row-span-2 p-4">
            <h5 className="h5 text-menu">Campaign</h5>
            <div className="grow flex flex-col items-center justify-center gap-2">
              <div className="">
                <ProgressCircle size="80" />
              </div>
              <div className="flex flex-col items-center">
                <h5 className="h5 text-accent">$48,352 Revenue Generated</h5>
                <h6 className="h6 text-menu">
                  Includes extra misc expenditures and costs
                </h6>
              </div>
            </div>
          </div>

          {!inMobile && (
            <div className="card-style row-span-2">
              <h5 className="h5 text-menu p-4">Sales Quantity</h5>
              <div className="grow min-h-0">
                <BarChart isDashboard />
              </div>
            </div>
          )}
          {!inMobile && (
            <div className="card-style row-span-2 ">
              <h5 className="h5 text-menu p-4">Geographic Based Traffic</h5>
              <div className="grow min-h-0 pb-4">
                <GeographyChart isDashboard />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
