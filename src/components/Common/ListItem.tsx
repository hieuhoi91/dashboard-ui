import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { alo1234, selectIndexActive } from "../../features/dashboard/dashboardRouteSlice";
import { IRoutes as IRoute } from "./Menu";

interface IListRoutes {
  route: IRoute;
}

const Menu: FC<IListRoutes> = ({ route }) => {
  const dispatch = useAppDispatch();
  const indexActive = useAppSelector(selectIndexActive);
  const [a, setA] = useState(true);

  useEffect(() => {
    if (indexActive === route.label) {
      setA(true);
    } else {
      setA(false);
    }
  }, [indexActive]);

  return (
    <Link
      to={route.path}
      className={
        a
          ? "bg-light-background-hover w-full flex items-center gap-4 py-2 px-4 mb-2 rounded-lg hover:bg-light-background-hover"
          : "bg-light-background-body w-full flex items-center gap-4 py-2 px-4 mb-2 rounded-lg hover:bg-light-background-hover"
      }
      onClick={() => dispatch(alo1234(route.label))}
    >
      <span>
        <FiberManualRecordIcon style={{ fontSize: "12px" }} />
      </span>
      <span>{route.label}</span>
    </Link>
  );
};

export default Menu;
