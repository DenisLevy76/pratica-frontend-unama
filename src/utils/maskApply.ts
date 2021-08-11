import { CleaveOptions } from 'cleave.js/options';

export enum MaskTypes {
  phoneNumber = 'PHONE_NUMBER',
  smartphoneNumber = 'SMARTPHONE_NUMBER',
  cpf = 'CPF',
  date = 'DATE',
}

export function maskApply(mask: MaskTypes): CleaveOptions {
  switch (mask) {
    case MaskTypes.phoneNumber:
      return {
        numericOnly: true,
        delimiters: ['(', ')', ' ', '-'],
        blocks: [0, 2, 0, 4, 4],
      };
    case MaskTypes.smartphoneNumber:
      return {
        numericOnly: true,
        delimiters: ['(', ')', ' ', '-'],
        blocks: [0, 2, 0, 5, 4],
      };
    case MaskTypes.cpf:
      return {
        numericOnly: true,
        delimiters: ['.', '.', '-'],
        blocks: [3, 3, 3, 2],
      };

    case MaskTypes.date:
      return {
        date: true,
        delimiter: '/',
        datePattern: ['d', 'm', 'Y'],
      };
    default:
      return {};
  }
}
