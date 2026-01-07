import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
        <div >
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold '>Exchange Policy</p>
            <p className='text-gray-400 '>All products are handmade, so minor variations in color, texture, or shape are natural and not considered defects.</p>

        </div>
        <div >
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold '>Authentic & Original Craftwork</p>
            <p className='text-gray-400 '>Every item is uniquely handcrafted—not mass-produced—ensuring originality and true artisan quality.</p>

        </div>
        <div >
            <img src={assets.support_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold '>Customer Assistance</p>
            <p className='text-gray-400 '>Our support team can help with orders, product details, payments, shipping, or any issues. We aim to respond quickly and assist you smoothly.</p>

        </div>
    </div>
  )
}

export default OurPolicy
