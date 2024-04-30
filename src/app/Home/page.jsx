import React from 'react'
import PhotoCarousel from '../components/PhotoCarousel.jsx'

const Home = () => {
  const slides = [
    '/Photos/Landscape/Blue_gate_entrance.webp',
    '/Photos/Landscape/Busts_blue_building.webp',
    '/Photos/Landscape/Gathering_arms.webp',
    '/Photos/Landscape/JAPAN_pink_buidling.webp',
    '/Photos/Landscape/Meeting.webp',
    '/Photos/Landscape/Old_age_building.webp',
    '/Photos/Landscape/Old_age_cooking_2.webp',
    '/Photos/Landscape/One_bust_blue_building.webp',
    '/Photos/Landscape/Pink_gate_people.webp',
    '/Photos/Landscape/Plaques_blue_building.webp',
  ]

  return (
    <>
      <PhotoCarousel slides={slides}/>

    </>
  )
}

export default Home
