import SearchBar from '../SearchBar/SearchBar'
import './Main.css'

export default function Main({onSearch}) {
  return (
    <main className='main'>
      <div className='main__content'>
        <h1 className='main__title'>What&apos;s going on in the world?</h1>
        <p className='main__subtitle'>
          Find the news on any topic and save them in your personal account.
        </p>

        <SearchBar onSearch={onSearch} />
      </div>
    </main>
  )
}
