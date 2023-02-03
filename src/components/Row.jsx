import '../SassFiles/Row.sass';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import instance from '../axios';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css/skyblue';

function Row({title , fetch}) {
    const [movies,setMovies]=useState([]);
    const baseURL ="https://image.tmdb.org/t/p/w500";
    useEffect(()=>{
      fetchData();
    },[fetch]);
    async function fetchData(){
        const request = await instance.get(fetch);
        setMovies(request.data.results)
        console.log(movies)
    }
  return (
    <div className='row'>
      <span>{title}</span>
      <Splide options={{
         gap:"0.5rem",
         padding:"5rem",
         pagination: false,
          autoWidth: true,
      }}>
        {movies.map((x)=>{
            return(
                <SplideSlide id="slide" key={x.id}>
                  <div className="card-row"
                   style={{
                    backgroundImage: `url("${baseURL}${x.poster_path}")`,
                    backgroundSize:"cover",
                    backgroundPosition:"center center",
                    backgroundRepeat:"no-repeat",
                  }}
                  > 
                  </div>
                  <div className="info">
                      {x.title || x.orignal_title}
                    </div>
                </SplideSlide>
            )
        })}
      </Splide>
    </div>

  )
}

export default Row
