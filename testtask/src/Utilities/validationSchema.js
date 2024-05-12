import * as Yup from 'yup'

const PHONE_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/;
const CARD_EXPIRY_PATTERN = /^(0[1-9]|1[0-2])\/\d{2}$/;
const CVV_PATTERN = /^\d{3}$/;
export const validationSchema = Yup.object({
  firstName: Yup.string().min(2).required('Must be more than 2 symbols'),
  lastName: Yup.string().min(2).required('Must be more than 2 symbols'),
  organisation: Yup.string().min(2).required('Must be more than 2 symbols'),
  email: Yup.string().
  email('Invalid email address').
  required('Email is required'),
  phone: Yup.string().
  matches(PHONE_TEMPLATE, 'Must be in format xxx-xxx-xxxx').
  required(),
  country: Yup.string().min(2).required('Country is required'),
  city: Yup.string().min(2).required('City is required'),
  area: Yup.string().min(2).required('State/Region is required'),
  address: Yup.string().min(2).required('Address is required'),
  postCode: Yup.string().min(2).required('Post code is required'),
  firstNumbers: Yup.string().test(
    'len',
    'Должно быть 4 цифры',
    val => val.length === 4 && /^\d+$/.test(val),
  ).required('Обязательное поле'),
  secondNumbers: Yup.string().test(
    'len',
    'Должно быть 4 цифры',
    val => val.length === 4 && /^\d+$/.test(val),
  ).required('Обязательное поле'),
  thirdNumbers: Yup.string().test(
    'len',
    'Должно быть 4 цифры',
    val => val.length === 4 && /^\d+$/.test(val),
  ).required('Обязательное поле'),
  firthNumbers: Yup.string().test(
    'len',
    'Должно быть 4 цифры',
    val => val.length === 4 && /^\d+$/.test(val),
  ).required('Обязательное поле'),
  cardExpiredData: Yup.string()
  .matches(CARD_EXPIRY_PATTERN, 'Неверный формат даты')
  .required('Срок действия карты обязателен'),
  CVV: Yup.string()
  .matches(CVV_PATTERN, 'CVV должен состоять из 3 цифр')
  .required('CVV обязателен'),
})