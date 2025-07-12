import React, { useEffect, useRef } from "react";
import model2 from "../assets/image/model2.png";
import award from "../assets/icon/award-white.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const badgeRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const featuresRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate heading
            gsap.from(headingRef.current, {
                opacity: 0,
                x: -40,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // Animate paragraph
            gsap.from(paragraphRef.current, {
                opacity: 0,
                x: -20,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // Animate features one by one
            featuresRef.current.forEach((el, i) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            });

            // Animate image
            gsap.from(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // Animate badge
            gsap.from(badgeRef.current, {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: badgeRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-[#FAFDF4] w-full min-h-screen lg:px-6 md:px-0 px-6 py-16 flex flex-col lg:flex-row items-center justify-center lg:text-left gap-12"
        >
            {/* Left Text Section */}
            <div className="lg:w-1/2 space-y-8 md:pl-10 lg:pl-24">
                <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-400 text-gray-900 font-medium">
                    <span className="w-3 h-3 rounded-full bg-gray-900"></span>
                    Why Our Products
                </button>

                <h1
                    ref={headingRef}
                    className="text-3xl md:text-5xl lg:text-5xl text-[#2D3B36] leading-tight"
                >
                    YOUR SKIN DESERVES <br /> THE BEST CARE.
                </h1>

                <p
                    ref={paragraphRef}
                    className="text-[#2D3B36] text-[11px] md:text-sm md:w-2/3 lg:2/3 leading-relaxed"
                >
                    Discover a curated collection of skincare products designed to rejuvenate,
                    protect, and pamper your skin. Explore our range crafted with love,
                    backed by science, and inspired by nature.
                </p>

                {/* Features */}
                <div className="space-y-8">
                    {[
                        {
                            number: "01",
                            title: "Bio Ingredients",
                            desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
                        },
                        {
                            number: "02",
                            title: "Everything Natural",
                            desc: "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
                        },
                        {
                            number: "03",
                            title: "All Handmade",
                            desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
                        },
                    ].map((item, i) => (
                        <div
                            key={item.number}
                            ref={(el) => (featuresRef.current[i] = el)}
                            className="flex items-start gap-10"
                        >
                            <span className="text-4xl font-semibold bg-gradient-to-b from-[#2D3B36] to-[#FEFFF4] text-transparent bg-clip-text font-inter">
                                {item.number}
                            </span>
                            <div>
                                <h3 className="text-2xl lg:text-3xl md:text-5xl text-[#2D3B36]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mt-1 md:w-3/4 lg:w-2/3">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image Section */}
            <div className="relative lg:w-1/2 flex justify-center">
                <img
                    ref={imageRef}
                    src={model2}
                    alt="Skincare model"
                    className="w-full  lg:w-[500px] rounded-[32px] lg:rounded-[32px] md:rounded-none h-auto object-cover"
                />

                {/* Floating Badge */}
                {/* Floating Badge */}
                <div
                    ref={badgeRef}
                    className="absolute bottom-5 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full flex items-center gap-3 shadow-md w-[250px] sm:w-[280px] z-10"
                >
                    <div className="w-10 h-10 sm:w-9 sm:9 rounded-full border-2 border-dotted border-gray-700 flex items-center justify-center">
                        <img
                            src={award}
                            className=" w-9 h-9 p-1 bg-[#2D3B36] rounded-full"
                            alt="Award icon"
                        />
                    </div>
                    <span className="text-gray-800 text-xs sm:text-sm  leading-tight">
                        Best Skin Care Product <br className="hidden sm:block" /> Award Winning
                    </span>
                </div>

            </div>
        </div>
    );
};

export default OurProducts;
