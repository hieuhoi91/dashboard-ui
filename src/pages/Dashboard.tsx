import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Outlet } from "react-router-dom";

import Logo from "../components/Common/Logo";
import NavMenu from "../components/Common/Menu";
import Search from "../components/Common/Search";

const ListLabels = [
  {
    path: "/dashboard/ecommerce",
    exact: true,
    label: "ECommerce",
  },
  {
    path: "/dashboard/crm",
    label: "CRM",
  },
];

const Dashboard = () => {
  return (
    <div className="h-full w-full flex bg-light-background-body">
      <div className="w-[16%]  h-screen  flex flex-col ">
        <div className="w-full h-[60px] flex justify-between items-center p-4">
          <Logo />
          <KeyboardDoubleArrowLeftIcon className="text-light-text-primary cursor-pointer" />
        </div>
        <NavMenu
          className="bg-light-background-hover"
          labelIcon={<HomeOutlinedIcon />}
          title="Dashboard"
          isEnableArrowIcon={true}
          listRoutes={ListLabels}
        />
        <NavMenu
          className="bg-light-background-hover"
          labelIcon={<WidgetsIcon />}
          title="Dashboard"
          isEnableArrowIcon={true}
          listRoutes={ListLabels}
        />
      </div>
      <div className="w-full bg-white">
        <Search />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
