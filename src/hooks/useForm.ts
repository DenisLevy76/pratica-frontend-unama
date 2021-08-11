import { ChangeEvent, FormEvent, useState } from 'react';
import { validator } from '../utils/Validators';

const initialState = {
  email: '',
  emailConfirm: '',
  fistName: '',
  lastName: '',
  cpf: '',
  phone: {
    number: '',
    type: 'smartphone',
  },
  gender: '',
  birthdate: '',
};

const initialErros = {
  email: '',
  emailConfirm: '',
  fistName: '',
  lastName: '',
  cpf: '',
  phone: {
    number: '',
  },
  birthdate: '',
};

export type InitialState = typeof initialState;
export type FieldErros = typeof initialErros;

interface useFormData {
  formData: InitialState;
  formErros: FieldErros;
  handleInputOnChange: (e: ChangeEvent<any>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function useForm(): useFormData {
  const [formData, setFormData] = useState<InitialState>(initialState);
  const [formErros, setFormErros] = useState<FieldErros>(initialErros);

  function handleInputOnChange(e: ChangeEvent<any>) {
    const target = e.target;
    const isCheckbox = target.type === 'checkbox';

    setFormData({
      ...formData,
      [target.name]: isCheckbox ? target.checked : target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormErros(validator(formData));
    console.log(formData);
  }

  return {
    formData,
    formErros,
    handleInputOnChange,
    handleSubmit,
  };
}
