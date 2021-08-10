import React, {
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';
import HelperText from '../HelperTextComponent';
import LabelInputComponent from '../LabelInputComponent';

import './styles.css';

interface option extends OptionHTMLAttributes<HTMLOptionElement> {
  id: any;
  value: string | number | readonly string[] | undefined;
  children: ReactNode;
}

interface SelectComponentProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: option[];
  name: string;
  id: string;
  label?: ReactNode;
  error?: boolean;
  helperText?: ReactNode;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  options = [],
  name,
  id,
  label,
  error,
  helperText,
  ...others
}) => {
  return (
    <div className="select-component__container">
      <LabelInputComponent
        htmlFor={id}
        label={label}
        error={error}
        required={others.required}
      />
      <select name={name} id={id} {...others}>
        {options.map((option) => (
          <option {...option} key={option.id} />
        ))}
      </select>
      {error && helperText ? <HelperText helperText={helperText} /> : ''}
    </div>
  );
};

export default SelectComponent;
