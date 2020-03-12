import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { uuid } from "uuidv4";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id }) => (
        <ContactListItem key={uuid()} id={id} />
      ))}
    </ul>
  );
}

ContactList.defaultProps = {
  contacts: []
};

ContactList.propTypes = {
  contacts: PropTypes.array
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

export default connect(mapStateToProps)(ContactList);
