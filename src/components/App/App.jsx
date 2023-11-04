import React, { useEffect, useState } from 'react';
import Form from 'components/Form/Form';
import { nanoid } from 'nanoid';
import ContactsList from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';

const App = () => {
  const defaultContacts = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem('contacts');
    return localData ? JSON.parse(localData) : defaultContacts;
  });
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const localData = JSON.parse(localStorage.getItem('contacts'));
  //   if (localData) {
  //     setContacts(localData);
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = dataByForm => {
    const contactName = dataByForm.name.toLowerCase();
    if (!/^[0-9-]+$/.test(dataByForm.number)) {
      alert('Please enter a valid numeric phone number.');
      return;
    }
    if (contacts.some(contact => contact.name.toLowerCase() === contactName)) {
      alert(
        `Contact with the name ${dataByForm.name} already exists in the phonebook.`
      );
      return;
    }
    const newContact = {
      ...dataByForm,
      id: nanoid(),
    };
    // setContacts(prevState => ({
    //   contacts: [newContact, ...prevState.contacts],
    // }));

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const filterContacts = filteredQuery => {
    setFilter(filteredQuery);
  };
  const deleteContact = id => {
    // setContacts(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };
  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={createContact} />
      </Section>
      <Section title="Contacts">
        <Filter filterContacts={filterContacts} />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};

export default App;
