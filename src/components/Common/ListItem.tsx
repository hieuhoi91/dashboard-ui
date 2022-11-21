import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { FC } from "react";
import { Link } from "react-router-dom";

import { IRoutes } from "./Menu";

interface IListItem {
  title: IRoutes;
}

const ListCategory: FC<IListItem> = ({ title }) => {
  return (
    <Link to={title.path} className="w-full flex items-center gap-2 p-2">
      <span>
        <FiberManualRecordIcon style={{ fontSize: "12px" }} />
      </span>
      <span>{title.main}</span>
    </Link>
  );
};

export default ListCategory;
