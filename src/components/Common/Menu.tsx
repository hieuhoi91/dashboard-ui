import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FC, useState } from "react";

import ListCategory from "./ListItem";

export interface IRoutes {
  path: string;
  extract?: boolean;
  main: React.ReactNode;
}

interface ICategory
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  isEnableArrowIcon: boolean;
  labelIcon: React.ReactNode;
  items: IRoutes[];
}

const Category: FC<ICategory> = (props) => {
  const { title, isEnableArrowIcon, labelIcon, items, ...attrs } = props;
  const [isHidden, setIsHidden] = useState(false);

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="w-full px-3 py-2">
      <div className=" flex justify-between items-center py-2" onClick={handleHidden}>
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
            <ListCategory title={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Category;
