import React from 'react'
import ProductCard from './ProductCard';
import wed1 from '../Assests/wed1.jpg'
import doctor from '../Assests/doctor.jpg'
import civil from '../Assests/civil1.webp'
import software from '../Assests/software.webp'
import advocate from '../Assests/advocte.jpg'
import teacher from '../Assests/teacher.jpg'
import goverment from '../Assests/goverment.webp'
import business from '../Assests/business.jpg'
import farmer from '../Assests/farmer.jpg'
const Product = () => {
  return (
    <div >
      <h1>Products/Services</h1>
      <ProductCard
        title="सर्वधर्मीय उच्यशिक्षित स्थळे"
        imgSrc={wed1}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link1"
      />
      <ProductCard
        title="डॉक्टर स्थळे"
        imgSrc={doctor}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />
       <ProductCard
        title="इंजिनिअर स्थळे"
        imgSrc={civil}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />
      <ProductCard
        title="सॉफ्टवेअर प्रोफेशनल स्थळे"
        imgSrc={software}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />
      <ProductCard
        title="वकील स्थळे"
        imgSrc={advocate}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />
       <ProductCard
        title="प्रध्यापक स्थळे"
        imgSrc={teacher}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />
      <ProductCard
        title="सरकारी नोकरदार स्थळे"
        imgSrc={ goverment}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />
      <ProductCard
        title="व्यावसायिक स्थळे"
        imgSrc={business}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />
      <ProductCard
        title="प्रगतशील बागायतदार स्थळे"
        imgSrc={farmer}
        buttonText="Download Product Card"
        downloadLink="Download Product Card"
        enquiryLink="/path_to_your_enquiry_link2"
      />

    </div>
    
  )
}

export default Product
