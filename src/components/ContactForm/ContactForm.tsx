import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsSlice'
import { Form, Input, Button } from './ContactForm.styled'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addContact({ id: Date.now().toString(), name, email, phone }))
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  )
}

export default ContactForm
