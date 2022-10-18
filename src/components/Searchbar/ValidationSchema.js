import * as yup from 'yup';

export const SearchSchema = yup.object().shape({
  image: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Cat, Candy fridge, Gelatine'
    ),
});
