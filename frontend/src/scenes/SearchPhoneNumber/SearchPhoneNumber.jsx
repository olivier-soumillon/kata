import React from 'react'

const renderPhoneNumber = ({ firstName, lastName, phoneNumber }) => (
  <div>
    <div>{firstName}</div>
    <div>{lastName}</div>
    <div>{phoneNumber}</div>
  </div>
)

const SearchPhoneNumber = ({ searchKey, onSearch, isLoading, error, phoneNumbers }) => {
  return (
    <div>
      <input type="text" onChange={onSearch} value={searchKey} />
      { isLoading && 'loading ...' }
      { error ? JSON.stringify(error) : null }
      {
        phoneNumbers.map(renderPhoneNumber)
      }
    </div>
  )
}

export default SearchPhoneNumber