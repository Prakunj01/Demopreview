import React from 'react'
import Header from '../components/Header/Header'
import Hero from './Hero'
import Addcard from './Addcard'
import Cards from './Cards'
import Footer from '../components/Footer/Footer'
import Content from './Content'

function Home() {
  return (
    <div>
      <Header/>
            <Hero/>
            <Cards/>
            <Addcard/>
            <Content/>
            <Footer/>
    </div>
  )
}

export default Home
