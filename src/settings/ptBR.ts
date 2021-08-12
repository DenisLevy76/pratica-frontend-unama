export const ptBR = {
  labels: {
    email: 'Email',
    emailConfirm: 'Confirme o Email',
    firstName: 'Nome',
    lastName: 'Sobrenome',
    cpf: 'CPF',
    phone: {
      telephone: 'Telefone',
      smartphone: 'Celular',
      type: 'Tipo',
    },
    gender: {
      title: 'Gênero',
      female: 'Feminino',
      male: 'Masculino',
      others: 'Outros',
    },
    birthdate: 'Dada de nascimento',
  },
  placeholders: {
    email: 'email@email.com',
    emailConfirm: 'email@email.com',
    firstName: 'John',
    lastName: 'Doe da Silva',
    cpf: '000.000.000-00',
    phone: {
      type: 'Tipo',
      telephone: '(00) 0000-0000',
      smartphone: '(00) 00000-0000',
    },
    birthdate: 'DD/mm/AAAA',
  },
  UI: {
    btnSubmitText: 'Concluir',
  },
  errors: {
    email: {
      required: 'O email é obrigatório.',
      invalid: 'Email inválido.',
      confirm: 'Os emails devem ser iguais.',
    },
    name: {
      fistName: {
        required: 'O nome é obrigatório.',
      },
      lastName: {
        require: 'O sobrenome é obrigatório.',
      },
    },
    cpf: {
      required: 'O CPF é obrigatório.',
      invalid: 'Entre com um cpf válido.',
    },
    phone: {
      required: 'O número para contato é obrigatório.',
      telephone: 'Entre com um telefone válido.',
      smartphone: 'Entre com um celular válido.',
    },
    date: {
      required: 'Entre com uma data válida.',
      minAge: 'Mínimo de 5 anos atrás.',
      maxAge: 'Máximo de 110 anos atrás.',
    },
  },
};

export type Language = typeof ptBR;
