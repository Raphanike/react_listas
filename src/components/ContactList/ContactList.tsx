import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeContact } from '../../redux/contactsSlice'
import { List, ListItem, Button } from './ContactList.styled'

// Interface de Contato
interface Contato {
  id: string
  name: string
  email: string
  phone: string
}

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.list)
  const dispatch = useDispatch()

  const handleRemove = (id: string) => {
    dispatch(removeContact(id))
  }

  return (
    <List>
      {contacts.map((contact: Contato) => (
        <ListItem key={contact.id}>
          <div>
            <strong>{contact.name}</strong>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
          <Button onClick={() => handleRemove(contact.id)}>Remove</Button>
        </ListItem>
      ))}
    </List>
  )
}

export default ContactList
