import React from 'react'
import "./SearchForm.css"

const SearchForm = ({video, setVideo, setResults}) => {
    function handleChange(e) {
        setVideo(e.target.value)
        console.log(e)
        console.log(e.target.value)
      }
    function formSubmit(e) {
        e.preventDefault();
        setResults(video)
        console.log(e)
    
      }
  return (
    <>
     <form onSubmit={formSubmit} className='search-form'>
        <input onChange={handleChange} type='text' placeholder='Search Videos...' value={video}></input>

        <button type='submit'>Search</button>
        
      </form>
    </>
    
  )
}

export default SearchForm