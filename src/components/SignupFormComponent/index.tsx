import React, { ChangeEvent, useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import InputComponent from '../InputComponent';
import { ptBR, Settings } from '../../settings/ptBR';
import SelectComponent from '../SelectComponent';
import { maskApply, MaskTypes } from '../../utils/maskApply';
import RadioGroup from '../RadioGroup';
import RadioInputComponent from '../RadioInputComponent';
import Button from '../Button';
import './styles.css';

let language: Settings = ptBR;

interface FormData {
  name: string;
  email: string;
}

export default function SignupForm() {
  const formRef = useRef<FormHandles>(null);

  const [phoneType, setPhoneType] = useState<string>('smartphone');

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  function handleSetPhoneTypeSelection(
    event: ChangeEvent<HTMLSelectElement>
  ): void {
    const value = event.target.value;
    setPhoneType(value);
  }

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      className="signup-form__container"
    >
      <InputComponent
        id="email"
        type="email"
        name="email"
        label={language.labels.email}
        placeholder={language.placeholders.email}
        required
        options={{}}
      />
      <InputComponent
        id="emailConfirm"
        type="email"
        name="emailConfirm"
        label={language.labels.emailConfirm}
        placeholder={language.placeholders.emailConfirm}
        required
        options={{}}
      />
      <InputComponent
        id="firstName"
        type="text"
        name="firstName"
        label={language.labels.firstName}
        placeholder={language.placeholders.firstName}
        required
        options={{}}
      />
      <InputComponent
        id="lastName"
        type="text"
        name="lastName"
        error
        helperText="aaaaaaaaaaa"
        label={language.labels.lastName}
        placeholder={language.placeholders.lastName}
        required
        options={{}}
      />
      <InputComponent
        id="cpf"
        type="text"
        name="cpf"
        label={language.labels.cpf}
        placeholder={language.placeholders.cpf}
        required
        options={maskApply(MaskTypes.cpf)}
      />
      <div className="phone__container">
        <SelectComponent
          id="phoneType"
          name="phone.type"
          value={phoneType}
          label={language.labels.phone.type}
          onChange={handleSetPhoneTypeSelection}
          options={[
            { id: 1, value: 'smartphone', children: 'Celular' },
            { id: 2, value: 'telephone', children: 'Fixo' },
          ]}
        />
        <InputComponent
          id="phoneNumber"
          type="text"
          name="phone.number"
          style={{ width: '100%' }}
          label={language.labels.phone.number}
          placeholder={language.placeholders.phone.number}
          required
          options={
            phoneType === 'telephone'
              ? maskApply(MaskTypes.phoneNumber)
              : maskApply(MaskTypes.smartphoneNumber)
          }
        />
      </div>
      <div className="gender-birthdate__container">
        <RadioGroup label={language.labels.gender}>
          <RadioInputComponent
            id="genderFelame"
            label="Feminino"
            name="gender"
            value="f"
            checked
          />
          <RadioInputComponent
            id="genderMale"
            label="Masculino"
            name="gender"
            value="m"
          />
          <RadioInputComponent
            id="genderOthers"
            label="Outros"
            name="gender"
            value="o"
          />
        </RadioGroup>
        <InputComponent
          id="birthdate"
          type="text"
          name="birthdate"
          label={language.labels.birthdate}
          placeholder={language.placeholders.birthdate}
          required
          options={maskApply(MaskTypes.date)}
        />
      </div>
      <Button>Concluir</Button>
    </Form>
  );
}
