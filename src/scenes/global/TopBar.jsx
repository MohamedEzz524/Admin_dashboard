import IconButton from "../../components/IconButton";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import useTheme from "../../hooks/useTheme";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between items-end md:items-center gap-2.5 py-2.5 px-4">
      {/* SEARCH BAR */}
      <div className="flex bg-sidebar rounded-sm self-start">
        <input
          type="input"
          className="flex-1 pl-4 text-menu placeholder:text-menu focus:outline-none "
          placeholder="Search..."
        />
        <IconButton overrideStyle="p-1 rounded-none">
          <SearchIcon />
        </IconButton>
      </div>

      {/* Dark Light Theme Button */}
      <div display="flex">
        <button
          className="cursor-pointer p-2 rounded-full text-menu hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </button>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TopBar;
