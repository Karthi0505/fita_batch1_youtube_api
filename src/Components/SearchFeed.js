
import React, { useEffect, useState } from 'react'
import "./SearchFeed.css"
import ReactPlayer from 'react-player';
import { fetchFromAPI } from '../utils/fetchFromAPI';
// import SearchBar from './SearchBar';

const SearchFeed = ({ query }) => {
   const [searchQuery, setSearchQuery] = useState([])

   useEffect(() => {

      // const fetchData = () => {
         if (query) {

         fetchFromAPI(`search?q=${query}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`)
            .then(function (res) {
               console.log("aa ", res)
               // return res.json()
            // })
            // .then(function (res) {
            //    console.log(" ddd ", res)
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
                        <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${curElement.id.videoId}`}
                  className="react-player"
                  controls
               />
                        

                        {/* <h2>{curElement.snippet.title}</h2> */}
                        {/* <img src={curElement.snippet.thumbnails?.medium?.url} alt={curElement.snippet.title} /> */}
                        
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