import React, { createContext, useEffect, useState } from 'react';

interface FormContextData {
  state: InitialState;
  updateState: (obj: Object) => void;
}

export const FormContext = createContext({} as FormContextData);

export const initialState = {
  email: '',
  emailConfirm: '',
  firstName: '',
  lastName: '',
  cpf: '',
  phone: {
    number: '',
    type: '',
  },
  gender: '',
  birthdate: '',
};

export type InitialState = typeof initialState;

const FormContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  function updateState(object: Object) {
    setState({ ...state, ...object });
  }

  return (
    <FormContext.Provider value={{ state, updateState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
