// ./src/Components/Banner/Banner.tsx
import React, { useState, useEffect } from 'react'
import axios from '../../axios' //custom axios
import { imageUrl } from '../../Constants/constants';
import { Movie } from '../../models/MovieModel';
import { PropsModel } from '../../models/PropsModel';
import './Banner.css'

export const Banner = (props: PropsModel) => {
  const [movie, setMovie] = useState<Movie>()
  const maxIndex = 19;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
    axios.get(props.url).then((response) => {
      console.log(response.data.results[randomIndex])
      setMovie(response.data.results[randomIndex])
    })
  }, [])
  
  const bannerStyle = movie ? {backgroundImage: `url(${imageUrl}${movie.backdrop_path})`} : {}

  return (
    <div style={bannerStyle} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name ? movie.name : movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}