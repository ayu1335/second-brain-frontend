import { type ReactElement } from 'react';

type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: Variant;
  size?: 'small' | 'medium' | 'large';
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: 'bg-[#5046E4] text-white hover:bg-blue-600',
  secondary: 'bg-[#E0E7FF] text-[#3e38a7] hover:bg-gray-600',
};

const sizeStyles = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const defaultStyles =
  'flex items-center justify-center gap-2 rounded-md transition-colors duration-150 mt-3';

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant ?? 'primary']} ${sizeStyles[props.size ?? 'small']} ${defaultStyles}`}
    >
      {props.startIcon && <span className="flex items-center justify-center w-5 h-5">{props.startIcon}</span>}
      <span>{props.text}</span>
      {props.endIcon && <span className="flex items-center justify-center w-5 h-5">{props.endIcon}</span>}
    </button>
  );
}

export default Button;
  