import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    title: "Creative strategies shaping future digital experiences",
    category: "Branding",
    date: "June 24, 2026",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    title: "Affordable luxury furniture trends for modern homes",
    category: "Design",
    date: "June 20, 2026",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200",
    title: "How innovative brands connect with audiences today",
    category: "Marketing",
    date: "June 18, 2026",
  },
];

const LatestNews = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = titleRef.current.querySelectorAll(".word");

      gsap.fromTo(
        words,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            markers: false, // remove after testing
          },
        }
      );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white dark:bg-black dark:text-white py-20 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Heading */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          <div>
            <span className="text-xs uppercase text-orange-400">
              // Latest News
            </span>
          </div>

          <div>
            <h2
              ref={titleRef}
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[60px]
                xl:text-[80px]
                leading-[0.9]
                tracking-tight
              "
            >
              <div>
                {"Recent Articles".split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden mr-4"
                  >
                    <span className="word inline-block">
                      {word}
                    </span>
                  </span>
                ))}
              </div>

              <div>
                {"& Perspectives".split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden mr-4"
                  >
                    <span className="word inline-block">
                      {word}
                    </span>
                  </span>
                ))}
              </div>
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300">
                 <ArrowDown size={18} />
              </button>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                We're constantly rethinking the future by creating
                the next generation of products, brands and services
                from a re-hybrid method.
              </p>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {articles.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[300px]
                    md:h-[380px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="pt-6 flex justify-between gap-5">
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-medium mt-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-3">
                    {item.date}
                  </p>
                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    flex
                    items-center
                    justify-center
                    shrink-0
                    transition-all
                    duration-300
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;