//import { useState } from "react";
//import { nanoid } from "nanoid";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  FormPhoneBook,
  LabelPhoneBook,
  InputPhoneBook,
  ButtonPhoneBook,
  ErrorPhoneBook,
} from "./Form.styled";

export default function ContactForm({ formSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Too Short!")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        number: Yup.number().min(2, "Too Short!").required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          formSubmit(values);
          setSubmitting(false);

          resetForm({ name: "", number: "" });
        }, 400);
      }}
    >
      {(formik) => (
        <FormPhoneBook>
          <LabelPhoneBook htmlFor="name">Name</LabelPhoneBook>
          <InputPhoneBook
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" //Без цього патерна не працює))))))))
            type="text"
            autoComplete="off"
            placeholder="Jacob Mercer"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorPhoneBook>{formik.errors.name}</ErrorPhoneBook>
          ) : null}

          <LabelPhoneBook htmlFor="number">Number</LabelPhoneBook>
          <InputPhoneBook
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            type="text"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoComplete="off"
            placeholder="444-43-45"
          />
          {formik.touched.number && formik.errors.number ? (
            <ErrorPhoneBook>{formik.errors.number}</ErrorPhoneBook>
          ) : null}

          <ButtonPhoneBook type="submit">Add contact</ButtonPhoneBook>
        </FormPhoneBook>
      )}
    </Formik>
  );
}
/* export default function ContactForm({ formSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleNameChange = (event) => {
    event.preventDefault();

    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        console.log(`Field type name - ${name} is not processed`);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    formSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormPhoneBook onSubmit={handleSubmit}>
      <LabelPhoneBook htmlFor={nameInputId}>
        Name
        <InputPhoneBook
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
        />
      </LabelPhoneBook>
      <LabelPhoneBook htmlFor={numberInputId}>
        Number
        <InputPhoneBook
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          value={number}
          onChange={handleNameChange}
          id={numberInputId}
        />
      </LabelPhoneBook>
      <ButtonPhoneBook type="submit">Add contact</ButtonPhoneBook>
    </FormPhoneBook>
  );
} */
