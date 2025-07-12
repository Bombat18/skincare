<div className="relative bg-[#EFF5E1] overflow-hidden pt-28 hidden lg:block">
  {/* SKINCARE Background Text */}
  <h1
    ref={skincareRef}
    className="absolute inset-0 flex justify-center items-end md:text-[300px] font-bold text-[#2D3B36] z-0 leading-none select-none font-inter tracking-tight whitespace-nowrap overflow-hidden"
  >
    SKINCARE
  </h1>

  {/* Shop Now Button */}
  <div ref={shopNowRef} className="z-10 relative px-10 left-14 bottom-7">
    <button className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800">
      Shop Now
    </button>
  </div>

  {/* Model Image + Testimonial */}
  <div className="relative bottom-10 z-10 flex flex-col items-center">
    <img
      ref={modelImgRef}
      src={model1}
      alt="Model"
      className="w-[330px] h-[380px] object-cover rounded-2xl shadow-lg"
    />

    {/* Testimonial */}
    <div
      ref={testimonialRef}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full flex items-center gap-3 shadow-md w-[280px]"
    >
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
