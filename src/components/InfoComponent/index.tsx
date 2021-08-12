import React, { ReactNode } from 'react';

import './styles.css';

interface InfoComponentProps {
  id: string;
  label: ReactNode;
  info: ReactNode;
}

const InfoComponent: React.FC<InfoComponentProps> = ({ id, label, info }) => {
  return (
    <div className="info__container">
      <label htmlFor={id} className="info__label">
        {label}
      </label>
      <p id={id}>{info}</p>
    </div>
  );
};

export default InfoComponent;
