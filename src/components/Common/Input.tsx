import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { FC, useState } from "react";

interface IInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  eyeEnable?: boolean;
}

const Input: FC<IInput> = (props) => {
  const [isHidden, setHidden] = useState<boolean>(false);
  const { type, eyeEnable, ...parentAttributes } = props;
  const HiddenPassword = () => {
    setHidden(!isHidden);
  };
  const getType = () => {
    if (type) {
    } else {
      return !isHidden ? "password" : "text";
    }
  };

  return (
    <div className="w-full h-[56px] rounded-lg  mt-4 flex items-center relative  justify-between border-gray-300 border-solid border">
      <input
        {...parentAttributes}
        className="w-full h-full px-3 outline-none rounded-lg"
        type={getType()}
      />
      {eyeEnable ? (
        !isHidden ? (
          <VisibilityOutlinedIcon
            className="text-gray-400 absolute right-2 "
            onClick={HiddenPassword}
          />
        ) : (
          <VisibilityOffOutlinedIcon
            className="text-gray-400 absolute right-2"
            onClick={HiddenPassword}
          />
        )
      ) : null}
    </div>
  );
};

export default Input;
