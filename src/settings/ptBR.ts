export const ptBR = {
  labels: {
    email: 'Email',
    emailConfirm: 'Confirme o Email',
    firstName: 'Nome',
    lastName: 'Sobrenome',
    cpf: 'CPF',
    phone: {
      number: 'Telefone',
      type: 'Tipo',
    },
    gender: 'Gênero',
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
      number: '(00) 00000-0000',
    },
    birthdate: 'DD/mm/AAAA',
  },
  UI: {
    btnSubmitText: 'Concluir',
  },
};

export type Settings = typeof ptBR;
