import { FC } from "react";

interface ILogo
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Logo: FC<ILogo> = (props) => {
  const className = !props.className ? "" : props.className;
  return (
    <span className={className + " flex items-center gap-2  w-10 h-10"}>
      <img src="assets/img/logo.svg" alt="" className="w-full h-full" />
      <p className="font-bold text-2xl text-[#636578]">Materialize</p>
      {props.children}
    </span>
  );
};

export default Logo;
