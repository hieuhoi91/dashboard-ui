import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";

const Search = () => {
  return (
    <div className="w-full h-[60px] pr-8 flex justify-between items-center bg-light-background-body">
      <form action="" className="w-full h-full flex justify-between items-center">
        <div className="w-[60px] h-full flex justify-center items-center cursor-pointer">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="w-full bg-light-background-body outline-0"
          placeholder="Search (Ctrl+/)"
        />
      </form>
      <div className="w-[60px] h-full flex justify-center items-center cursor-pointer">
        <TranslateIcon />
      </div>
      <div className="w-[60px] h-full flex justify-center items-center cursor-pointer">
        <DarkModeOutlinedIcon />
      </div>
      <div className="w-[60px] h-full flex justify-center items-center cursor-pointer">
        <NotificationsNoneOutlinedIcon />
      </div>
    </div>
  );
};

export default Search;
