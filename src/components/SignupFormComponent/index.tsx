import React, { ChangeEvent, useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import InputComponent from '../InputComponent';
import { ptBR, Settings } from '../../settings/ptBR';
import SelectComponent from '../SelectComponent';

interface FormData {
  name: string;
  email: string;
}

const language: Settings = ptBR;

export default function SignupForm() {
  const formRef = useRef<FormHandles>(null);

  const [phoneType, setPhoneType] = useState<string>('smartphone');

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  function handleSetPhoneTypeSelection(
    event: ChangeEvent<HTMLSelectElement>
  ): void {
    const value = event.target.value;
    setPhoneType(value);
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <InputComponent
        id="email"
        type="email"
        name="email"
        label={ptBR.labels.email}
        placeholder={ptBR.placeholders.email}
        required
        options={{
          numericOnly: true,
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
        }}
      />
      <InputComponent
        id="emailConfirm"
        type="email"
        name="emailConfirm"
        label={ptBR.labels.emailConfirm}
        placeholder={ptBR.placeholders.emailConfirm}
        required
        options={{
          numericOnly: true,
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
        }}
      />
      <InputComponent
        id="firstName"
        type="text"
        name="firstName"
        label={ptBR.labels.firstName}
        placeholder={ptBR.placeholders.firstName}
        required
        options={{
          numericOnly: true,
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
        }}
      />
      <InputComponent
        id="emailConfirm"
        type="text"
        name="lastName"
        error
        helperText="erro mermão que doidera"
        label={ptBR.labels.lastName}
        placeholder={ptBR.placeholders.lastName}
        required
        options={{
          numericOnly: true,
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
        }}
      />
      <InputComponent
        id="cpf"
        type="text"
        name="cpf"
        label={ptBR.labels.cpf}
        placeholder={ptBR.placeholders.cpf}
        required
        options={{
          numericOnly: true,
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
        }}
      />
      <SelectComponent
        id="phoneType"
        name="phone.type"
        value={phoneType}
        label={ptBR.labels.phone.type}
        onChange={handleSetPhoneTypeSelection}
        options={[
          { id: 1, value: 'smartphone', children: 'Celular' },
          { id: 2, value: 'telephone', children: 'Fixo' },
        ]}
      />
      <InputComponent
        id="phone"
        type="text"
        name="phone.number"
        label={ptBR.labels.phone.number}
        placeholder={ptBR.placeholders.phone.number}
        required
        options={{
          numericOnly: true,
          delimiters: ['(', ')', ' ', '-'],
          blocks: [0, 2, 0, 4, 4],
        }}
      />
    </Form>
  );
}
