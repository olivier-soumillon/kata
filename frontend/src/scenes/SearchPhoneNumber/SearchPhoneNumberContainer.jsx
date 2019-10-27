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
  }, [search])

  const onSearch = useCallback(async ({ target: { value }}) => {
    performSearch(value)
    setSearchKey(value)
  }, [performSearch, setSearchKey])

  useEffect(() => {
    performSearch(searchKey)
  }, [performSearch, searchKey])

  const errorStr = searchError ? JSON.stringify(searchError) : null

  return (
    <SearchPhoneNumber
      searchKey={searchKey}
      onSearch={onSearch}
      isSearching={isSearching}
      hasSearched={hasSearched}
      searchError={searchError}
      phoneNumbers={phoneNumbers}
      error={errorStr}
    />
  )
}

export default SearchPhoneNumberContainer