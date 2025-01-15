import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeContact } from '../../redux/contactsSlice'
import { List, ListItem, Button } from './ContactList.styled'
import ContactForm from '../ContactForm/ContactForm'
import { Contact } from '../../redux/contactsSlice'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.list)
  const dispatch = useDispatch()
  const [editingContact, setEditingContact] = React.useState<Contact | null>(
    null
  )

  const handleRemove = (id: string) => {
    dispatch(removeContact(id))
  }

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact) // Preenche os campos para editar
  }

  const handleCancelEdit = () => {
    setEditingContact(null) // Cancela a edição, limpa os campos
  }

  return (
    <div>
      {/* Aqui, garantimos que o formulário de contato recebe o "editingContact" */}
      <ContactForm initialData={editingContact} />

      {/* Lista de contatos */}
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <div>
              <strong>{contact.name}</strong>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
            <Button onClick={() => handleEdit(contact)}>Edit</Button>
            <Button onClick={() => handleRemove(contact.id)}>Remove</Button>
          </ListItem>
        ))}
      </List>

      {editingContact && (
        <Button onClick={handleCancelEdit}>Cancelar Edição</Button>
      )}
    </div>
  )
}

export default ContactList
