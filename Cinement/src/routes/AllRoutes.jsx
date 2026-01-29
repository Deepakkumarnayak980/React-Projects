import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MoviesList from '../pages/MoviesList'
import MoviesDetails from '../pages/MoviesDetails'
import Search from '../pages/Search'
import PageNotFound from '../pages/PageNotFound'


const AllRoutes = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<MoviesList/>} />
       <Route path='movies/:id' element={<MoviesDetails/>} />
       <Route path='movies/:popular' element={<MoviesList/>} />
       <Route path='movies/:top' element={<MoviesList/>} />
       <Route path='movies/:upcoming' element={<MoviesList />} />
       <Route path='search' element={<Search/>} />
       <Route path='*' element={<PageNotFound />} />

    </Routes>
    </>
  )
}

export default AllRoutes