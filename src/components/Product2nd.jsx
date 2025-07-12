import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import product1 from "../assets/image/product1.jpg";
import product2 from "../assets/image/product2.jpg";
import product3 from "../assets/image/product3.jpg";
import cart from "../assets/icon/cart.svg";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        name: "ALYA SKIN CLEANSER.",
        price: "FROM $29.99",
        image: product1,
    },
    {
        name: "RITUAL OF SAKURA.",
        price: "FROM $27.99",
        image: product2,
    },
    {
        name: "THE BODY LOTION.",
        price: "FROM $19.00",
        image: product3,
    },
];

const BestSellers = () => {
    const [index, setIndex] = useState(0);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % products.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current, {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            cardsRef.current.forEach((card, idx) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    duration: 0.6,
                    delay: idx * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="bg-[#FAFDF4] px-4 sm:px-8 py-16">
            {/* Header */}
            <div className="flex flex-col  lg:flex-row md:flex-col lg:items-center   justify-start md:justify-start lg:justify-center max-w-6xl mx-auto mb-12">
                

                <h2 className="text-3xl  lg:text-4xl  text-[#2D3B36] mt-6 sm:mt-0 text-left  lg:text-center">
                    Feel Beautiful Inside and Out 
                    <br />
                    with Every Product.
                </h2>

               
            </div>




            <div className="flex gap-3 justify-center my-6 ">
                {/* Active Button */}
                <button className="bg-[#2c3e36] text-white text-sm px-5 py-2 rounded-full ">
                    NEW ARRIVAL
                </button>

                {/* Outline Buttons */}
                <button className="border border-[#2c3e36] text-[#2c3e36] text-sm px-5 py-2 rounded-full hover:bg-[#2c3e36] hover:text-white transition">
                    CLEANSING
                </button>

                <button className=" hidden md:block lg:block border border-[#2c3e36] text-[#2c3e36] text-sm px-5 py-2 rounded-full  hover:bg-[#2c3e36] hover:text-white transition">
                    ACNE FIGHTER
                </button>

                <button className="hidden md:block lg:block border border-[#2c3e36] text-[#2c3e36] text-sm px-5 py-2 rounded-full hover:bg-[#2c3e36] hover:text-white transition">
                    ANTI AGING
                </button>
            </div>


            <div className="max-w-6xl mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (cardsRef.current[idx] = el)}
                            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
                        >
                            <div className="relative bg-white rounded-xl shadow-md overflow-hidden group transition-transform hover:-translate-y-1 duration-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[420px] md:h-[380px] lg:h-[420px] object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAFDF4] bg-opacity-95 rounded-xl shadow-md flex items-center justify-between px-5 py-3 w-[90%]">
                                    <div className="text-left">
                                        <h3 className="text-gray-800 font-inter text-sm uppercase">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs">{product.price}</p>
                                    </div>
                                    <button className="bg-[#2D3B361A] rounded-lg p-2 hover:bg-gray-100 transition">
                                        <img className="w-10 p-2" src={cart} alt="Cart" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>




            <div className="  lg:hidden  flex justify-center md:p-10  gap-3 mt-6 sm:mt-0">
                <button
                    onClick={handlePrev}
                    className="w-10 h-10  rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#2D3B36] text-white flex items-center justify-center hover:bg-[#1f2a25]"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default BestSellers;
