import './Preloader.css'

export default function Preloader() {
  return (
    <div className='circle__content'>
      <div className='circle__preloader'></div>
      <p className='circle__text'>Searching for news...</p>
    </div>
  )
}
