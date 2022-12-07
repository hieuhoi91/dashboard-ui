import { FC } from "react";

interface ILogo
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Logo: FC<ILogo> = (props) => {
  return (
    <span className="w-10 h-8">
      <img src="/assets/img/logo.svg" alt="" className="full h-full" />
      {props.children}
    </span>
  );
};

export default Logo;
