import Cleave from 'cleave.js/react';
import { Props } from 'cleave.js/react/props';
import { ChangeEvent, useState } from 'react';

interface InputProps extends Props {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, options }) => {
  const [creditCardNo, setCreditCardNo] = useState('');

  function onCreditCardChange(e: ChangeEvent<HTMLInputElement>) {
    setCreditCardNo(e.target.value);
  }

  return (
    <Cleave
      placeholder="Enter credit card number"
      options={options}
      onChange={(e) => onCreditCardChange(e)}
      className="form-field"
    />
  );
};

export default Input;
