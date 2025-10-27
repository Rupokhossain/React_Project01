import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

const TopHeader = () => {
  return (
    <div className='bg-linear-to-r from-[#5885FD] to-[#FE5672] py-2 text-white'>
        <div className='flex items-center justify-center lg:justify-between container mx-auto px-24'>
            <div className='flex gap-6'>
                <FaFacebookF />
                <FaYoutube />
                <FaInstagram />
                <FaTelegramPlane/>

            </div>

            <div className='hidden lg:flex gap-6 cursor-pointer'>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Success Story</p>
            </div>

        </div>


    </div>
  )
}

export default TopHeader