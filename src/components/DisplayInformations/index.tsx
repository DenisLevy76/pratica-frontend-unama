import React from 'react';
import InfoComponent from '../InfoComponent';

// import { Container } from './styles';

const DisplayInformations: React.FC = () => {
  return (
    <section className="display-informations__container">
      <InfoComponent id="email-info" label="Email" info={'data@data.com.br'} />
    </section>
  );
};

export default DisplayInformations;
