import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  primary: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled, primary }) => {
  return (
    <button className={primary ? "primary" : "secondary"} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
