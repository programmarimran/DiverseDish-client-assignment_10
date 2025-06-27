import React, { use } from "react";

const diverseDishPromise = fetch("/diverse-dish.json").then((res) =>
  res.json()
);

const FeatureSection = () => {
  const info = use(diverseDishPromise);

  const { diverseDishInfo } = info;
  const data = diverseDishInfo.whyChooseUs;
  const features = data.features;
  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-2">
            Why Choose Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
            Discover the benefits of working with a logistics company that cares
            about your delivery, your time, and your satisfaction.
          </p>
        </div>

        {/* Feature Items */}
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex flex-col md:flex-row items-center bg-gradient-to-t from-[#f0fff1] to-[#dbeafe]  shadow-md border border-gray-200 rounded-lg p-6 md:gap-12 gap-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Left: Image */}
              <div className="md:w-1/3 flex justify-center">
                {/* <img
                  src={img[index]}
                  alt={feature.title}
                  className="w-40 h-40 object-contain"
                /> */}
                <h1 className="text-7xl object-contain">{feature.icon}</h1>
              </div>

              {/* Middle: Vertical dashed bar */}
              <div className="hidden md:flex w-px h-40 border-l-2 border-dashed border-gray-300"></div>

              {/* Right: Text */}
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                   {feature.title}
                </h3>
                <p className="text-gray-700 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
