import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black dark:text-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 border-b border-gray-200 dark:border-gray-800">
          {/* Left */}
          <div className="px-6 md:px-10 lg:px-12 py-16 lg:py-24">
            <h2
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[60px]
                xl:text-[80px]
                leading-[0.9]
                tracking-tight
                font-normal
                max-w-[700px]
              "
            >
              Let’s start a
              <br />
              great work right
              <br />
              now
            </h2>

            <button
              className="
                mt-12
                text-xl
                border-b-2
                border-orange-400
                dark:border-white
                pb-2
                hover:opacity-70
                transition

              "
            >
              Let’s get started now
            </button>
          </div>

          {/* Right */}
          <div className="border-l border-gray-200 dark:border-gray-800 px-6 md:px-10 lg:px-16 py-16 lg:py-24">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {/* Company */}
              <div>
                <h4 className="mb-8 text-xl font-semibold">
                  Company
                </h4>

                <ul className="space-y-3 text-lg">
                  <li>
                    <a href="/">Agency</a>
                  </li>
                  <li>
                    <a href="/">Solutions</a>
                  </li>
                  <li>
                    <a href="/">Community</a>
                  </li>
                  <li>
                    <a href="/">Work</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="mb-8 text-xl font-semibold">
                  Social
                </h4>

                <ul className="space-y-3 text-lg">
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Dribbble</a>
                  </li>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                  <li>
                    <a href="/">Awwwards</a>
                  </li>
                  
                </ul>
              </div>

              {/* Office */}
              <div>
                <h4 className="mb-8 text-xl font-semibold">
                  Office
                </h4>

                <ul className="space-y-3 text-lg">
                  <li>New York</li>
                  <li>Toronto</li>
                  <li>Berlin</li>
                  <li>London</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative px-6 md:px-10 lg:px-12 py-8">
          <div className="flex justify-center text-lg text-center">
            <p>
              © 2026{" "}
              <span className="text-gray-400">
               Nuraform
              </span>{" "}
              All right reserved
            </p>
          </div>

          {/* Scroll To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              absolute
              right-6
              bottom-6
              w-12
              h-12
              shadow-lg
              rounded-full
              bg-orange-400
              text-white
              flex
              items-center
              justify-center
              hover:scale-110
              transition
            "
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;