import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'

const App = () => {
  return (
    <div className='app'>
      <Header />                    
      <ExploreMenu />
    </div>
  )
}

export default App
