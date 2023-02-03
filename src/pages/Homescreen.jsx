import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row';
import '../SassFiles/home.sass';
import requests from '../request'

function Homesecreen() {
  return (
    <div className='home'>
      <Banner fetch={requests.fetchBanner}/>
       <Row title="Popular Picks" fetch={requests.fetchTopRated}/>
       <Row title="Action" fetch={requests.fetchActionMovies}/>
       <Row title="Comedy" fetch={requests.fetchComedyMovies}/>
       <Row title="Horror" fetch={requests.fetchHorrorMovies}/>
       <Row title="Romance" fetch={requests.fetchRomanceMovies}/>
       <Row title="Drama" fetch={requests.fetchDramaMovies}/>
    </div>
  )
}

export default Homesecreen
