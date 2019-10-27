import React from 'react'
import { Link } from 'react-router-dom'
import PhoneNumberForm from '../../components/PhoneNumberForm'

const AddPhoneNumber = (props) => {
  return (
    <>
      <h2>Add</h2>
      <PhoneNumberForm {...props} />
      <Link to="/">Back</Link>
    </>
  )
}

export default AddPhoneNumber