import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
            <p>We are a small, home-grown brand dedicated to creating beautiful
      handmade artifacts with love, care, and attention to detail.
      Every piece is crafted by hand, making each product unique and special.</p>
            <p>Our mission is to preserve traditional craftsmanship while bringing
      timeless designs into modern homes. We believe handmade products
      carry a story, a soul, and a personal touch that mass-produced
      items can never replace.</p>

      <b className='text-gray-800' >Our Mission</b>
        <p> Our mission is to create high-quality handmade artifacts that celebrate
  creativity, tradition, and authenticity. We aim to support local
  craftsmanship while offering meaningful products that add warmth
  and character to everyday living.</p>

        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title  text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We follow strict quality control processes at every stage to ensure that each product meets high standards of reliability, durability, and performance, so our customers always receive safe, trusted, and premium-quality products.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600' >Our platform is built with user comfort in mind, offering smooth navigation, quick access, and a seamless experience from start to finish.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >Our platform is built with user comfort in mind, and our dedicated support team is always ready to assist you with quick responses, clear communication, and reliable solutions to ensure a smooth and satisfying experience.</p>

        </div>
        

      </div>
      <div className="border-t pt-4 mt-10 text-right text-sm text-gray-600 px-4">
  <p>
    Developed by <span className="font-medium text-gray-800">Aaditya Dhanwate</span>
  </p>
  <p>
    3rd Year AIDS Student · Vishwakarma University
  </p>
</div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
