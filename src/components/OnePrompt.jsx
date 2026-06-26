import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);
const OnePrompt = () => {
 const sectionRef = useRef(null);

   useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
  }

  const leftProjects = projects.filter((_, index) => index % 2 === 0);
  const rightProjects = projects.filter((_, index) => index % 2 !== 0);

  return (
   <section
      ref={sectionRef}
      className="bg-black text-white py-24 lg:py-32"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-16">
            {leftProjects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[650px]
                      object-cover
                      transition-all
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>

                <div className="flex justify-between items-end mt-5 pb-5 border-b border-white/10">
                  <h3 className="max-w-[280px] text-sm leading-relaxed">
                    {project.title}
                  </h3>

                  <button
                    className="
                       flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-orange-400
                        text-xs
                        hover:bg-white
                        hover:text-black
                        transition-all
                    "
                  >
                    View
                    <ArrowRight size={14} />
                  </button>
                  
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <span className="text-xs uppercase tracking-wider text-orange-400">
               [ Selected work ]
            </span>

            <div className="portfolio-title mt-4 mb-12">
              <h2
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-[80px]
                  leading-[0.9]
                  font-light
                "
              >
                <div className="overflow-hidden">
                  {splitWords("Take a look at")}
                </div>
                <div className="overflow-hidden">
                  {splitWords("our projects")}
                </div>
              </h2>
            </div>

            <div className="space-y-16">
              {rightProjects.map((project) => (
                <div key={project.id} className="portfolio-card">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-[650px]
                        object-cover
                        transition-all
                        duration-700
                        hover:scale-105
                      "
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5 pb-5 border-b border-white/10">
                    <h3 className="max-w-[290px] leading-relaxed">
                      {project.title}
                    </h3>

                    <button
                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-orange-400
                        text-xs
                        hover:bg-white
                        hover:text-black
                        transition-all
                      "
                    >
                      View
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OnePrompt;