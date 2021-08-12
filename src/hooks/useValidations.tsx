import moment from 'moment';
import { useSettingsContext } from './useSettingsContext';
export function useValidations() {
  const { language } = useSettingsContext();
  function isEmail(email: string): boolean {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function emailValidator(email: string): string {
    if (!email) return language.errors.email.required;

    if (!isEmail(email)) return language.errors.email.invalid;

    return '';
  }

  function emailComparation(email: string, emailConfirm: string): string {
    if (!email || !emailConfirm) return '';
    if (email !== emailConfirm) return language.errors.email.confirm;
    return '';
  }

  function fistNameValidator(firstName: string): string {
    if (!firstName) return language.errors.name.fistName.required;

    return '';
  }

  function lastNameValidator(lastName: string): string {
    if (!lastName) return language.errors.name.lastName.require;

    return '';
  }

  function strip(formattedCPF: any): string {
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

  function cpfValidator(strCPF: string): string {
    if (!strCPF) return language.errors.cpf.required;
    if (!isCpf(strCPF)) return language.errors.cpf.invalid;
    return '';
  }

  function contactNumberValidator(number: string, type: string): string {
    if (!number) return language.errors.phone.required;
    const stripedNumber = strip(number);

    if (stripedNumber.length !== 10 && type === 'telephone')
      return language.errors.phone.telephone;
    if (stripedNumber.length !== 11 && type === 'smartphone')
      return language.errors.phone.smartphone;

    return '';
  }

  function dateValidation(date: string): string {
    if (!date || date.length !== 10) return language.errors.date.required;

    const minAge = 5;
    const maxAge = 110;

    const now = moment();
    const newDate = moment(date, 'DD-MM-YYYY');

    const userAge = now.diff(newDate, 'years');

    if (userAge < minAge) return language.errors.date.minAge;
    if (userAge > maxAge) return language.errors.date.maxAge;

    return '';
  }

  return {
    useValidations,
    emailValidator,
    emailComparation,
    fistNameValidator,
    lastNameValidator,
    strip,
    cpfValidator,
    contactNumberValidator,
    dateValidation,
  };
}
