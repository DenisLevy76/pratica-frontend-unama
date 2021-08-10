import React from 'react';
import LabelInputComponent from '../LabelInputComponent';

import './styles.css';

interface RadioGroup {
  label?: string;
}

const RadioGroup: React.FC<RadioGroup> = ({ label = '', children }) => {
  return (
    <div className="radio-group__container">
      <LabelInputComponent htmlFor="radioGroup" label={label} />
      <ul>{children}</ul>
    </div>
  );
};

export default RadioGroup;
