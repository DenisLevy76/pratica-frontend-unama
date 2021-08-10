import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return <button className={`btn ${className}`} {...props} />;
};

export default Button;
