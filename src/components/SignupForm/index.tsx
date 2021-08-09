import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../Input';

interface FormData {
  name: string;
  email: string;
}

export default function SignupForm() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="name"
        id="name"
        label="Nome"
        required
        options={{
          numericOnly: true,
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
        }}
      />
      <Input
        name="cpf"
        id="cpf"
        label="CPF"
        error
        helperText="error pra cacete"
        options={{
          numericOnly: true,
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
        }}
      />
    </Form>
  );
}
