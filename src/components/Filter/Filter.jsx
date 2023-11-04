import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filterContacts }) => {
  const handleChange = ({ target: { value } }) => {
    filterContacts(value);
  };
  return (
    <>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" onChange={handleChange} name="name" />
    </>
  );
};
