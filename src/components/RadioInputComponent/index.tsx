import React, { InputHTMLAttributes, ReactNode } from 'react';

import './styles.css';

export interface RadioInputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  name: string;
  value: string | number | readonly string[] | undefined;
}

const RadioInputComponent: React.FC<RadioInputComponentProps> = ({
  id,
  label,
  value,
  name,
  ...others
}) => {
  return (
    <li className="radio-input__container">
      <input
        type="radio"
        className="radio-input"
        id={id}
        value={value}
        name={name}
        {...others}
      />
      <label htmlFor={id} className="radio-input__label">
        {label}
      </label>
    </li>
  );
};

export default RadioInputComponent;
