
import React, { useState } from 'react';

const SearchBar = () => {
    const [searchVideo, setSearchVideo] = useState('');

    const handleSearchChange = (event) => {
        setSearchVideo(event.target.value);
    };

    const handleSearch = () => {
        console.log(searchVideo); 
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search videos..."
                value={searchVideo}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>Search</button>

    
        </div>
    );
};

export default SearchBar;