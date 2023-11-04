import React from 'react';
import { ListStyled } from './ContactItem.styled';

export const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <ListStyled>
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </ListStyled>
  );
};
