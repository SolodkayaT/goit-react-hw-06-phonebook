import React from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import Layout from "../Layout/Layout";
import styles from "./App.module.css";

export default function App() {
  return (
    <Layout>
      <section className={styles.section}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </Layout>
  );
}
