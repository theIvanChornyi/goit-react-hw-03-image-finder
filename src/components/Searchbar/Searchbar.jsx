import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  SearchForm,
  FormBtn,
  FormBtnLabel,
  SearchFormInp,
} from './Searchbar.styled';

export const Searchbar = () => (
  <Header>
    <Formik
      initialValues={{ image: '' }}
      onSubmit={({ image }) => {
        console.log(image.trim());
      }}
    >
      <SearchForm>
        <FormBtn type="submit">
          <FormBtnLabel aria-label="Search image button">
            <ImSearch />
          </FormBtnLabel>
        </FormBtn>
        <SearchFormInp
          className="input"
          type="text"
          name="image"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Formik>
  </Header>
);
