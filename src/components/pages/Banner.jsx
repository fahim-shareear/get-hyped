import React from 'react';

const Banner = () => {
  return (
    <div className="w-full min-h-screen p-6 md:p-20 font-sans">
      <div className="max-w-7xl">
        {/* - Mobile: text-[14vw] scales to width.
          - Desktop: md:text-[9rem] matches the huge size.
          - Leading: Tight line height to match the brand style.
        */}
        <h1 className="text-[14vw] md:text-[9rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter text-[#1A1A1A] mb-10">
          
          {/* Line 1 (Mobile & Desktop) */}
          Get Hyped. 
          
          {/* On Mobile: Break here. On Desktop: Keep "Get" on this line. */}
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          Get 
          
          {/* On Desktop: Break here. On Mobile: Keep "Noticed" on this line. */}
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          Noticed. 
          
          {/* Always break before "Get Results" to match both screenshots */}
          <br className="md:hidden" />
          <span className='md:hidden'></span>
          Get Results.
        </h1>
        
        <p className="text-[6vw] md:text-4xl font-semibold text-[#1A1A1A] leading-tight max-w-125 md:max-w-none">
          Klaar met gokken op content <br /> 
          die niets oplevert?
        </p>
      </div>
    </div>
  );
};

export default Banner;