import React from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import { Provider } from 'react-redux'
import store from './redux/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Contatos</h1>
        <ContactForm />
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
