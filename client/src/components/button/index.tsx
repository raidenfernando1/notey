interface CustomButtonTypes {
  btnType: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  btnOnClick?: () => void;
  className?: string | undefined;
  variant: 'primary' | 'secondary' | 'text' | 'link';
}

import './button-style.css';

export const Button = ({
  btnType,
  children,
  btnOnClick,
  className,
  variant = 'primary',
}: CustomButtonTypes) => {
  return (
    <button
      className={`custom-button ${variant} ${className}`}
      type={btnType}
      onClick={btnOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
