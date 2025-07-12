import React, { useEffect, useRef } from 'react';
import bgImage from '../assets/image/model3.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Feel = () => {
    const textRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            });

            gsap.from(btnRef.current, {
                scrollTrigger: {
                    trigger: btnRef.current,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out',
            });
        });

        return () => ctx.revert(); // Clean up animations on component unmount
    }, []);

    return (
        <div className='hidden lg:block lg:p-12'>
            <div className="relative w-full md:h-[100vh] overflow-hidden">
                {/* Background Image */}
                <img
                    src={bgImage}
                    alt="Model"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl object-center z-0"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10" />

                {/* Centered Text Content */}
                <div className="absolute inset-0 bottom-11 flex flex-col items-center justify-end text-center z-20 px-4">
                    <h1
                        ref={textRef}
                        className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-2xl leading-snug"
                    >
                        Feel Beautiful Inside and Out with Every Product.
                    </h1>
                    <button
                        ref={btnRef}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
                    >
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feel;
