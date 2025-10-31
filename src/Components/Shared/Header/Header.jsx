import React, { useState } from "react";
import logo from "../../../assets/logo.jpg";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoSearchSharp } from "react-icons/io5";
import { CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";

const Header = () => {

  const [open, setOpen] = useState(false);


  return (
    <div className="shadow-lg sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between container mx-auto py-4 px-6 lg:px-12">
        <img src={logo} className="w-32 md:w-36" alt="" />

        <div className="hidden md:flex items-center justify-center gap-12">
          <div className="flex gap-8 text-gray-700 font-medium">
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Home</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Success Story</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">About</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Blog</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Contact</p>
          </div>
        </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-[#FB5875] hover:bg-[#de2648] duration-300 transition-all text-white justify-center py-1 rounded-md px-3 cursor-pointer">
              <LiaTelegramPlane />
              <p>Join Now</p>
            </div>

            <div className="flex gap-3 text-xl cursor-pointer">
              <IoSearchSharp />
              <CiShoppingCart />
            </div>
        
          </div>

            {/* mobile menu icon */}
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
              <CiMenuBurger />
            </div>       
      </div>

      {/* mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center py-3 gap-4 text-gray-700 font-medium">
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Home</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Success Story</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">About</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Blog</p>
            <p className="cursor-pointer hover:text-[#FB5875] duration-300 transition-all">Contact</p>
            <div className="flex items-center gap-1 bg-[#FB5875] text-white justify-center py-1 rounded-md px-3 cursor-pointer">
              <PiTelegramLogoLight />
              <p>Join Now</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
