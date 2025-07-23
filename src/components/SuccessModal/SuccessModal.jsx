import ModalWithForm from '../ModalWithForm/ModalWithForm'

export default function SuccessModal({ isOpen, onClose, onLoginClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title='Registration successfully completed!'
    >
      <div className='modal__secondary'>
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
