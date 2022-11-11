import { FC } from 'react';

interface IInput {
  type: string;
  placeholder: string;
  children?: React.ReactNode;
}

const Input: FC<IInput> = props => {
  return (
    <div className="w-full h-[56px] rounded-lg  mb-4 flex items-center px-3 justify-between border-gray-300 border-solid border">
      <input
        className="w-full h-full  outline-none rounded-lg"
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.children}
    </div>
  );
};

export default Input;
