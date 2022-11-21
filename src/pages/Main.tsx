import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Outlet, Route, Routes } from "react-router-dom";

import Logo from "../components/Common/Logo";
import Category from "../components/Common/Menu";
import CRM from "./Menu/CRM";
import ECommerce from "./Menu/ECommerce";

const arrMain = [
  {
    path: "/dassboard/ecommerce",
    exact: true,
    main: "ECommerce",
  },
  {
    path: "/dassboard/crm",
    main: "CRM",
  },
];

const Main = () => {
  return (
    <div className="h-full w-full flex">
      <div className="w-[16%]  h-screen bg-light-background-body flex flex-col ">
        <div className="w-full h-[6%] flex justify-between items-center p-4">
          <Logo />
          <KeyboardDoubleArrowLeftIcon className="text-light-text-primary cursor-pointer" />
        </div>
        <Category
          labelIcon={<HomeOutlinedIcon />}
          title="Dashboards"
          isEnableArrowIcon={true}
          items={arrMain}
        />
      </div>
      <div className="w-[80%]">
        <Routes>
          <Route path="/dassboard/ecommerce" element={<ECommerce />} />
          <Route path="/dassboard/crm" element={<CRM />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
