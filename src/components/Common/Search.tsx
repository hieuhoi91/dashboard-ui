import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";

const Search = () => {
  return (
    <div className="w-full h-[60px] flex justify-between items-center bg-light-background-body">
      <form action="" className="w-full h-full flex justify-between items-center">
        <div className="w-[60px] h-full flex justify-center items-center">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="w-full bg-light-background-body outline-0"
          placeholder="Search (Ctrl+/)"
        />
      </form>
      <div className="w-[60px] h-full flex justify-center items-center">
        <TranslateIcon />
      </div>
      <div className="w-[60px] h-full flex justify-center items-center">
        <NightlightIcon />
      </div>
      <div className="w-[60px] h-full flex justify-center items-center">
        <NotificationsNoneOutlinedIcon />
      </div>
    </div>
  );
};

export default Search;
