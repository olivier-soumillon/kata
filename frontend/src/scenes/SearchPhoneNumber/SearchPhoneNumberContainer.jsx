import React, { useState, useCallback, useEffect } from 'react'
import { searchPhoneNumber } from '../../services'
import { useApiCall } from '../../hooks'
import SearchPhoneNumber from './SearchPhoneNumber'

const SearchPhoneNumberContainer = ({ searchKey, setSearchKey }) => {
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const [isSearching, hasSearched, searchError, search] = useApiCall(searchPhoneNumber)

  const performSearch = useCallback(async (searchKey) => {
    if (searchKey) {
      const result = await search(searchKey)
      setPhoneNumbers(result || [])
    } else {
      setPhoneNumbers([])
    }
  }, [])

  const onSearch = useCallback(async ({ target: { value }}) => {
    performSearch(value)
    setSearchKey(value)
  }, [])

  useEffect(() => {
    performSearch(searchKey)
  }, [])

  return (
    <SearchPhoneNumber
      searchKey={searchKey}
      onSearch={onSearch}
      isSearching={isSearching}
      hasSearched={hasSearched}
      searchError={searchError}
      phoneNumbers={phoneNumbers}
    />
  )
}

export default SearchPhoneNumberContainer