import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner from '../../assets/images/banner.png';
function Home() {
  return (
    <div className='pb-3'>
      <Banner src={banner} alt="trending item women's latest fashion sale"/>
    </div>
  )
}

export default Home
