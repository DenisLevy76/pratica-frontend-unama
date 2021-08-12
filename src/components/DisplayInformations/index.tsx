import React from 'react';
import { useFormContext } from '../../hooks/useFormContext';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import InfoComponent from '../InfoComponent';

import './styles.css';

const DisplayInformations: React.FC = () => {
  const { state } = useFormContext();
  const { language } = useSettingsContext();

  function displayFullName(firstName: string, lastName: string) {
    if (firstName && lastName) {
      return firstName + ' ' + lastName;
    } else {
      return '';
    }
  }

  function displayGender(gender: string) {
    switch (gender) {
      case 'f':
        return language.labels.gender.female;
      case 'm':
        return language.labels.gender.male;
      case 'o':
        return language.labels.gender.others;
      default:
        return '';
    }
  }

  function displayPhone(phone: string) {
    switch (phone) {
      case 'telephone':
        return language.labels.phone.telephone;
      case 'smartphone':
        return language.labels.phone.smartphone;
      default:
        return language.labels.phone.type;
    }
  }

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
        label={`Telefone - ${displayPhone(state.phone.type)}`}
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
        info={displayGender(state.gender)}
      />
    </section>
  );
};

export default DisplayInformations;
