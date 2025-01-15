import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../../redux/contactsSlice'
import { Button, InputContainer } from './ContactForm.styled'
import { Contact } from '../../redux/contactsSlice'

interface ContactFormProps {
  initialData?: Contact | null
}

const ContactForm: React.FC<ContactFormProps> = ({ initialData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
      setPhone(initialData.phone)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const contact: Contact = {
      id: initialData?.id || Date.now().toString(),
      name,
      email,
      phone,
    }

    if (initialData) {
      dispatch(editContact(contact))
    } else {
      dispatch(addContact(contact))
    }

    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputContainer>
      <Button type="submit" buttonType={initialData ? 'adjust' : 'add'}>
        {initialData ? 'Ajustar contato' : 'Adicionar contato'}
      </Button>
    </form>
  )
}

export default ContactForm
