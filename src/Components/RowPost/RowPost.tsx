// ./src/Components/RowPost/RowPost.tsx
import React, {useEffect, useState} from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import './RowPost.css'
import { API_KEY, imageUrl} from '../../Constants/constants'
import { Originals } from '../../models/MovieModel'
import { PropsModel } from '../../models/PropsModel'
import axios from '../../axios' //custom axios
import { error } from 'console'

function RowPost(props: PropsModel) {
    const [movies, setMovies] = useState<Originals[]>([])
    const [urlMovieId, setUrlMovieId] = useState<any>()

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleMovie = (movieId: number) => {
       console.log(movieId)

       axios.get(`movie/${movieId}/videos?api_key=${API_KEY}`).then((response) => {
        console.log(response.data)
        if(response.data?.results.length !== 0) {
            setUrlMovieId(response.data.results[0])
        } else {
            console.log("array is empty")
        }
       }).catch(error => console.log(error))
    }
 
    useEffect( () => {
        axios.get(props.url)
        .then( (response) => {
            console.log(response.data)
            setMovies(response.data.results)  
        })
        .catch( (error) => console.log(error) )
    }, [])

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies && movies.map((eachMovie) =>
                    <div key={eachMovie.id} className='movie-container'>
                        <img
                            onClick={() => handleMovie(eachMovie.id)}
                            className={props.isSmall ? 'smallPoster' : 'poster'}
                            alt='poster'
                            src={`${imageUrl}${eachMovie.backdrop_path}`}
                        />
                        <div className='movie-name-overlay'>
                            <p className='movie-name'>{eachMovie.name ? eachMovie.name : eachMovie.title}</p>
                        </div>
                    </div>
                )}
            </div>
            {urlMovieId && <YouTube videoId={urlMovieId.key} opts={opts} onReady={onPlayerReady} />}
        </div>
    )
}

export default RowPost