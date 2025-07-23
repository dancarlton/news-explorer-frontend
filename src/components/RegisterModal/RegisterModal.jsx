import { useState } from 'react'
import { registerUser } from '../../api'
import ModalWithForm from '../ModalWithForm/ModalWithForm'

export default function RegisterModal({
  isOpen,
  onRegister,
  onLoginClick,
  onClose,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    onRegister(email, password, userName)
      .then(() => {
        setEmail('')
        setPassword('')
        setUserName('')
      })
      .catch(err => {
        console.log('Error registering user:', err)
        alert('Could not register you at this time')
      })
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title='Sign Up'
      buttonText='Sign Up'
      onSubmit={handleSubmit}
    >
      <label htmlFor='email' className='modal__label'>
        Email
        <input
          type='email'
          placeholder='Enter email'
          className='modal__input'
        />
      </label>
      <label htmlFor='password' className='modal__label'>
        Password
        <input
          type='password'
          placeholder='Enter password'
          className='modal__input'
        />
      </label>
      <label htmlFor='name' className='modal__label'>
        Username
        <input
          type='name'
          placeholder='Enter your username'
          className='modal__input'
        />
      </label>
      <div className='modal__secondary'>
        <p>or</p>
        <button
          onClick={onLoginClick}
          type='button'
          className='modal__secondary-button'
        >
          Sign In
        </button>
      </div>
    </ModalWithForm>
  )
}
