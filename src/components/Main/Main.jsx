import SearchBar from '../SearchBar/SearchBar'
import './Main.css'
import mainBackground from '../../assets/images/main-background.png'

export default function Main() {
  return (
    <main className='main'>
      <img
        src={mainBackground}
        alt='main background image'
        className='main__background'
      />
      <div className='main__content'>
        <h1 className='main__title'>What&apos;s going on in the world?</h1>
        <p className='main__subtitle'>
          Find the news on any topic and save them in your personal account.
        </p>

        <SearchBar />
      </div>
    </main>
  )
}
