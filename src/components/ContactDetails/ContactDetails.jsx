import React from "react";
import s from "./style.module.scss";

function ContactDetails(props) {
  return (
    <div className={s.container} id="formations">
      <h3>nous contacter</h3>
      <p>
        Pour nous contacter, cliquez sur ce{" "}
        <a href="mailto:cd11ffss@hotmail.com">lien</a>
      </p>
    </div>
  );
}

export default ContactDetails;
