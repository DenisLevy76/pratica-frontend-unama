import React, { LabelHTMLAttributes, ReactNode } from 'react';

import './styles.css';

interface LabelInputComponentProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: any;
  label: ReactNode;
  error?: boolean;
  required?: boolean;
}

const LabelInputComponent: React.FC<LabelInputComponentProps> = ({
  htmlFor,
  label,
  error,
  required,
  ...others
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`input__label ${error ? 'error-text' : ''}`}
      {...others}
    >
      {label}
      {required && ' *'}
    </label>
  );
};

export default LabelInputComponent;
