import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

export function useFormContext() {
  const context = useContext(FormContext);

  return { ...context };
}
