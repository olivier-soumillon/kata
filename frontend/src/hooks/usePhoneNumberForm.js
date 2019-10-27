import { useState, useCallback } from 'react'
import useValidation from './useValidation'
import { isNotEmpty, isPhoneNumber} from '../utils'

const usePhoneNumberForm = () => {
  const [firstName, setFirstName] = useState('')
  const [firstNameErrors, validateFirstName] = useValidation({
    'First name is required !': isNotEmpty
  })

  const [lastName, setLastName] = useState('')
  const [lastNameErrors, validateLastName] = useValidation({
    'Last name is required !': isNotEmpty
  })

  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberErrors, validatePhoneNumber] = useValidation({
    'Phone number is required !': isNotEmpty,
    'Phone number should be in that format +99 99 9999999': isPhoneNumber
  })

  const setFormData = useCallback(({ nextFirstName, nextLastName, nextPhoneNumber }) => {
    setFirstName(nextFirstName)
    setLastName(nextLastName)
    setPhoneNumber(nextPhoneNumber)
  }, [])

  const onFirstNameChange = useCallback(({ target: { value }}) => {
    validateFirstName(value)
    setFirstName(value)
  }, [validateFirstName])

  const onLastNameChange = useCallback(({ target: { value }}) => {
    validateLastName(value)
    setLastName(value)
  }, [validateLastName])

  const onPhoneNumberChange = useCallback(({ target: { value }}) => {
    validatePhoneNumber(value)
    setPhoneNumber(value)
  }, [validatePhoneNumber])

  const validateFormData = useCallback(() => {
    return validateFirstName(firstName) &
      validateLastName(lastName) &
      validatePhoneNumber(phoneNumber)
  }, [firstName, lastName, phoneNumber, validateFirstName, validateLastName, validatePhoneNumber])

  return {
    firstName,
    lastName,
    phoneNumber,
    firstNameErrors,
    lastNameErrors,
    phoneNumberErrors,
    onFirstNameChange,
    onLastNameChange,
    onPhoneNumberChange,
    validateFormData,
    setFormData
  }
}

export default usePhoneNumberForm