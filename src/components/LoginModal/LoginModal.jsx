import ModalWithForm from '../ModalWithForm/ModalWithForm'

export default function LoginModal({
  isOpen,
  onClose,
  onRegisterClick,
}) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title='Sign In'
      buttonText='Sign In'
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
