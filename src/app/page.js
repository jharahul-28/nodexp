'use client'
import React from 'react'
import Section4 from './components/section4'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import Section3 from './components/Section3'
import Section2 from './components/Section2'
import Home from './components/Home'

const page = () => {
  return (
    <>
        <Home/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </>
  )
}

export default page