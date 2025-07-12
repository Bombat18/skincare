import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-[#1C2B25] text-[#E7E8E0] py-16 px-6 md:px-20 overflow-hidden">
            {/* Watermark background text */}
            <h1 className="absolute inset-0 flex justify-center items-center text-[80px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-semibold font-inter text-[#E7E8E0] opacity-10 pointer-events-none select-none z-0">
                SKINCARE
            </h1>

            {/* Content wrapper */}
            <div className="relative z-10 space-y-16">
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    {/* Left Text */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug font-medium">
                            Join The Skincare <br /> Community Now.
                        </h2>
                    </div>

                    {/* Right Text */}
                    <div className="text-left">
                        <p className="text-sm text-[#E7E8E0] mb-1">Get in Touch</p>
                        <a
                            href="mailto:contact@skincare.com"
                            className="text-lg sm:text-xl md:text-2xl text-[#E7E8E0] hover:underline leading-snug"
                        >
                            contact.skincare.com
                        </a>
                    </div>
                </div>

                {/* Social & Policy Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-600 pt-8 gap-10 text-sm text-gray-300">
                    {/* Socials */}
                    <div className="flex flex-wrap gap-6">
                        <a href="#" className="hover:text-white">Facebook</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">YouTube</a>
                    </div>

                    {/* Policies */}
                    <div className="flex flex-wrap gap-6">
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
