import React from 'react'
import PhotoCarousel from '../components/PhotoCarousel.jsx'

const Home = () => {
  const slides = [
    'http://www.chiranabin.org.in/style/images/art/s2.jpg',
    'http://www.chiranabin.org.in/style/images/art/s1.jpg',
    'http://www.chiranabin.org.in/style/images/art/s3.jpg',
    'http://www.chiranabin.org.in/style/images/art/s4.jpg',
    'http://www.chiranabin.org.in/style/images/art/s5.jpg',
    'http://www.chiranabin.org.in/style/images/art/s6.jpg'
  ]
  return (
    <>
      <PhotoCarousel slides={slides}/>

    </>
  )
}

export default Home
