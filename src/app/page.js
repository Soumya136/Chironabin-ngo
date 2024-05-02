import React from 'react'
import PhotoCarousel from './components/PhotoCarousel.jsx'

export default function Page() {
  const slides = [
    '/Photos/Landscape/Blue_gate_entrance.webp',
    '/Photos/Landscape/Busts_blue_building.webp',
    '/Photos/Landscape/Gathering_arms.webp',
    '/Photos/Landscape/JAPAN_pink_building.webp',
    '/Photos/Landscape/Meeting.webp',
    '/Photos/Landscape/Plaques_blue_building.webp',
  ]


  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">Home</h1>
      <div className=" w-fill md:w-10/12">
        <PhotoCarousel slides={slides} />
      </div>
    </div>
  )
}
