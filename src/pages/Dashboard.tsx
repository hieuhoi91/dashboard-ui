import { LockOpen } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import Logo from "../components/Common/Logo";
import NavMenu from "../components/Common/Menu";
import Search from "../components/Common/Search";
import {
  handleShow,
  handleSlide,
  selectIsShow,
  selectIsSlide,
} from "../features/dashboard/dashboardRouteSlice";

const ListLabels = [
  {
    path: "/dashboard/ecommerce",
    exact: true,
    label: "ECommerce",
  },
];

const ListProductLabels = [
  {
    path: "/dashboard/crm",
    label: "Create Product",
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
  const dispatch = useAppDispatch();
  const isSlide = useAppSelector(selectIsSlide);
  const isShow = useAppSelector(selectIsShow);

  return (
    <div className="w-screen flex justify-betwwen bg-light-background-body text-light-text-primary">
      <div
        className={` ${
          isShow ? "w-[15%]" : "w-[3.8%]"
        } overflow-y-auto h-screen flex flex-col pt-[62px]`}
        onMouseEnter={() => {
          if (isSlide === false) {
            dispatch(handleShow());
          }
        }}
        onMouseLeave={() => {
          if (isSlide === false) {
            dispatch(handleShow());
          }
        }}
      >
        <div className="w-[15%] h-[60px] fixed top-0 left-0 bg-light-background-body flex justify-between items-center p-4">
          {isShow ? (
            <div className="flex items-center gap-2">
              <Logo />
              <p className="font-bold text-2xl  pr-4 text-[#636578]">Materialize</p>
            </div>
          ) : (
            <Logo />
          )}
          {isShow ? (
            <span className="cursor-pointer" onClick={() => dispatch(handleSlide())}>
              {isSlide ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightOutlinedIcon />}
            </span>
          ) : null}
        </div>

        <NavMenu
          className="bg-light-background-hover"
          labelIcon={<HomeOutlinedIcon />}
          title="Dashboard"
          isEnableArrowIcon={true}
          listRoutes={ListLabels}
        />

        {isShow ? (
          <div className="relative w-full h-6 my-4">
            <span className="w-[70%] h-full pl-8 text-neutral-400 font-normal text-sm">
              APP & PAGES
            </span>
            <span className="absolute left-0 top-2 border-slate-300	 w-[6%] h-1 border-b"></span>
          </div>
        ) : null}

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
        <NavMenu
          className=""
          labelIcon={<GridViewIcon />}
          title="Product"
          isEnableArrowIcon={true}
          listRoutes={ListProductLabels}
        />
      </div>
      <div className="flex h-screen overflow-y-auto flex-1 pb-10 flex-col">
        <div className="fixed right-0 z-10 ">
          <Search />
        </div>
        <div className="pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
