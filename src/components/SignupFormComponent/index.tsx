import { ChangeEvent } from 'react';
import InputComponent from '../InputComponent';
import SelectComponent from '../SelectComponent';
import { maskApply } from '../../utils/maskApply';
import RadioGroup from '../RadioGroup';
import RadioInputComponent from '../RadioInputComponent';
import Button from '../Button';
import './styles.css';
import useForm from '../../hooks/useForm';
import MaskInputComponent from '../MaskInputComponent';
import { useSettingsContext } from '../../hooks/useSettingsContext';
import { PhoneType } from '../../types/enums/PhoneTypes';
import { Genders } from '../../types/enums/Genders';
import { MaskTypes } from '../../types/enums/MaskTypes';

export default function SignupForm() {
  const {
    formData,
    formErros,
    handleInputOnChange,
    handleValidationOnBlur,
    handleSubmit,
    setFormData,
  } = useForm();

  const { language } = useSettingsContext();

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
      onSubmit={handleSubmit}
      className="signup-form__container"
    >
      <InputComponent
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputOnChange}
        error={!!formErros.email}
        helperText={formErros.email}
        label={language.labels.email}
        onBlur={handleValidationOnBlur}
        placeholder={language.placeholders.email}
      />
      <InputComponent
        id="emailConfirm"
        type="email"
        name="emailConfirm"
        value={formData.emailConfirm}
        error={!!formErros.emailConfirm}
        helperText={formErros.emailConfirm}
        onChange={handleInputOnChange}
        label={language.labels.emailConfirm}
        onBlur={handleValidationOnBlur}
        placeholder={language.placeholders.emailConfirm}
      />

      <InputComponent
        id="firstName"
        type="text"
        name="firstName"
        value={formData.firstName}
        error={!!formErros.firstName}
        helperText={formErros.firstName}
        onChange={handleInputOnChange}
        label={language.labels.firstName}
        onBlur={handleValidationOnBlur}
        placeholder={language.placeholders.firstName}
      />
      <InputComponent
        id="lastName"
        type="text"
        name="lastName"
        value={formData.lastName}
        error={!!formErros.lastName}
        helperText={formErros.lastName}
        onChange={handleInputOnChange}
        label={language.labels.lastName}
        onBlur={handleValidationOnBlur}
        placeholder={language.placeholders.lastName}
      />
      <MaskInputComponent
        id="cpf"
        type="text"
        name="cpf"
        value={formData.cpf}
        error={!!formErros.cpf}
        helperText={formErros.cpf}
        onChange={handleInputOnChange}
        label={language.labels.cpf}
        onBlur={handleValidationOnBlur}
        placeholder={language.placeholders.cpf}
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
            { id: 1, value: PhoneType.smartphone, children: 'Celular' },
            { id: 2, value: PhoneType.telephone, children: 'Fixo' },
          ]}
        />
        <MaskInputComponent
          id="smartphoneNumber"
          type="text"
          name="phone"
          value={formData.phone.number}
          error={!!formErros.number}
          helperText={formErros.number}
          onBlur={handleValidationOnBlur}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: { ...formData.phone, number: e.target.value },
            })
          }
          label={language.labels.phone.smartphone}
          placeholder={language.placeholders.phone.smartphone}
          options={maskApply(MaskTypes.smartphoneNumber)}
          className={formData.phone.type === 'smartphone' ? '' : 'display-none'}
        />
        <MaskInputComponent
          id="phoneNumber"
          type="text"
          name="phone"
          value={formData.phone.number}
          error={!!formErros.number}
          onBlur={handleValidationOnBlur}
          helperText={formErros.number}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: { ...formData.phone, number: e.target.value },
            })
          }
          label={language.labels.phone.telephone}
          placeholder={language.placeholders.phone.telephone}
          options={maskApply(MaskTypes.phoneNumber)}
          className={formData.phone.type === 'telephone' ? '' : 'display-none'}
        />
      </fieldset>
      <fieldset className="gender-birthdate__container">
        <RadioGroup label={language.labels.gender.title}>
          <RadioInputComponent
            id="genderFelame"
            label={language.labels.gender.female}
            name="gender"
            value={Genders.female}
            onChange={handleInputOnChange}
            defaultChecked
          />
          <RadioInputComponent
            id="genderMale"
            label={language.labels.gender.male}
            name="gender"
            value={Genders.male}
            onChange={handleInputOnChange}
          />
          <RadioInputComponent
            id="genderOthers"
            label={language.labels.gender.others}
            name="gender"
            value={Genders.others}
            onChange={handleInputOnChange}
          />
        </RadioGroup>
        <MaskInputComponent
          id="birthdate"
          type="text"
          name="birthdate"
          value={formData.birthdate}
          error={!!formErros.birthdate}
          helperText={formErros.birthdate}
          onBlur={handleValidationOnBlur}
          onChange={handleInputOnChange}
          label={language.labels.birthdate}
          placeholder={language.placeholders.birthdate}
          options={maskApply(MaskTypes.date)}
        />
      </fieldset>

      <Button>Concluir</Button>
    </form>
  );
}
