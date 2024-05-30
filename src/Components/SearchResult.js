import React, { useState } from 'react'
import SearchFeed from './SearchFeed';




const SearchResult = ({video, results}) => {
  return (
<>
    <div className='search-bar-container'>
      <h1>Search Videos here  {results}</h1>
        
      {results &&<SearchFeed query={video}  /> }
    </div>
    
    </>
  )

}

export default SearchResult