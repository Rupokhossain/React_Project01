import React from 'react'
import Header from './Components/Shared/Header/Header'
import Footer from './Components/Shared/Footer'
import Home from './Page/Home/Home'
import TopHeader from './Components/Shared/Header/TopHeader'

const App = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App