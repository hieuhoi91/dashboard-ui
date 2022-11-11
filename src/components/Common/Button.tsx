import { FC } from 'react';

interface IButton {
  title: string;
  small?: boolean;
  large?: boolean;
  color?: string;
  className?: string;
}

const Button: FC<IButton> = ({ title, small, large, className = '' }) => {
  const width = () => {
    if (small) {
      return 'w-6';
    } else if (large) {
      return 'w-full h-[42px] ';
    }
    return '';
  };

  const getClassName = () => {
    return width() + ' ' + className;
  };

  return <button className={`${getClassName()}`}>{title}</button>;
};

export default Button;
