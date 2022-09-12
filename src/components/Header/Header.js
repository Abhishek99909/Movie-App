import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import image from '../../images/logo1.jpg'
import "./Header.scss"

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice'


const Header = () => {

    const dispatch = useDispatch()

    const [term, setTerm] = useState('')

    const submitHandler = (e) => {

        e.preventDefault();
        console.log(term)
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm('')

    }


    return (
        <>
            <div className='header' >

                <div className='logo' >
                    <NavLink to='/' >  <h1> MovieApp </h1></NavLink>
                </div>

                <div className='search-bar' >
                    <form onSubmit={submitHandler} >
                        <input type="text" placeholder='search movie or show' value={term} onChange={(e) => setTerm(e.target.value)} />         <button type=' submit' >click </button>           </form>
                </div>

                <div className='user-image' >
                    <img src={image} alt="user" />
                    <h1> {term} </h1>
                </div>

            </div>
        </>
    )
}

export default Header
