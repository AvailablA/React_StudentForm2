import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const [fName, fSetName] = useState("");
  const [nameError, setNameError] = useState("");

  const inputName = (input) => {
    setName(input.target.value);
    setNameError("");
  }

  const [gender, setGender] = useState("");
  const [fGender, fSetGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const inputGender = (event) => {
    setGender(event.target.value);
    setGenderError("");
  }

  const [email, setEmail] = useState("");
  const [fEmail, fSetEmail] = useState("");
  const [emailError, setEmailError] = useState('');

  const inputEmail = (input) => {
    const value = input.target.value;
    setEmail(value);
    setEmailError('');

    // Email validation
    const emailRegex = /^[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email Id");
    } else if (value.toLowerCase().endsWith('@yahoo.com')) {
      setEmailError("Yahoo Mail addresses are not allowed");
    }
  };

  const [contact, setContact] = useState('');
  const [fContact, fSetContact] = useState('');
  const [contactError, setContactError] = useState('');

  const inputContact = (input) => {
    const value = input.target.value;
    setContact(value);
    setContactError('');
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    // Validation checks for each field
    if (name.length < 1) {
      setNameError("Please enter your name...");
      fSetName("");
    }

    if (gender.length < 1) {
      setGenderError("Please select your gender");
      fSetGender("");
    }

    if (email.length < 1) {
      setEmailError("Please enter your email");
    }

    if (contact.length !== 10) {
      setContactError("Please enter a valid 10-digit contact number");
      fSetContact("");
    }

    if (name && gender && email && emailError === "" && contact.length === 10) {
      fSetName(name);
      fSetGender(gender);
      fSetEmail(email);
      fSetContact(contact);
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <>
      <form>
        <h1>Student Form</h1>

        <input type='text' placeholder='Enter your name'
          onChange={inputName}
          value={name}
        />
        {nameError && <p className='error'>{nameError}</p>}

        <select onChange={inputGender} value={gender} placeholder='Select Gender'>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {genderError && <p className='error'>{genderError}</p>}

        <input type='text' placeholder='Enter your email Id'
          onChange={inputEmail}
          value={email}
        />
        {emailError && <p className='error'>{emailError}</p>}

        <input type='number' placeholder='Enter your Contact number'
          onChange={inputContact}
          value={contact}
        />
        {contactError && <p className='error'>{contactError}</p>}

        <hr />
        <h2>Please check the details</h2>
        <h4>Name: {fName}</h4>
        <h4>Gender: {fGender}</h4>
        <h4>Email: {fEmail}</h4>
        <h4>Contact No.: {fContact}</h4>
        <hr />
        <button type='submit' onClick={onSubmit}>SUBMIT</button>
      </form>
      {formSubmitted && <h3>The Student form is submitted 👍 👍</h3>}
    </>
  );
}

export default App;
