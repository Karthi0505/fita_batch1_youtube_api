import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '878619dbc4mshdfc6173e68b1585p1c26bbjsn8cb75c6bc728',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {

                setVideos(data.items);
            })
            .catch(error => console.error('Error:', error));
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search YouTube"
            />
            <button type="submit">Search</button>
            <ul>
                {videos.map((video) => (
                    <li key={video.id.videoId}>{video.snippet.title}</li>
                ))}
            </ul>
        </form>
    );
}

export default SearchBar;
