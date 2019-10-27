import React from 'react'

const PhoneNumberForm = ({
  firstName, onFirstNameChange, firstNameError,
  lastName, onLastNameChange, lastNameError,
  phoneNumber, onPhoneNumberChange, phoneNumberError
}) => (
  <form>
    <div>
      <label htmlFor="firstName">First name</label>
      <input
        name="firstName"
        id="firstName"
        type="text"
        onChange={onFirstNameChange}
        value={firstName}
      />
    </div>
    <div>
      <label htmlFor="lastName">Last name</label>
      <input
        name="lastName"
        id="lastName"
        type="text"
        onChange={onLastNameChange}
        value={lastName}
      />
    </div>
    <div>
      <label htmlFor="phoneNumber">Phone number</label>
      <input
        name="phoneNumber"
        id="phoneNumber"
        type="tel"
        onChange={onPhoneNumberChange}
        value={phoneNumber}
      />
    </div>
  </form>
)

export default PhoneNumberForm