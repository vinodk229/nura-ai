
import { ArrowDown } from "lucide-react";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const StatsSection = () => {
   const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      const words = titleRef.current.querySelectorAll(".word");

      gsap.from(words, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Button Bounce Animation
      gsap.to(buttonRef.current, {
        y: 10,
        duration: 1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word inline-block mr-3"
      >
        {word}
      </span>
    ));
  };


  const text = "Crafting a great product is our passion so we dare what others don't";

  return (
    <section className="bg-[#f3f3f3] py-20 lg:py-32 dark:bg-black dark:text-white">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* Heading */}
        <div className="grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-16 mb-24 relative">
          <div>
            <span className="text-xs uppercase text-orange-400">// Impression</span>
          </div>

           <h2
        ref={titleRef}
        className="
        text-[45px]
        md:text-[50px]
        lg:text-[60px]
        xl:text-[80px]
        leading-[0.9]
        tracking-[-0.05em]
        font-normal
        overflow-hidden
      "
    >
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="word inline-block mr-4 overflow-hidden"
        >
          {word}
        </span>
      ))}
    </h2>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d7d7d7] pt-10">
          <div className="grid lg:grid-cols-[320px_1fr] gap-16">
            {/* Left Side */}
            <div className="flex flex-col justify-between">
               <button
                  ref={buttonRef}
                  className="
                    w-10 h-10
                    rounded-full
                    bg-orange-400
                    text-white
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                  "
                >
                  <ArrowDown size={18} />
                </button>

              <p className="text-[18px] leading-[1.5] text-[#555] max-w-[290px] mt-20 lg:mt-40">
                Our approach combines creativity with insights, using user
                data to refine designs that are not only appealing but also
                more effective.
              </p>
            </div>

            {/* Right Side */}
            <div>
              {/* Main Stat */}
              <div className="pb-10">
                <h3
                  className="
                    text-[100px]
                    md:text-[150px]
                    lg:text-[180px]
                    xl:text-[200px]
                    leading-none
                    tracking-[-0.05em]
                    font-normal
                  "
                >
                  300+
                </h3>

                <div className="border-t border-[#d7d7d7] mt-8 pt-5">
                  <p className="text-xl leading-tight">
                    Crafted digital
                    <br />
                    products
                  </p>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-20">
                <div>
                  <h4 className="text-[90px] md:text-[120px] leading-none font-normal tracking-[-0.05em]">
                    17+
                  </h4>

                  <div className="border-t border-[#d7d7d7] mt-8 pt-5">
                    <p className="text-xl">
                      Years
                      <br />
                      of experience
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[90px] md:text-[120px] leading-none font-normal tracking-[-0.05em]">
                    80
                  </h4>

                  <div className="border-t border-[#d7d7d7] mt-8 pt-5">
                    <p className="text-xl">
                      Skilled team
                      <br />
                      players
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;