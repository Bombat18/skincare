import React from 'react'
import product from '../assets/image/product.jpg'
import model1 from '../assets/image/Model1.png'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Hero = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate paragraphs
            gsap.from(['.para-desktop', '.para-mobile'], {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
            });

            // Animate all headings
            gsap.from(['.main-heading', '.main-heading-mobile'], {
                y: -30,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out',
            });

            // Animate product image
            gsap.from('.product-image', {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: 'power3.out',
            });

            // Animate all SKINCARE background texts
            gsap.from(['.skincare-text', '.skincare-text-mobile', '.skincare-text-tab'], {
                opacity: 0,
                y: 40,
                scale: 0.95,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
            });

            // Animate shop now buttons
            gsap.from(['.shop-now', '.tab-shop-now'], {
                opacity: 0,
                y: 20,
                delay: 0.3,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
            });

            // Animate model images
            gsap.from(['.model-img', '.mobile-model-img', '.tab-model-img'], {
                opacity: 0,
                scale: 0.85,
                delay: 0.5,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
            });

            // Animate testimonial boxes
            gsap.from(['.testimonial-box', '.mobile-testimonial', '.tab-testimonial'], {
                opacity: 0,
                y: 20,
                delay: 0.7,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
            });
        });

        return () => ctx.revert();
    }, []);






    return (



        <div className="bg-[#EFF5E1]  ">
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col-reverse lg:flex-row  items-center md:justify-between gap-8 px-4 sm:px-8">
                {/* Left Text */}
                <div className="w-full lg:w-1/3   flex justify-center   order-1 lg:order-none md:order-none">
                    {/* ...your paragraph code remains the same */}
                    <p className="para-desktop hidden  md:block lg:block text-gray-700 text-sm leading-tight text-left">
                        <span className="block text-right">Transform your skincare</span>
                        <span className="block text-center">routine with premium products that</span>
                        <span className="block text-center">restore, protects, and enhances your</span>
                        <span className="block text-left">natural glow every day.</span>
                    </p>

                    {/* Mobile: paragraph | Desktop: hidden */}
                    <p className="para-mobile block md:hidden lg:hidden text-gray-700 text-sm leading-tight text-left px-4 ">
                        Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
                    </p>
                </div>

                <div className="main-heading block sm:hidden lg:block w-full lg:w-1/3 text-center order-2 lg:order-none">
                    <h1 className="text-[55px] sm:text-5xl font-extrabold text-gray-900 font-inter break-words leading-none">
                        GLOWWWW <br /> NATURALLY
                    </h1>
                </div>
                <div className="hidden sm:flex w-full lg:w-1/3 justify-center order-3 lg:order-none">
                    <img
                        src={product}
                        alt="Product"
                        className="product-image lg:w-32 sm:w-40 h-auto lg:rounded-xl md:w-72 shadow-md"
                    />
                </div>
            </div>




            <div className="relative bg-[#EFF5E1] overflow-hidden pt-28 hidden lg:block">
                {/* SKINCARE Background Text */}
                <h1 className="skincare-text absolute inset-0 flex justify-center items-end   md:text-[300px]  font-bold text-[#2D3B36] z-0 leading-none select-none font-inter tracking-tight whitespace-nowrap overflow-hidden">
                    SKINCARE
                </h1>

                {/* Shop Now Button */}
                <div className=" shop-now z-10 relative px-10 left-14 bottom-7">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800">
                        Shop Now
                    </button>
                </div>

                {/* Model Image + Testimonial */}
                <div className="relative  bottom-10 z-10 flex flex-col items-center">
                    <img

                        src={model1}
                        alt="Model"
                        className="model-img w-[330px] h-[380px] object-cover rounded-2xl shadow-lg"
                    />

                    {/* Testimonial */}
                    <div className="testimonial-box absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full flex items-center gap-3 shadow-md w-[280px]">
                        <img
                            src={product}
                            alt="User Icon"
                            className="w-11 h-11 rounded-full border-2 border-dotted border-gray-400 p-[4px]"
                        />
                        <p className="text-[12px] text-gray-500">
                            While giving you an invigorating cleansing experience.
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <div className='lg:hidden md:hidden pt-10 '>
                    <img src={model1} alt="" className='mobile-model-img w-[100vw] h-[450px]' />
                </div>
                <div className=" mobile-testimonial absolute bottom-28 left-1/2 -translate-x-1/2 py-2  bg-white px-4  rounded-full flex items-center gap-3 shadow-md w-[280px] lg:hidden md:hidden">
                    <img
                        src={product}
                        alt="User Icon"
                        className="w-11 h-11 rounded-full border-2 border-dotted border-gray-400 p-[4px]"
                    />
                    <p className="text-[12px] text-gray-500">
                        While giving you an invigorating cleansing experience.
                    </p>
                </div>
                <h1 className="skincare-text-mobile  flex justify-center   text-[75px] md:hidden lg:hidden  font-bold text-[#2D3B36] z-0 leading-none select-none font-inter tracking-tight whitespace-nowrap overflow-hidden">
                    SKINCARE
                </h1>
                <div className='lg:hidden md:hidden  bg-white '>
                    <img src={product} alt="" className='w-[100vw] h-[450px]' />
                </div>

                <div className=" flex justify-center items-center lg:hidden md:hidden bg-white py-6">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800">
                        Shop Now
                    </button>
                </div>

            </div>


            <div className=" main-heading-mobile  hidden lg:hidden   md:block w-full  text-center order-2 lg:order-none">
                <h1 className="text-[100px]  font-extrabold text-gray-900 font-inter break-words leading-none">
                    GLOWWWW <br /> NATURALLY
                </h1>
            </div>





            <div className="relative w-full pt-28 hidden md:block lg:hidden"> {/* Wrap everything inside a relative parent */}

                {/* Background Title */}
                <h1 className=" skincare-text-tab z-0 absolute  hidden inset-0 md:flex lg:hidden justify-center items-end  md:text-[150px] font-bold text-[#2D3B36] leading-none select-none font-inter tracking-tight whitespace-nowrap overflow-hidden">
                    SKINCARE
                </h1>

                {/* Foreground Content */}
                <div className="relative z-10 hidden lg:hidden w-full md:flex justify-between px-16 items-center bottom-16">
                    <img
                        src={model1}
                        alt="Product"
                        className="tab-model-img lg:w-32 sm:w-40 h-auto lg:rounded-xl md:w-72 shadow-md"
                    />

                    <button className=" tab-shop-now bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800">
                        Shop Now
                    </button>

                    <div className=" tab-testimonial hidden lg:hidden absolute bottom-10 left-20 bg-white px-4 py-2 rounded-full md:flex items-center gap-3 w-[250px]">
                        <img
                            src={product}
                            alt="User Icon"
                            className="w-11 h-11 rounded-full border-2 border-dotted border-gray-400 p-[4px]"
                        />
                        <p className="text-[11px] text-gray-500">
                            While giving you an invigorating cleansing experience.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero
