import React, { ReactNode } from 'react';

import './styles.css';

interface InfoComponentProps {
  id: string;
  label: ReactNode;
  info: ReactNode;
}

const InfoComponent: React.FC<InfoComponentProps> = ({ id, label, info }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <p id={id}>{info}</p>
    </div>
  );
};

export default InfoComponent;
