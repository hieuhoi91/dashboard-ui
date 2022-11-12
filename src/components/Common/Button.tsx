import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  small?: boolean;
  large?: boolean;
  color?: string;
  className?: string;
}

const Button: FC<IButton> = ({ title, small, large, className = "", onClick }) => {
  const width = () => {
    if (small) {
      return "w-6";
    } else if (large) {
      return "w-full h-[42px] ";
    }
    return "";
  };

  const getClassName = () => {
    return width() + " " + className;
  };

  return (
    <button onClick={onClick} className={`${getClassName()}`}>
      {title}
    </button>
  );
};

export default Button;
