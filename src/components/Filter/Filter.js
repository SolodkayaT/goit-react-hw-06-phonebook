import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        className={styles.filter}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </div>
  );
}

Filter.defaultProps = {
  value: ""
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func
};

const mapStateToProps = state => ({
  value: state.contacts.filter
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
