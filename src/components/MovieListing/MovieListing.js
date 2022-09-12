import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss"
import Slider from "react-slick"

const MovieListing = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    const { movies, shows } = useSelector((state) => state.movie)

    // console.log('movie :', movies)

    let renderMovies = "";
    let renderShow = "";

    renderMovies = movies.Response === "True" ? (

        movies.Search.map((movie, index) => {

            return <MovieCard data={movie} key={index} />

        })

    ) : (<div>  error bhadwe </div>)

    renderShow = shows.Response === 'True' ? (shows.Search.map((show, i) => {

        return <MovieCard data={show} key={i} />

    })) : (<div> <h1> Error bhadwe </h1> </div>)


    return (
        <>
            <div className='movie-wrapper' >

                <div className='movie-list' >
                    <h2> Movie </h2>
                    <div className='movie-container' >
                        <Slider {...settings} > {renderMovies}</Slider>
                    </div>
                </div>

                <div className='movie-list' >
                    <h2> Show </h2>
                    <div className='movie-container' >  <Slider {...settings} >      {renderShow}  </Slider>  </div>
                </div>

            </div>
        </>
    )
}

export default MovieListing