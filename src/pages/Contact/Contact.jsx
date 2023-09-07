import React from "react";
import s from "./style.module.scss";
import ContactDetails from "../../components/ContactDetails/ContactDetails";

function Contact(props) {
  return (
    <div className={s.container}>
      <ContactDetails />
    </div>
  );
}

export default Contact;
