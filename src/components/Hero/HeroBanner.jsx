import {
  service1,
  service2,
  service3,
  service4,
} from "../../asstes/assets";

const HeroSection = () => {
  return (
    <section className="relative py-5 lg:py-16 overflow-hidden dark:bg-black dark:text-white">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row gap-6">
            
            <div>
              <img
                src={service1}
                alt="Design"
                className="w-full sm:w-[280px] h-[400px] object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-bold">
                [ Design ]
              </h3>
            </div>

            <div className="sm:mt-0">
              <img
                src={service2}
                alt="Development"
                className="w-full sm:w-[200px] h-[280px] object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-bold">
                [ Development ]
              </h3>
            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-10">

            {/* Info Box */}
            <div className="lg:max-w-xl xl:max-w-[38rem] lg:ml-auto">
              <h3 className="mb-4 text-lg font-bold">
                [ Information ]
              </h3>

              <p className="leading-relaxed">
                Our mission is to empower brands with tailor-made expertise
                that ignites creativity and growth without limits.
              </p>
            </div>

            {/* Bottom Images */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">

              <div>
                <img
                  src={service3}
                  alt="Creative"
                  className="w-full sm:w-[200px] h-[250px] object-cover rounded-md border-gray-800 border"
                />
                <h3 className="mt-4 text-lg font-bold">
                  [ Creative ]
                </h3>
              </div>

              <div className="flex-1">
                <img
                  src={service4}
                  alt="Agency"
                  className="w-full h-[300px] sm:h-[450px] object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-bold">
                  [ Branding ]
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;