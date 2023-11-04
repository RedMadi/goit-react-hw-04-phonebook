import { ContactListItem } from 'components/ContactItem/ContactItem';
import React, { Component } from 'react';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactsList;

// <ul>
//   {contacts.map(contact => {
//     return (
//       <ContactListItem
//         key={contact.id}
//         contact={contact}
//         deleteContact={deleteContact}
//       />
//     );
//   })}
// </ul>
