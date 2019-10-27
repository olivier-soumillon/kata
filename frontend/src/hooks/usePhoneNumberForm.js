import { useState, useCallback } from 'react'

const usePhoneNumberForm = ({ firstName: initFirstName, lastName: initLastName, phoneNumber: initPhoneNumber } = {}) => {
  const [firstName, setFirstName] = useState(initFirstName)
  const [lastName, setLastName] = useState(initLastName)
  const [phoneNumber, setPhoneNumber] = useState(initPhoneNumber)

  const onFirstNameChange = useCallback(({ target: { value }}) => {
    setFirstName(value)
  }, [])

  const onLastNameChange = useCallback(({ target: { value }}) => {
    setLastName(value)
  }, [])

  const onPhoneNumberChange = useCallback(({ target: { value }}) => {
    setPhoneNumber(value)
  }, [])

  return {
    firstName,
    lastName,
    phoneNumber,
    onFirstNameChange,
    onLastNameChange,
    onPhoneNumberChange
  }
}

export default usePhoneNumberForm