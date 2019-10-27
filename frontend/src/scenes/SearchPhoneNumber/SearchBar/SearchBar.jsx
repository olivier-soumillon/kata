import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import Label from '../../../components/Label'
import InputField from '../../../components/InputField'

const SearchBar = ({ searchKey, onSearch }) => (
  <Wrapper>
    <Label htmlFor="searchKey">Search</Label>
    <InputField
      id="searchKey"
      type="text"
      onChange={onSearch}
      value={searchKey}
    />
  </Wrapper>
)

SearchBar.propTypes = {
  searchKey: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default SearchBar