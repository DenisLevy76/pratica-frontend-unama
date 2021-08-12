import moment from 'moment';

function isEmail(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function emailValidator(email: string): string {
  if (!email) return 'O email é obrigatório.';

  if (!isEmail(email)) return 'Email inválido.';

  return '';
}

export function emailComparation(email: string, emailConfirm: string): string {
  if (!email || !emailConfirm) return '';
  if (email !== emailConfirm) return 'Os emails devem ser iguais.';
  return '';
}

export function fistNameValidator(firstName: string): string {
  if (!firstName) return 'O nome é obrigatório.';

  return '';
}

export function lastNameValidator(lastName: string): string {
  if (!lastName) return 'O sobrenome é obrigatório.';

  return '';
}

export function strip(formattedCPF: any): string {
  return `${formattedCPF}`.replace(/\D/g, '');
}

function isCpf(strCPF: string) {
  const cpf = strip(strCPF);
  let sum;
  let rest;
  let i;

  const invalidCpfs = [
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '12345678909',
  ];

  sum = 0;

  if (invalidCpfs.find((string) => string === cpf)) return false;

  for (i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

export function cpfValidator(strCPF: string): string {
  if (!strCPF) return 'O CPF é obrigatório.';
  if (!isCpf(strCPF)) return 'Entre com um cpf válido.';
  return '';
}

export function contactNumberValidator(number: string, type: string): string {
  if (!number) return 'O número para contato é obrigatório.';
  const stripedNumber = strip(number);

  if (stripedNumber.length !== 10 && type === 'telephone')
    return 'Entre com um telefone válido.';
  if (stripedNumber.length !== 11 && type === 'smartphone')
    return 'Entre com um celular válido.';

  return '';
}

export function dateValidation(date: string): string {
  if (!date || date.length !== 10) return 'Entre com uma data válida.';

  const minAge = 5;
  const maxAge = 110;

  const now = moment();
  const newDate = moment(date, 'DD-MM-YYYY');

  const userAge = now.diff(newDate, 'years');

  if (userAge < minAge) return 'Mínimo de 5 anos atrás.';
  if (userAge > maxAge) return 'Máximo de 110 anos atrás.';

  return '';
}
