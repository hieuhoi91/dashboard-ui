import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface IButton
  extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  small?: boolean;
  large?: boolean;
}
// { title, small, large, className = "", onClick, type }

const Button: FC<IButton> = (props) => {
  const { title, small, large, ...parentAttributes } = props;

  const width = () => {
    if (props.small) {
      return "w-6";
    } else if (props.large) {
      return "w-full h-[42px] ";
    }
    return "";
  };

  const getClassName = () => {
    return width() + " " + props.className;
  };

  return (
    <button {...parentAttributes} className={`${getClassName()}`}>
      {title}
    </button>
  );
};

export default Button;
