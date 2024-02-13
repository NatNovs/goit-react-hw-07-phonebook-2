import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.phonebook.contacts.items;
export const selectFilter = store => store.phonebook.filter;
export const selectisLoading = store => store.phonebook.contacts.isLoading;
export const selectError = store => store.phonebook.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        contact.phone.includes(filter)
    );
  }
);