import { ChangeEvent, useEffect, useState } from 'react';
import InputComponent from '../InputComponent';
import { ptBR, Settings } from '../../settings/ptBR';
import SelectComponent from '../SelectComponent';
import { maskApply, MaskTypes } from '../../utils/maskApply';
import RadioGroup from '../RadioGroup';
import RadioInputComponent from '../RadioInputComponent';
import Button from '../Button';
import './styles.css';
// import useForm from '../../hooks/useForm';

let language: Settings = ptBR;

const initialState = {
  email: '',
  fistName: '',
  lastName: '',
  cpf: '',
  phone: {
    number: '',
    type: 'smartphone',
  },
  gender: '',
  birthdate: '',
};

export default function SignupForm() {
  const [formData, setFormData] = useState(initialState);
  // const { formData, formErros, handleInputOnChange, handleSubmit } = useForm();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const [emailConfirm, setEmailConfirm] = useState<string>('');

  function handleInputOnChange(e: ChangeEvent<any>) {
    const { name, value } = e.target;
    console.log('eventname: ', name, 'value:', value);
    setFormData({ ...formData, [name]: value });
  }

  function handleSetPhoneTypeSelection(
    event: ChangeEvent<HTMLSelectElement>
  ): void {
    const value = event.target.value;
    setFormData({
      ...formData,
      phone: { ...formData.phone, type: value, number: '' },
    });
  }

  return (
    <form
      name="form1"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
      }}
      className="signup-form__container"
    >
      <InputComponent
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputOnChange}
        label={language.labels.email}
        placeholder={language.placeholders.email}
        required
        options={{}}
      />
      <InputComponent
        id="emailConfirm"
        type="email"
        name="emailConfirm"
        value={emailConfirm}
        onChange={(e) => setEmailConfirm(e.target.value)}
        label={language.labels.emailConfirm}
        placeholder={language.placeholders.emailConfirm}
        required
        options={{}}
      />
      <InputComponent
        id="firstName"
        type="text"
        name="firstName"
        value={formData.fistName}
        onChange={(e) => setFormData({ ...formData, fistName: e.target.value })}
        label={language.labels.firstName}
        placeholder={language.placeholders.firstName}
        required
        options={{}}
      />
      <InputComponent
        id="lastName"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        label={language.labels.lastName}
        placeholder={language.placeholders.lastName}
        required
        options={{}}
      />
      <InputComponent
        id="cpf"
        type="text"
        name="cpf"
        value={formData.cpf}
        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
        label={language.labels.cpf}
        placeholder={language.placeholders.cpf}
        required
        options={maskApply(MaskTypes.cpf)}
      />
      <fieldset className="phone__container">
        <SelectComponent
          id="phoneType"
          name="phoneType"
          value={formData.phone.type}
          label={language.labels.phone.type}
          onChange={handleSetPhoneTypeSelection}
          options={[
            { id: 1, value: 'smartphone', children: 'Celular' },
            { id: 2, value: 'telephone', children: 'Fixo' },
          ]}
        />
        <InputComponent
          id="smartphoneNumber"
          type="text"
          name="phoneNumber"
          value={formData.phone.number}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: { ...formData.phone, number: e.target.value },
            })
          }
          label={language.labels.phone.smartphone}
          placeholder={language.placeholders.phone.smartphone}
          required
          options={maskApply(MaskTypes.smartphoneNumber)}
          className={formData.phone.type === 'smartphone' ? '' : 'display-none'}
        />
        <InputComponent
          id="phoneNumber"
          type="text"
          name="phoneNumber2"
          value={formData.phone.number}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: { ...formData.phone, number: e.target.value },
            })
          }
          label={language.labels.phone.telephone}
          placeholder={language.placeholders.phone.telephone}
          required
          options={maskApply(MaskTypes.phoneNumber)}
          className={formData.phone.type === 'telephone' ? '' : 'display-none'}
        />
      </fieldset>
      <fieldset className="gender-birthdate__container">
        <RadioGroup label={language.labels.gender}>
          <RadioInputComponent
            id="genderFelame"
            label="Feminino"
            name="gender"
            value="f"
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
            defaultChecked
          />
          <RadioInputComponent
            id="genderMale"
            label="Masculino"
            name="gender"
            value="m"
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          />
          <RadioInputComponent
            id="genderOthers"
            label="Outros"
            name="gender"
            value="o"
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          />
        </RadioGroup>
        <InputComponent
          id="birthdate"
          type="text"
          name="birthdate"
          value={formData.birthdate}
          onChange={(e) =>
            setFormData({ ...formData, birthdate: e.target.value })
          }
          label={language.labels.birthdate}
          placeholder={language.placeholders.birthdate}
          required
          options={maskApply(MaskTypes.date)}
        />
      </fieldset>

      <Button>Concluir</Button>
    </form>
  );
}
