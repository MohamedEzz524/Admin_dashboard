import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq/FAQ";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import { Route, Routes } from "react-router";

const routes = [
  { path: "/", component: <Dashboard /> },
  { path: "/team", component: <Team /> },
  { path: "/contacts", component: <Contacts /> },
  { path: "/invoices", component: <Invoices /> },
  { path: "/form", component: <Form /> },
  { path: "/calendar", component: <Calendar /> },
  { path: "/faq", component: <FAQ /> },
  { path: "/bar", component: <Bar /> },
  { path: "/pie", component: <Pie /> },
  { path: "/line", component: <Line /> },
  { path: "/geography", component: <Geography /> },
];

const App = () => {
  return (
    <div className="flex relative bg-bg min-h-screen overflow-hidden">
      <SideBar />
      <main className="lg:h-screen w-full max-w-[1920px] mx-auto flex flex-col lg:overflow-hidden">
        <TopBar />
        <Routes>
          {routes.map(({ path, component }) => {
            return <Route key={path} path={path} element={component} />;
          })}
        </Routes>
      </main>
    </div>
  );
};

export default App;
