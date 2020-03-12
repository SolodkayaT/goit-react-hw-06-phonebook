import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsActions from "../../redux/contacts/contactsActions";
import ContactListItem from "../ContactListItem/ContactListItem";
import { uuid } from "uuidv4";
import ContactListButton from "../ContactListButton/ContactListButton";

function ContactList({ contacts, onRemove }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem contact={contact} key={uuid()}>
          <ContactListButton
            contact={contact}
            onRemoveContact={() => onRemove(contact.id)}
          />
        </ContactListItem>
      ))}
    </ul>
  );
}

ContactList.defaultProps = {
  contacts: [],
  onRemove: () => {}
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemove: PropTypes.func
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  return {
    contacts: visibleContacts
  };
};

const mapDispatchToProps = {
  onRemove: contactsActions.removeContact
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
