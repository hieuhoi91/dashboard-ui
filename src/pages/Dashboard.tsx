import { LockOpen } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
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

const ListProductLabels = [
  {
    path: "/roles-permission/roles",
    exact: true,
    label: "Roles",
  },
  {
    path: "/roles-permission/permissions",
    label: "Permissions",
  },
];

const ListRolesPermisstionLabels = [
  {
    path: "/roles-permission/roles",
    exact: true,
    label: "Roles",
  },
  {
    path: "/roles-permission/permissions",
    label: "Permissions",
  },
];

const Dashboard = () => {
  return (
    <div className="h-full w-full flex bg-light-background-body text-light-text-primary">
      <div className="w-[16%]  h-screen  flex flex-col ">
        <div className="w-full h-[60px] flex justify-between items-center p-4">
          <Logo />
          <KeyboardDoubleArrowLeftIcon className="cursor-pointer" />
        </div>
        <NavMenu
          className="bg-light-background-hover"
          labelIcon={<HomeOutlinedIcon />}
          title="Dashboard"
          isEnableArrowIcon={true}
          listRoutes={ListLabels}
        />
        <NavMenu
          className=""
          labelIcon={<GridViewIcon />}
          title="Product"
          isEnableArrowIcon={true}
          listRoutes={ListProductLabels}
        />
        <NavMenu
          className=""
          labelIcon={<LockOpen />}
          title="Roles & Permissions"
          isEnableArrowIcon={true}
          listRoutes={ListRolesPermisstionLabels}
        />
      </div>
      <div className="w-full flex flex-col">
        <Search />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
