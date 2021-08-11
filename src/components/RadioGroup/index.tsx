import React from 'react';
import LabelInputComponent from '../LabelInputComponent';

import './styles.css';

interface RadioGroupProps {
  label?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label = '', children }) => {
  return (
    <div className="radio-group__container">
      <LabelInputComponent htmlFor="radioGroup" label={label} />
      <ul className="radio-group__content">{children}</ul>
    </div>
  );
};

export default RadioGroup;
