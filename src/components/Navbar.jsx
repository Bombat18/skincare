import React from "react";
import bag from '../assets/icon/bag.svg';
import heart from '../assets/icon/heart.svg';
import person from '../assets/icon/person.svg';
import '../font.css'
const Navbar = () => {
    return (
        <nav className="w-full px-4 md:px-16 py-6 bg-[#EFF5E1] flex justify-between items-center">
            {/* Left - Brand */}
            <div className="text-2xl md:text-2xl font-inter font-extrabold text-[#2d3e30]">
                SKINCARE
            </div>

            {/* Center - Menu (Hidden on small screens) */}
            <ul className="hidden md:flex gap-6 lg:gap-8 text-black  text-sm lg:text-base">
                <li className="cursor-pointer hover:text-[#526b58]">All Products</li>
                <li className="cursor-pointer hover:text-[#526b58]">Serum</li>
                <li className="cursor-pointer hover:text-[#526b58]">Sunscreen</li>
                <li className="cursor-pointer hover:text-[#526b58]">Bundle</li>
            </ul>

            {/* Right - Icons */}
            <div className="flex gap-3 sm:gap-4">
                <div className="p-2 rounded-full bg-[#FEFFF4] hover:bg-[#e3f0d8] cursor-pointer">
                    <img src={bag} alt="Cart" className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-full bg-[#FEFFF4] hover:bg-[#e3f0d8] cursor-pointer">
                    <img src={heart} alt="Wishlist" className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-full bg-[#FEFFF4] hover:bg-[#e3f0d8] cursor-pointer">
                    <img src={person} alt="Profile" className="w-5 h-5" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
