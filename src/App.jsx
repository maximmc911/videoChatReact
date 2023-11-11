import React from 'react'
import { Route, Routes } from 'react-router'
  import Room from './pages/Room/Room'
import Main from './pages/Main/Main'
import Pages404 from './pages/Not_Found/Pages404'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/room/:id" element={<Room/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path='*' element={<Pages404/>}/>
    </Routes>

    </>
  )
}

export default App