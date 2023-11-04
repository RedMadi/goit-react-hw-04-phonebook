import React, { useState } from 'react';
import { FormContainer } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          required
        />
        <label>Number</label>
        <input
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          required
        />
        <button>Add contact</button>
      </FormContainer>
    </div>
  );
};

export default Form;
