import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import IconButton from "../../components/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Link } from "react-router-dom";
import profileImg from "../../assets/me-trans1.png";
import { useMediaQuery } from "@mui/material";

const data = [
  {
    id: "da1",
    title: "Manage Team",
    path: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    id: "da2",
    title: "Contacts Information",
    path: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    id: "da3",
    title: "Invoices Balances",
    path: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
];

const pages = [
  {
    id: "pa1",
    title: "Profile Form",
    path: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    id: "pa2",
    title: "Calendar",
    path: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    id: "pa3",
    title: "FAQ Page",
    path: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
];

const charts = [
  {
    id: "ch1",
    title: "Bar Chart",
    path: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    id: "ch2",
    title: "Pie Chart",
    path: "/pie",
    icon: <PieChartOutlineOutlinedIcon />,
  },
  {
    id: "ch3",
    title: "Line Chart",
    path: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    id: "ch4",
    title: "Geography Chart",
    path: "/geography",
    icon: <MapOutlinedIcon />,
  },
];

const Item = React.memo(({ title, to, icon, isActive, setSelected }) => {
  return (
    <MenuItem
      active={isActive}
      className="text-menu"
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <p className="text-sm">{title}</p>
    </MenuItem>
  );
});

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const inMobile = useMediaQuery("(max-width:640px)");

  return (
    <Sidebar
      collapsed={inMobile ? inMobile : isCollapsed}
      className="overflow-y-auto"
    >
      <Menu iconShape="square">
        {/* LOGO AND MENU ICON */}
        {!inMobile && (
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : null}
            className="mt-2.5 mb-5 text-menu"
          >
            {!isCollapsed && (
              <div className="flex justify-between items-center ml-4">
                <h3 className="text-menu h3">Admins</h3>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </div>
            )}
          </MenuItem>
        )}

        {/* USER */}

        {!isCollapsed && !inMobile && (
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <img
                alt="profile-user"
                src={profileImg}
                className="size-25 rounded-full cursor-pointer object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-menu h2 mt-2.5">Mo Revo</h2>
              <h5 className="text-accent h5 ">VIP Admin</h5>
            </div>
          </div>
        )}

        <div>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            isActive={selected === "Dashboard"}
            setSelected={setSelected}
          />

          <h6 className="h6 mt-4 mb-1 ml-5">Data</h6>
          {data.map(({ id, title, path, icon }) => {
            const isActive = selected === title;
            return (
              <Item
                key={id}
                title={title}
                to={path}
                icon={icon}
                isActive={isActive}
                setSelected={setSelected}
              />
            );
          })}

          <h6 className="h6 mt-4 mb-1 ml-5">Pages</h6>
          {pages.map(({ id, title, path, icon }) => {
            const isActive = selected === title;
            return (
              <Item
                key={id}
                title={title}
                to={path}
                icon={icon}
                isActive={isActive}
                setSelected={setSelected}
              />
            );
          })}

          <h6 className="h6 mt-4 mb-1 ml-5">Charts</h6>
          {charts.map(({ id, title, path, icon }) => {
            const isActive = selected === title;
            return (
              <Item
                key={id}
                title={title}
                to={path}
                icon={icon}
                isActive={isActive}
                setSelected={setSelected}
              />
            );
          })}
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
