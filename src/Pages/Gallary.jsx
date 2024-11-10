import React from 'react'
import './CSS/Gallary.css'
import photo1 from '../Assests/gallary1.jpg'
import photo2 from '../Assests/gallary2.jpg'
import photo3 from '../Assests/gallary3.jpg'

const Gallary = () => {
  return (
    <div className='image-gallary'>
      
      <div className='image-container image1'>
      < img src={photo1} alt="Image 1" />
      </div>
      <div className='image-container image2'>
        <img src={photo2} alt="" />
      </div>
      <div className='image-container image3'>
        <img src={photo3} alt="" />
      </div>
    </div>
  )
}

export default Gallary
