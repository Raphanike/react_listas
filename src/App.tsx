import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import ContactList from './components/ContactList/ContactList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Contatos</h1>
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
