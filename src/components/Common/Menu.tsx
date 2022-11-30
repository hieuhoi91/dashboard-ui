import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FC, useState } from "react";

import Menu from "./ListItem";

export interface IRoutes {
  path: string;
  extract?: boolean;
  label: React.ReactNode;
}

interface INavMenu
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  isEnableArrowIcon: boolean;
  labelIcon: React.ReactNode;
  listRoutes: IRoutes[];
}

const NavMenu: FC<INavMenu> = (props) => {
  const { title, isEnableArrowIcon, labelIcon, listRoutes: items, ...attrs } = props;
  const [isHidden, setIsHidden] = useState(false);

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="w-full px-3 pb-2">
      <div
        className={attrs.className + " flex justify-between items-center py-2 px-4 mb-2 rounded-lg"}
        onClick={handleHidden}
      >
        <div className="flex gap-2 items-center">
          <span>{labelIcon}</span>
          <span>{title}</span>
        </div>
        {isEnableArrowIcon ? (
          !isHidden ? (
            <KeyboardArrowRightIcon className="text-light-text-primary" />
          ) : (
            <KeyboardArrowDownOutlinedIcon className="text-light-text-primary" />
          )
        ) : null}
      </div>
      {isHidden ? (
        <div className="flex flex-col">
          {items.map((item) => (
            <Menu route={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NavMenu;
