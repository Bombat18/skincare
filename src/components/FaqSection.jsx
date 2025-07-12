import React, { useEffect, useRef, useState } from 'react';
import faqImage from '../assets/image/product3.jpg';
import headphone from '../assets/icon/headphone.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: "Are your products safe for sensitive skin?",
        answer: "Yes, our products are formulated to be gentle and safe for all skin types, including sensitive skin.",
    },
    {
        question: "Are your products cruelty-free?",
        answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
        question: "What's your return policy?",
        answer: "We offer a 30-day return policy if you're not satisfied with your purchase.",
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide.",
    },
    {
        question: "How do I choose the right product?",
        answer: "Use our product quiz or consult with our experts through live chat support.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(1);
    const imgRef = useRef(null);
    const headingRef = useRef(null);
    const faqListRef = useRef(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imgRef.current, {
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out',
            });

            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 0.2,
                ease: 'power2.out',
            });

            gsap.from(faqListRef.current, {
                scrollTrigger: {
                    trigger: faqListRef.current,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 0.4,
                ease: 'power2.out',
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#FAFCF8] py-16 px-6 md:px-20 flex flex-col-reverse lg:flex-row justify-center items-center gap-12">
            {/* Left - Image */}
            <div ref={imgRef} className="md:hidden lg:block w-full lg:w-[500px] relative">
                <img
                    src={faqImage}
                    alt="Skincare Product"
                    className="rounded-2xl w-full"
                />
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#E6F1D6] text-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                    <img className=' p-1   border-2 border-dotted border-gray-700 rounded-full  ' src={headphone} alt="" />
                    <span>24/7 We're Here to Help You</span>
                </div>
            </div>

            {/* Right - FAQ */}
            <div className="w-full lg:w-1/2 space-y-6">
                <button className="text-sm font-medium border border-[#1C2B25] text-[#1C2B25] px-4 py-1 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1C2B25] rounded-full"></span>
                    Frequently Asked Question
                </button>

                <h2
                    ref={headingRef}
                    className="text-3xl md:text-4xl font-semibold text-[#1C2B25] leading-snug"
                >
                    Answers to Your <br />
                    <span className="text-[#1C2B25]">Skincare Questions,</span> All <br />
                    in One Place.
                </h2>

                <div ref={faqListRef} className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#1C2B25] rounded-lg p-4"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleIndex(index)}
                            >
                                <h4 className="text-[#1C2B25] font-medium">
                                    {faq.question}
                                </h4>
                                <span className="text-xl font-semibold">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            {openIndex === index && (
                                <p className="text-sm mt-2 text-[#1C2B25]">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
