import React, { ReactNode } from 'react';

interface HelperTextProps {
  helperText: ReactNode;
}

const HelperText: React.FC<HelperTextProps> = ({ helperText }) => {
  return <p className="error-text">⊗ {helperText}</p>;
};

export default HelperText;
