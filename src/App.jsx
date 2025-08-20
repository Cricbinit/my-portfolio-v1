import React from 'react'
import Header from './components/Header'
import LatestWork from './components/LatestWork'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='px-10 bg-gray-900'>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App