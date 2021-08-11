import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  error?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className, error, ...props }) => {
  return (
    <button
      className={`btn ${className} ${error ? 'btn-error' : ''}`}
      {...props}
    />
  );
};

export default Button;
