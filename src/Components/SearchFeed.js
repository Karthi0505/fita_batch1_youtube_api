
import React, { useEffect, useState } from 'react'
import "./SearchFeed.css"
// import SearchBar from './SearchBar';

const SearchFeed = ({ query }) => {
   const [searchQuery, setSearchQuery] = useState([])

   useEffect(() => {

      // const fetchData = () => {
         if (query) {
         const base_url = `https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;
         const options = {
            method: 'GET',
            headers: {
               'X-RapidAPI-Key': '878619dbc4mshdfc6173e68b1585p1c26bbjsn8cb75c6bc728',
               'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }

         };

         fetch(base_url, options)
            .then(function (res) {
               console.log("aa ", res)
               return res.json()
            })
            .then(function (res) {
               console.log(" ddd ", res)
               console.log(" eee ", res?.items)

               setSearchQuery(res.items)
               console.log("SS", searchQuery)

               console.log("rr", searchQuery)
               console.log("ww", searchQuery[0])
               // console.log("www", searchQuery[0].kind)
            })
            .catch(error => {
               console.error('Error fetching data: ', error);


      })
   }
;
      // fetchData();
   }, [query]);

   return (
      <>
         {/* <h1>Search Videos...</h1>  */}
         <div className="display-flex" >
            {
               searchQuery.map((curElement) => {
                  // const { id, snippet } = curElement;

                  return (
                     <div className="col">
                        

                        <h2>{curElement.snippet.title}</h2>
                        <img src={curElement.snippet.thumbnails?.medium?.url} alt={curElement.snippet.title} />
                        
                     </div>
                  );
               })
            }

         </div>
{/* <SearchBar /> */}

 

      </>
   );
};

export default SearchFeed