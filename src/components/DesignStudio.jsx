import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shapStar from "../asstes/shape-s-4.svg";
gsap.registerPlugin(ScrollTrigger);
const DesignStudio = () => {
     const sectionRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.from(".char", {
        y: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.04,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Content animation
      gsap.from(".content", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Star rotation
      gsap.to(".star", {
        rotate: 360,
        duration: 15,
        repeat: -1,
        ease: "none",
      });

      // Large circle scroll animation
      gsap.fromTo(
        circleRef.current,
        {
          y: -500,
          scale: 0.8,
          rotation: 0,
        },
        {
          y: 1000,
          scale: 1.2,
          rotation: 180,
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

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
     <section
      ref={sectionRef}
      className="relative bg-white dark:bg-black dark:text-white overflow-hidden pt-16 pb-24"
    >
      {/* Large Moving Circle */}
      <div
        ref={circleRef}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[-500px]
          w-[800px]
          h-[800px]
          md:w-[1200px]
          md:h-[1200px]
          lg:w-[1600px]
          lg:h-[1600px]
          rounded-full
          border
          border-orange-500/20
          pointer-events-none
          z-0
        "
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* We're */}
        <div className="overflow-hidden">
          <h2
            className="
              uppercase
              font-black
              leading-[0.85]
              tracking-[-0.05em]
              text-[50px]
              sm:text-[60px]
              md:text-[70px]
              lg:text-[100px]
              xl:text-[140px]
            "
          >
            {splitText("Stunning, AI-")}
          </h2>
        </div>

        {/* Design */}
        <div className="overflow-hidden flex items-center gap-4 md:gap-8">
          <img
            src={shapStar}
            alt="shape star"
            className="
              star
              w-12
              h-12
              md:w-20
              md:h-20
              lg:w-32
              lg:h-32
              object-contain
              flex-shrink-0
            "
          />

          <h2
            className="
              uppercase
              font-black
              leading-[0.85]
              tracking-[-0.05em]
              text-transparent
              [-webkit-text-stroke:2px_#ff6b00]
              text-[50px]
              sm:text-[60px]
              md:text-[70px]
              lg:text-[100px]
              xl:text-[140px]
            "
          >
            {splitText("Powered Forms in")}
          </h2>
        </div>

       
        <div className="overflow-hidden lg:pl-80">
          <h2
            className="
              uppercase
              font-black
              leading-[0.85]
              tracking-[-0.05em]
              text-[50px]
              sm:text-[60px]
              md:text-[70px]
              lg:text-[100px]
              xl:text-[140px]
            "
          >
            {splitText("Seconds.")}
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-xl ml-auto mt-8">
          <p className="text-xl leading-relaxed content">
            We are a design and development studio creating modern digital
            experiences with React, GSAP and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DesignStudio