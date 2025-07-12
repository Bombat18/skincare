import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Para = () => {
  const textRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    // Split paragraph into words
    splitInstance.current = new SplitType(textRef.current, {
      types: "words",
    });

    const words = splitInstance.current.words;

    // Add responsive class to each word
    words.forEach((word) => {
      word.classList.add("split-word");
    });

    // Set initial light color
    gsap.set(words, {
      color: "rgba(0, 0, 0, 0.2)",
    });

    // Animate to black on scroll
    gsap.to(words, {
      color: "#000000",
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      splitInstance.current?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="  px-4 sm:px-8 md:px-12 flex justify-center items-start py-16">
      <p
        ref={textRef}
        className="max-w-6xl font-inter text-left text-[#2D3B36]"
      >
        Experience the ultimate in skincare with our expertly formulated products,
        crafted to nourish, protect, and rejuvenate your skin. Combining the finest
        natural ingredients with advanced science, our collection ensures every
        skin type can achieve a radiant, healthy glow. Embrace your beauty with
        confidence every day. Experience the ultimate in skincare with our
        expertly formulated products, crafted to nourish, protect, and rejuvenate
        your skin.
      </p>
    </div>
  );
};

export default Para;
