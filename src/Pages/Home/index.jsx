import React, { useEffect } from 'react'
import Banner from "../../Components/Banner"
import Aboutus from '../../Components/Aboutus'
import { ScrollToTop } from '../../Components/CommonHelper/helperFunction'

const Home = () => {
  useEffect(()=>{
    ScrollToTop('instant')
  },[])
  return (
    <>
    <Banner />
    <Aboutus />
    </>
  )
}

export default Home