import React, { useCallback } from 'react'
import { useApiCall, usePhoneNumberForm } from '../../hooks'
import AddPhoneNumber from './AddPhoneNumber'
import { createPhoneNumber } from '../../services'

const AddPhoneNumberContainer = () => {
  const {lastName, firstName, phoneNumber, ...eventHandlers} = usePhoneNumberForm()
  const { isLoading, isSuccess, error, call } = useApiCall(createPhoneNumber)

  const onSubmit = useCallback(async () => {
    const params = {
      lastName,
      firstName,
      phoneNumber
    }

    await call(params)
  }, [lastName, firstName, phoneNumber])

  return (
    <AddPhoneNumber
      lastName={lastName}
      firstName={firstName}
      phoneNumber={phoneNumber}
      {...eventHandlers}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
      onSubmit={onSubmit}
    />
  )
}

export default AddPhoneNumberContainer