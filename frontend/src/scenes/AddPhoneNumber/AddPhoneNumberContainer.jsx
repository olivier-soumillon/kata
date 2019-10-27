import React, { useCallback } from 'react'
import { createPhoneNumber } from '../../services'
import { useApiCall, usePhoneNumberForm } from '../../hooks'
import AddPhoneNumber from './AddPhoneNumber'

const AddPhoneNumberContainer = () => {
  const {
    lastName,
    firstName,
    phoneNumber,
    lastNameErrors,
    firstNameErrors,
    phoneNumberErrors,
    validateFormData,
    ...eventHandlers
  } = usePhoneNumberForm()

  const [isLoading, isSuccess, error, call] = useApiCall(createPhoneNumber)

  const onSubmit = useCallback(async () => {
    if (!validateFormData()) {
      return
    }

    const params = {
      lastName,
      firstName,
      phoneNumber
    }

    await call(params)
  }, [lastName, firstName, phoneNumber, call])

  return (
    <AddPhoneNumber
      lastName={lastName}
      firstName={firstName}
      phoneNumber={phoneNumber}
      lastNameError={lastNameErrors[0]}
      firstNameError={firstNameErrors[0]}
      phoneNumberError={phoneNumberErrors[0]}
      {...eventHandlers}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
      onSubmit={onSubmit}
    />
  )
}

export default AddPhoneNumberContainer