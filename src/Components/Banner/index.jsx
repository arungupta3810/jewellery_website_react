import React from 'react'
import './style.scss'
import { Carousel } from 'antd';

// const contentStyle = {
//     // height: '160px',
//     color: '#fff',
//     // lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

const Banner = () => {
  return (
    <div className='banner'>
        <Carousel autoplay className='banner-slider'>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
    </div>
  )
}

export default Banner