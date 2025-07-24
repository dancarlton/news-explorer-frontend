import './SearchBar.css'
import { useState } from 'react'

export default function SearchBar({onSearch}) {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    onSearch(userInput)
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
