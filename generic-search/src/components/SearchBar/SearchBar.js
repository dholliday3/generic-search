import React, { useState } from 'react'

export const SearchBar = ({ }) => {

  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])


  const handleInput = (e) => {
    setQuery(e.target.value)

    // TODO: handle delay of clicking -> perform suggestions search and setSuggestions 

    setSuggestions(searchSuggestions())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleSuggestion = (e) => {
    alert(e.target.value)
  }

  const searchSuggestions = () => {
    return ['hello', 'how are you']
  }

  return (
    <form className='form-group'>
      <label>Search Bar</label>

      <div>
        <input
          value={query}
          onChange={handleInput}
          onSubmit={handleSubmit}
        />
        <ul>
          {
            suggestions && suggestions.map(s => <li key={s}><a onClick={(e) => handleSuggestion(e)}>{s}</a></li>)
          }
        </ul>
      </div>
      <button
        onClick={handleSubmit}
      >Search</button>
    </form>
  )
}