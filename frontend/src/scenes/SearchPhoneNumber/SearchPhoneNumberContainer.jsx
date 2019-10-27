import React, { useState, useCallback } from 'react'
import { useApiCall } from '../../hooks'
import { searchPhoneNumber } from '../../services'
import SearchPhoneNumber from './SearchPhoneNumber'

const SearchPhoneNumberContainer = () => {
  const [searchKey, setSearchKey] = useState('')
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const { isLoading, isSuccess, error, call } = useApiCall(searchPhoneNumber)

  const onSearch = useCallback(async ({ target: { value }}) => {
    if (value) {
      const result = await call(value)
      setPhoneNumbers(result || [])
    } else {
      setPhoneNumbers([])
    }
    setSearchKey(value)
  }, [])

  return (
    <SearchPhoneNumber
      searchKey={searchKey}
      onSearch={onSearch}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
      phoneNumbers={phoneNumbers}
    />
  )
}

export default SearchPhoneNumberContainer