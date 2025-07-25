import './ModalWithForm.css'

export default function ModalWithForm({
  isOpen,
  onSubmit,
  onClose,
  children,
  title,
  buttonText,
}) {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className='modal__content'>
        <h2 className='modal__title'>{title}</h2>
        <button onClick={onClose} className='modal__close' />
        <form onSubmit={onSubmit} className='modal__form'>
          {children}
          {buttonText && (
            <button className='modal__button'>{buttonText}</button>
          )}
        </form>
      </div>
    </div>
  )
}
