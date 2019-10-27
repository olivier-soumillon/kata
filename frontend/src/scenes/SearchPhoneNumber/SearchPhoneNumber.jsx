import React from 'react'
import { Link } from 'react-router-dom'
import PhoneNumberEntry from './PhoneNumberEntry'
import SearchBar from './SearchBar'

const renderPhoneNumber = ({ _id, firstName, lastName, phoneNumber }) => (
  <PhoneNumberEntry
    key={`phoneNumberEntry-${_id}`}
    id={_id}
    firstName={firstName}
    lastName={lastName}
    phoneNumber={phoneNumber}
  />
)

const SearchPhoneNumber = ({ searchKey, onSearch, isSearching, searchError, phoneNumbers }) => {
  return (
    <div>
      <h2>Search</h2>
      <SearchBar onSearch={onSearch} searchKey={searchKey}/>
      { isSearching && 'searching ...' }
      { searchError ? JSON.stringify(searchError) : null }
      {
        phoneNumbers.map(renderPhoneNumber)
      }
      <Link to={`/add`}>Add</Link>
    </div>
  )
}

export default SearchPhoneNumber