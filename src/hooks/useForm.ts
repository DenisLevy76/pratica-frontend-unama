import { ChangeEvent, FormEvent, useState } from 'react';
import { initialState, InitialState } from '../contexts/FormContext';
import {
  emailValidator,
  cpfValidator,
  dateValidation,
  emailComparation,
  fistNameValidator,
  contactNumberValidator,
  lastNameValidator,
} from '../utils/validatorsUtils';
import { useFormContext } from './useFormContext';

const initialErros = {
  email: '',
  emailConfirm: '',
  firstName: '',
  lastName: '',
  cpf: '',
  number: '',
  birthdate: '',
};

export type FieldErros = typeof initialErros;

interface useFormData {
  formData: InitialState;
  formErros: FieldErros;
  handleInputOnChange: (e: ChangeEvent<any>) => void;
  handleValidationOnBlur: (e: ChangeEvent<any>) => void;
  setFormData: (value: InitialState) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const initialFormData: InitialState = {
  ...initialState,
  gender: 'f',
  phone: { ...initialState.phone, type: 'smartphone' },
};

export default function useForm(): useFormData {
  const [formData, setFormData] = useState<InitialState>(initialFormData);
  const [formErros, setFormErros] = useState<FieldErros>(initialErros);
  const { updateState } = useFormContext();

  function validateOneField(field: string) {
    switch (field) {
      case 'email':
        return { email: emailValidator(formData.email) };
      case 'emailConfirm':
        return {
          emailConfirm:
            emailValidator(formData.emailConfirm) ||
            emailComparation(formData.email, formData.emailConfirm),
        };
      case 'firstName':
        return {
          firstName: fistNameValidator(formData.firstName),
        };
      case 'lastName':
        return {
          lastName: lastNameValidator(formData.lastName),
        };
      case 'cpf':
        return { cpf: cpfValidator(formData.cpf) };
      case 'phone':
        return {
          number: contactNumberValidator(
            formData.phone.number,
            formData.phone.type
          ),
        };
      case 'birthdate':
        return {
          birthdate: dateValidation(formData.birthdate),
        };
    }
  }

  function validateAllFields(): FieldErros {
    let errors: FieldErros = {} as FieldErros;
    for (let key in formData) {
      const error = validateOneField(key);
      errors = { ...errors, ...error };
    }

    return errors;
  }

  function handleInputOnChange(e: ChangeEvent<any>) {
    const target = e.target;
    const isCheckbox = target.type === 'checkbox';

    setFormData({
      ...formData,
      [target.name]: isCheckbox ? target.checked : target.value,
    });
  }

  function handleValidationOnBlur(e: ChangeEvent<any>) {
    let error: any = {};
    error = validateOneField(e.target.name);
    setFormErros({ ...formErros, ...error });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = validateAllFields();

    for (let [key, value] of Object.entries(errors)) {
      if (value !== '') {
        setFormErros(errors);
        return;
      }
    }

    updateState(formData);
  }

  return {
    formData,
    formErros,
    handleInputOnChange,
    handleValidationOnBlur,
    setFormData,
    handleSubmit,
  };
}
