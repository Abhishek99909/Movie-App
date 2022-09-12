import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
// import MovieApi from '../../common/apis/MovieApi'
// import { APIKey } from '../../common/apis/MovieApikey'
import { useDispatch } from 'react-redux'
// import { addMovies } from '../../features/movie/movieSlice'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice'


const Home = () => {

    const dispatch = useDispatch()
    const movieText = 'Harry';
    const shoText = 'Friend';
    useEffect(() => {



        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(shoText))


    }, [dispatch])

    // useEffect(() => {

    //     const movieText = 'Harry'

    //     const fetchMovies = async () => {

    //         const responce = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //             .catch((err) => {

    //                 console.log(err)

    //             })
    //         // console.log(responce)

    //         const res = responce.data
    //         console.log(res)

    //         dispatch(addMovies(res))


    //     }
    //     fetchMovies()


    // }, [dispatch])

    return (
        <div>
            <div className='banner-img' >  </div>
            <MovieListing />
        </div>
    )
}

export default Home
