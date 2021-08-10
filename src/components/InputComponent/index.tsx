import Cleave from 'cleave.js/react';
import { Props } from 'cleave.js/react/props';
import { ReactNode } from 'react';
import HelperText from '../HelperTextComponent';
import LabelInputComponent from '../LabelInputComponent';
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
        <LabelInputComponent
          htmlFor={id}
          label={label}
          error={error}
          required={others.required}
        />
      ) : (
        ''
      )}
      <Cleave
        id={id}
        options={options}
        className={`form-field ${error && 'error'}`}
        {...others}
      />
      {error && helperText ? <HelperText helperText={helperText} /> : ''}
    </div>
  );
};

export default Input;
