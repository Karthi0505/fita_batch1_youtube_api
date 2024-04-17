import React, { useState } from 'react'

const SearchBar = () => {

    const [video, setVideo] = useState("");
    const [results, setResults] = useState("");
    function handleChange (e) {
        setVideo(video)
        console.log(e)
        console.log(e.target.value)
    }
    function formSubmit (e) {
      e.preventDefault();
        setResults(video)
        console.log(e)

    }

  return (
    <div>SearchBar
      <h1>{results}</h1>
       <input onChange={handleChange} type='text' placeholder='Search Videos...'></input>
       <button onclick={formSubmit} type='submit'>Search</button>
    </div>
  )
}

export default SearchBar