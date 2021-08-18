import React from 'react';
import { useFormContext } from '../../hooks/useFormContext';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import { Genders } from '../../types/enums/Genders';
import { PhoneType } from '../../types/enums/PhoneTypes';
import InfoComponent from '../InfoComponent';

import './styles.css';

const DisplayInformations: React.FC = () => {
  const { state } = useFormContext();
  const { language } = useSettingsContext();

  const displayFullName = (firstName: string, lastName: string) => {
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }

    return '';
  };

  const displayGender = (gender: Genders) => {
    const genders = {
      f: language.labels.gender.female,
      m: language.labels.gender.male,
      o: language.labels.gender.others,
    };

    return genders[gender] || '';
  };

  const displayPhone = (phone: PhoneType) => {
    const types = {
      telephone: language.labels.phone.telephone,
      smartphone: language.labels.phone.smartphone,
    };

    return types[phone] || language.labels.phone.type;
  };

  return (
    <section className="display-informations__container">
      <InfoComponent
        id="email-info"
        label={language.labels.email}
        info={state.emailConfirm}
      />
      <InfoComponent
        id="fullName-info"
        label="Nome Completo"
        info={displayFullName(state.firstName, state.lastName)}
      />
      <InfoComponent
        id="cpf-info"
        label={language.labels.cpf}
        info={state.cpf}
      />
      <InfoComponent
        id="phone-info"
        label={`Telefone - ${displayPhone(state.phone.type as PhoneType)}`}
        info={state.phone.number}
      />
      <InfoComponent
        id="birthdate-info"
        label={language.labels.birthdate}
        info={state.birthdate}
      />
      <InfoComponent
        id="gender-info"
        label={language.labels.gender.title}
        info={displayGender(state.gender as Genders)}
      />
    </section>
  );
};

export default DisplayInformations;
