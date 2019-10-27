import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddPhoneNumber from './scenes/AddPhoneNumber'
import EditPhoneNumber from './scenes/EditPhoneNumber'
import SearchPhoneNumber from './scenes/SearchPhoneNumber'

const App = ({ searchKey, setSearchKey }) => {
  return (
    <>
      <h1>PhoneBook</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/edit/:phoneNumberID">
            <EditPhoneNumber />
          </Route>
          <Route path="/add">
            <AddPhoneNumber/>
          </Route>
          <Route path="/">
            <SearchPhoneNumber
              searchKey={searchKey}
              setSearchKey={setSearchKey}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
