import React, { useEffect, useState } from 'react'
import '../SassFiles/Banner.sass';
import axios from '../axios';

function Banner({fetch}) {

 const[movie,setMovie]=useState([]);

 useEffect(()=>{
  async function getData() {
    const request = await axios.get(fetch);
    setMovie(request.data.results[
      Math.floor(Math.random()*request.data.results.length-1)
    ])
    return request;
  }
  getData();
 },[fetch])
 console.log(movie)
 
 function truncate(string,n){
     return string?.length>n?string.substr(0,n-1)+'...':string;
 }

  return (
    <div className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPositionX:"50%",
        backgroundPositionY:"20%",
      }}
    >
      <div className="content">
        <h1 className="title">{movie.original_title}</h1>
        <div className="buttons">
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className="descptn">
         {truncate(` ${movie.overview}`,150)}
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
