import React from 'react'
import { TopBrand } from '../Component/TopBrand'
import Banner from '../Component/Banner'
import HBanner from '../Component/HBanner'
import BBanner from '../Component/BBanner'
import Parallaxing from '../Component/Parallaxing'
import Review from '../Component/Review'
import FProducts from '../Component/FProducts'
import NewProducts from '../Component/NewProducts'
import Footer from '../Component/Footer'
const Home = () => {
  return (
    <>
    <Banner/>
    <HBanner/>
    <NewProducts/>
    <TopBrand/>
    <Parallaxing/>
    <BBanner/>
    <Review/>
    <FProducts/>
    <Footer/>
    </>

  )
}

export default Home