import Cleave from 'cleave.js/react';
import { Props } from 'cleave.js/react/props';
import { ReactNode } from 'react';
import './styles.css';

interface InputProps extends Props {
  name: string;
  id: string;
  label: string;
  error?: boolean;
  helperText?: ReactNode;
}

const Input: React.FC<InputProps> = ({
  name,
  options,
  id,
  label,
  error,
  helperText,
  ...others
}) => {
  return (
    <div className="input-container">
      {label ? (
        <label htmlFor={id} className="input__label">
          {label}
          {others.required && ' *'}
        </label>
      ) : (
        ''
      )}
      <Cleave
        id={id}
        options={options}
        className={`form-field ${error && 'error'}`}
        {...others}
      />
      {error ? <p className="helper-text">{helperText}</p> : ''}
    </div>
  );
};

export default Input;
