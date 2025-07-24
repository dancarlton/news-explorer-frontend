import { useState } from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'

export default function LoginModal({
  isOpen,
  onLogin,
  onClose,
  onRegisterClick,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    onLogin(email, password)
      .then(setEmail(''), setPassword(''))
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Sign In'
      buttonText='Sign In'
    >
      <label htmlFor='email' className='modal__label'>
        Email
        <input
          type='email'
          value={email}
          placeholder='Enter email'
          className='modal__input'
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor='password' className='modal__label'>
        Password
        <input
          type='password'
          value={password}
          placeholder='Enter password'
          className='modal__input'
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <div className='modal__secondary'>
        <p>or</p>
        <button
          onClick={onRegisterClick}
          type='button'
          className='modal__secondary-button'
        >
          Sign Up
        </button>
      </div>
    </ModalWithForm>
  )
}
