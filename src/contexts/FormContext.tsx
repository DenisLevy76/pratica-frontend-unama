import React, { createContext } from 'react';

interface FormContextData {}

const FormContext = createContext({} as FormContextData);

const FormContextProvider: React.FC = ({ children }) => {
  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
