


import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { BiSearchAlt } from 'react-icons/bi';
import {
  Header, SearchForm,
  SearchFormBtn, SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const initialValue = { value: '' };

  function handleSubmit(values, { resetForm }) {
    onSubmit(values.value.trim());
    resetForm();
  }

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ isSubmitting }) => {
        return (
          <Header>
            <SearchForm>
              <SearchFormBtn type="submit" disabled={isSubmitting}>
                <BiSearchAlt size={'70%'} color={'#0e7545'} />
              </SearchFormBtn>

              <SearchFormInput
                name="value"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </SearchForm>
          </Header>
        );
      }}
    </Formik>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

// {/* <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header> */}