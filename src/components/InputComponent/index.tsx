import { InputHTMLAttributes, ReactNode } from 'react';
import HelperText from '../HelperTextComponent';
import LabelInputComponent from '../LabelInputComponent';
import './styles.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  label: string;
  className?: string;
  error?: boolean;
  helperText?: ReactNode;
}

const Input: React.FC<InputProps> = ({
  name,
  id,
  label,
  error,
  helperText,
  className,
  ...others
}) => {
  return (
    <div className={`input-container ${className}`}>
      {label ? (
        <LabelInputComponent
          htmlFor={id}
          label={label}
          error={error}
          required={others.required}
        />
      ) : (
        ''
      )}
      <input
        id={id}
        name={name}
        className={`form-field ${error ? 'error' : ''}`}
        {...others}
      />
      {error && helperText ? <HelperText helperText={helperText} /> : ''}
    </div>
  );
};

export default Input;
