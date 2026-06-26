import React from 'react'
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    title: "Educators",
    items: [
      "Empowering learners through engaging instruction, practical knowledge, and lifelong growth opportunities.",
    ],
  },
  {
    title: "Consultants",
    items: [
      "Providing expert guidance, strategic solutions, and actionable insights for business success.",
    ],
  },
  {
    title: "Freelancers",
    items: [
      "Delivering flexible, high-quality services independently while meeting diverse client requirements.",
    ],
  },
  {
    title: "Community Leads",
    items: [
      "Building strong connections, fostering collaboration, and inspiring meaningful community engagement.",
    ],
  },
];
const WeThinkOut = () => {
   const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Existing text animation
      gsap.fromTo(
        ".word",
        {
          y: 100,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button bounce animation
      gsap.to(buttonRef.current, {
        y: 10,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word inline-block mr-4 opacity-0"
      >
        {word}
      </span>
    ));
  };

  return (
   <section className="dark:bg-black dark:text-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[220px_1fr] gap-10" ref={sectionRef}>
          <div>
            <span className="text-sm font-medium opacity-80 uppercase text-orange-400">
              // What we do
            </span>
          </div>

          <div>
            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[80px]
                leading-[0.9]
                font-light
                tracking-tight
              "
            >
              <div className="overflow-hidden">
                {splitWords("We think out of the box")}
              </div>

              <div className="overflow-hidden">
                {splitWords("for tailor-made service")}
              </div>
            </h2>
          </div>
        </div>
        <div className="border-t border-white/15 lg:mt-20 mb-20"></div>
        <div className="grid lg:grid-cols-[450px_1fr] gap-10">
          <div>
             <button
              ref={buttonRef}
              className="
                w-10 h-10
                rounded-full
                bg-orange-400
                border border-white
                flex items-center justify-center
                transition-all
                text-white
              "
            >
              ↓
            </button>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:gap-y-20 gap-x-24">
            {services.map((service, index) => (
              <div key={index} className='lg:flex gap-5'>
                <h3 className="text-2xl font-medium mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-1">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="
                        text-lg
                        text-gray-500
                        transition-colors
                      "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeThinkOut