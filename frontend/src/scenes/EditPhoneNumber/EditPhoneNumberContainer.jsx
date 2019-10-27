import React, { useCallback } from 'react'
import { useApiCall, usePhoneNumberForm } from '../../hooks'
import EditPhoneNumber from './EditPhoneNumber'
import { updatePhoneNumber } from '../../services'

const EditPhoneNumberContainer = () => {
  const {lastName, firstName, phoneNumber, ...eventHandlers} = usePhoneNumberForm()
  const { isLoading, isSuccess, error, call } = useApiCall(updatePhoneNumber)

  const onSubmit = useCallback(async () => {
    const params = {
      phoneNumberID: '',
      lastName,
      firstName,
      phoneNumber
    }

    await call(params)
  }, [lastName, firstName, phoneNumber])

  return (
    <EditPhoneNumber
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

export default EditPhoneNumberContainer