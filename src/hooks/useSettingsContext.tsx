import { useContext } from 'react';
import { SettingsContext } from '../contexts/AllSettingsContext';

export function useSettingsContext() {
  const context = useContext(SettingsContext);

  return { ...context };
}
