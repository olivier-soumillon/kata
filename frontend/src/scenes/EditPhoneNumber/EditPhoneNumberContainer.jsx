import React, { useCallback, useEffect } from 'react'
import { getPhoneNumber, updatePhoneNumber } from '../../services'
import { useApiCall, usePhoneNumberForm } from '../../hooks'
import { useParams } from 'react-router-dom'
import EditPhoneNumber from './EditPhoneNumber'

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

  const [isUpdating, , updateError, update] = useApiCall(updatePhoneNumber)
  const [isFetching, , fetchError, fetch] = useApiCall(getPhoneNumber)

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
  }, [fetch, phoneNumberID, setFormData])

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
  }, [phoneNumberID, lastName, firstName, phoneNumber, update, validateFormData])

  const fetchErrorStr = fetchError ? JSON.stringify(fetchError) : null
  const updateErrorStr = updateError ? JSON.stringify(updateError) : null

  return (
    <EditPhoneNumber
      lastName={lastName}
      firstName={firstName}
      phoneNumber={phoneNumber}
      lastNameError={lastNameErrors[0]}
      firstNameError={firstNameErrors[0]}
      phoneNumberError={phoneNumberErrors[0]}
      {...eventHandlers}
      isLoading={isFetching || isUpdating}
      error={fetchErrorStr || updateErrorStr}
      onSubmit={onSubmit}
    />
  )
}

export default EditPhoneNumberContainer