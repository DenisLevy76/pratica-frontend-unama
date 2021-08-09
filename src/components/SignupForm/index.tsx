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
      <Input name="name" options={{}} />
      <Input name="email" options={{}} />
    </Form>
  );
}
