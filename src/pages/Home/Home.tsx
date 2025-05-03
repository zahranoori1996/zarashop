import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner1 from '../../assets/images/banner.png';
import PopularCategory from '../../components/PopularCategory/PopularCategory';
import Main from '../../components/Main/Main';
function Home() {
  return (
    <div className='pb-3 overflow-x-hidden'>
      <Banner className='w-full px-2' src={banner1} alt="trending item women's latest fashion sale"/>
      <PopularCategory />
      <Main/>
      

    </div>
  )
}

export default Home
