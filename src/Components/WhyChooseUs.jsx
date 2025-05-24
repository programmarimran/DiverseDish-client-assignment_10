import React, { use } from "react";
import ProductContext from "../contexts/ProductContext";

const diverseDishPromise = fetch("/diverse-dish.json").then((res) => res.json());

const WhyChooseUs = () => {
  const { darkIstrue } = use(ProductContext);
  const info = use(diverseDishPromise);

  const { diverseDishInfo } = info;
  const data = diverseDishInfo.whyChooseUs;
  const features = data.features;

  return (
    <div>
      <div className="text-center w-3/4 mx-auto mb-12 space-y-4">
        <h1 className={`text-2xl font-bold ${darkIstrue ? "text-gray-200" : "text-gray-800"}`}>
          {data.title}
        </h1>
        <p className={`text-sm font-medium ${darkIstrue ? "text-gray-400" : "text-gray-500"}`}>
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
        {features.map((item) => (
          <div
            key={item.id}
            className={`shadow-2xl p-8 text-center space-y-4 rounded-2xl
              ${
                darkIstrue
                  ? "bg-gradient-to-t from-slate-900 to-slate-800 text-gray-300"
                  : "bg-gradient-to-t from-[#f0fff1] to-[#dbeafe] text-gray-800"
              }`}
          >
            <p className="text-7xl">{item?.icon && item.icon}</p>
            <h1 className="text-2xl">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
