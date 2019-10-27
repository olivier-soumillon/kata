import React, { useCallback, useEffect } from 'react'
import { getPhoneNumber, updatePhoneNumber } from '../../services'
import { useApiCall, usePhoneNumberForm } from '../../hooks'
import { useParams } from 'react-router-dom'
import EditPhoneNumber from './EditPhoneNumber'
import AddPhoneNumber from '../AddPhoneNumber/AddPhoneNumberContainer'

const EditPhoneNumberContainer = () => {
  const { phoneNumberID } = useParams()

  const {
    lastName,
    firstName,
    phoneNumber,
    lastNameErrors,
    firstNameErrors,
    phoneNumberErrors,
    validateFormData,
    setFormData,
    ...eventHandlers
  } = usePhoneNumberForm()

  const [isUpdating, isUpdated, updateError, update] = useApiCall(updatePhoneNumber)
  const [isFetching, isFetched, fetchError, fetch] = useApiCall(getPhoneNumber)

  useEffect( () => {
    const initialiseData = async () => {
      const phoneNumber = await fetch(phoneNumberID)

      setFormData({
        nextFirstName: phoneNumber.firstName,
        nextLastName: phoneNumber.lastName,
        nextPhoneNumber: phoneNumber.phoneNumber
      })
    }
    initialiseData()
  }, [fetch])

  const onSubmit = useCallback(async () => {
    if (!validateFormData()) {
      return
    }

    const params = {
      phoneNumberID,
      lastName,
      firstName,
      phoneNumber
    }

    await update(params)
  }, [phoneNumberID, lastName, firstName, phoneNumber, update])

  return (
    <EditPhoneNumber
      lastName={lastName}
      firstName={firstName}
      phoneNumber={phoneNumber}
      lastNameError={lastNameErrors[0]}
      firstNameError={firstNameErrors[0]}
      phoneNumberError={phoneNumberErrors[0]}
      {...eventHandlers}
      isUpdating={isUpdating}
      isUpdated={isUpdated}
      updateError={updateError}
      isFetching={isFetching}
      isFetched={isFetched}
      fetchError={fetchError}
      onSubmit={onSubmit}
    />
  )
}

export default EditPhoneNumberContainer