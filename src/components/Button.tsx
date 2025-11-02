import react, { type ReactNode } from 'react';
type variant = 'primary' | 'secondary';
export interface ButtonProps {
    variant?: variant;
    size?: 'small' | 'medium' | 'large';
    text:string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: () => void;
}
const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
}
function Button( props: ButtonProps ) {
  return (
    <button className={variantStyles[props.variant ?? 'primary']}>{props.text}</button>
  )
}  
 
export default Button