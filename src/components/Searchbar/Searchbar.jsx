import { Formik, ErrorMessage } from 'formik';
import { ImSearch } from 'react-icons/im';

import { SearchSchema } from './ValidationSchema';
import {
  Header,
  SearchForm,
  FormBtn,
  FormBtnLabel,
  SearchFormInp,
} from './Searchbar.styled';

export const Searchbar = ({ getImages }) => (
  <Header>
    <Formik
      validationSchema={SearchSchema}
      initialValues={{ image: '' }}
      onSubmit={({ image }) => {
        getImages(image.trim());
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
        <ErrorMessage component="div" name="image" />
      </SearchForm>
    </Formik>
  </Header>
);
