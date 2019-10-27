import React from 'react'
import { Link } from 'react-router-dom'
import PhoneNumberForm from '../../components/PhoneNumberForm'

const EditPhoneNumber = (props) => {
  return (
    <>
      <h2>Edit</h2>
      <PhoneNumberForm {...props} />
      <Link to="/">Back</Link>
    </>
  )
}

export default EditPhoneNumber