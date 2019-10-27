import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'
import FullName from './FullName'
import PhoneNumber from './PhoneNumber'
import Actions from './Actions'

const PhoneNumberEntry = ({ id, lastName, firstName, phoneNumber }) => (
  <Wrapper>
    <FullName>{firstName} {lastName}</FullName>
    <PhoneNumber>{phoneNumber}</PhoneNumber>
    <Actions>
      <Link to={`/edit/${id}`}>Edit</Link>
    </Actions>
  </Wrapper>
)

PhoneNumberEntry.propTypes = {
  id: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
}

export default PhoneNumberEntry