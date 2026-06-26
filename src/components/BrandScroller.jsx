import React from 'react'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brands } from '../asstes/assets';
gsap.registerPlugin(ScrollTrigger);
const BrandScroller = () => {
    const sectionRef = useRef();
  const trackRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current,
        {
          xPercent: 0,
        },
        {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
     <section
      ref={sectionRef}
      className="py-10 bg-[#f5f5f5] overflow-hidden"
    >
      <div className="relative">
        <div
          ref={trackRef}
          className="flex items-center gap-20 whitespace-nowrap"
        >
          {[...brands, ...brands].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand"
              className="h-6 md:h-9 w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandScroller