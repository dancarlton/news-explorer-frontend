import './SearchBar.css'
import { useState } from 'react'
import {fetchNews} from '../../api'


export default function SearchBar() {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // call api fetch
        fetchNews(userInput)

        // clear search
        setUserInput('')

    }

  return (
    <>
      <form className='searchbar' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter topic'
          className='searchbar__input'
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />
        <button type='submit' className='searchbar__button'>
          Search
        </button>
      </form>
    </>
  )
}
