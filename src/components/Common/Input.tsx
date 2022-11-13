import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { ChangeEventHandler, FC, useState } from "react";

interface IInput {
  type?: string;
  placeholder: string;
  children?: React.ReactNode;
  eyeEnable?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<IInput> = (props) => {
  const [isHidden, setHidden] = useState<boolean>(false);

  const HiddenPassword = () => {
    setHidden(!isHidden);
  };
  const getType = () => {
    if (props.type) {
      return props.type;
    } else {
      return !isHidden ? "password" : "text";
    }
  };

  return (
    <div className="w-full h-[56px] rounded-lg  mb-4 flex items-center relative  justify-between border-gray-300 border-solid border">
      <input
        className="w-full h-full px-3 outline-none rounded-lg"
        type={getType()}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.eyeEnable ? (
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
