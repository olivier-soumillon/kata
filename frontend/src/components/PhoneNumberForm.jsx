import React from 'react'
import PropTypes from 'prop-types'
import InputField from './InputField'
import Label from './Label'
import FormRow from './FormRow'
import Error from './Error'

const PhoneNumberForm = (props) => (
  <form>
    <FormRow>
      <Label htmlFor="firstName">First name</Label>
      <InputField
        name="firstName"
        id="firstName"
        type="text"
        onChange={props.onFirstNameChange}
        value={props.firstName}
      />
      {props.firstNameError && <Error>{props.firstNameError}</Error>}
    </FormRow>
    <FormRow>
      <Label htmlFor="lastName">Last name</Label>
      <InputField
        name="lastName"
        id="lastName"
        type="text"
        onChange={props.onLastNameChange}
        value={props.lastName}
      />
      {props.lastNameError && <Error>{props.lastNameError}</Error>}
    </FormRow>
    <FormRow>
      <Label htmlFor="phoneNumber">Phone number</Label>
      <InputField
        name="phoneNumber"
        id="phoneNumber"
        type="tel"
        onChange={props.onPhoneNumberChange}
        value={props.phoneNumber}
      />
      {props.phoneNumberError && <Error>{props.phoneNumberError}</Error>}
    </FormRow>
    <button type="button" onClick={props.onSubmit}>
      Save !
    </button>
  </form>
)

PhoneNumberForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  firstNameError: PropTypes.string,
  lastNameError: PropTypes.string,
  phoneNumberError: PropTypes.string,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onPhoneNumberChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PhoneNumberForm