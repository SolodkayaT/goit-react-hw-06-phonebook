import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";
import ContactListButton from "../ContactListButton/ContactListButton";

function ContactListItem({ name, phone, keys, onRemove }) {
  return (
    <>
      <li className={styles.contactItem} key={keys}>
        <p>
          {name} : {phone}
        </p>
      </li>
      <ContactListButton onRemoveContact={onRemove} />
    </>
  );
}

ContactListItem.defaultProps = {
  name: "",
  phone: "",
  keys: ""
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  keys: PropTypes.string,
  onRemove: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsActions.removeContact(ownProps.id))
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
