import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeContact } from '../../redux/contactsSlice'
import { List, ListItem, Button } from './ContactList.styled'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.list)
  const dispatch = useDispatch()

  const handleRemove = (id: string) => {
    dispatch(removeContact(id))
  }

  return (
    <List>
      {contacts.map(
        (contact: {
          id: React.Key | null | undefined
          name:
            | string
            | number
            | boolean
            | React.ReactElement<
                unknown,
                string | React.JSXElementConstructor<any>
              >
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined
          email:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined
          phone:
            | string
            | number
            | boolean
            | React.ReactElement<
                unknown,
                string | React.JSXElementConstructor<any>
              >
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined
        }) => (
          <ListItem key={contact.id}>
            <div>
              <strong>{contact.name}</strong>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
            <Button onClick={() => handleRemove(contact.id as string)}>
              Remove
            </Button>
          </ListItem>
        )
      )}
    </List>
  )
}

export default ContactList
