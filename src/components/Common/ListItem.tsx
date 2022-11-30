import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IRoutes as IRoute } from "./Menu";

interface IListRoutes {
  route: IRoute;
}

const Menu: FC<IListRoutes> = ({ route }) => {
  const [isActive, setIsActive] = useState<any>(null);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Link
      to={route.path}
      className={`${
        isActive == route ? "bg-light-background-hover" : "border-b-green-600"
      } w-full flex items-center gap-4 py-2 px-4 mb-2 rounded-lg hover:bg-light-background-hover`}
      onClick={() => setIsActive(route)}
    >
      <span>
        <FiberManualRecordIcon style={{ fontSize: "12px" }} />
      </span>
      <span>{route.label}</span>
    </Link>
  );
};

export default Menu;
