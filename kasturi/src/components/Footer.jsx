import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32 ' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 '>
                Every product we create reflects authentic craftsmanship, thoughtful design, and a commitment to quality handmade work.
            </p>
        </div>
        <div>
  <p className='text-xl font-medium mb-5'>COMPANY</p>
  <ul className='flex flex-col gap-1 text-gray-600 '>
    <li>About Us</li>
    <li>Our Story</li>
    <li>Careers</li>
    <li>Contact</li>
  </ul>
</div>

    <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+919156175534</li>
            <li>vaishalimahajandhanwate@gmail.com</li>
        </ul>

    </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center '> © 2026 Kasturi Crafts — All Rights Reserved.</p>
      </div>
        
    </div>
  )
}

export default Footer
