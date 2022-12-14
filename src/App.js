import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFoud/PageNotFound'

const App = () => {
  return (
    <>
      <div className='app' >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
