import { } from "react";
import quota from "../../../../assets/reviewQuote.png";
import { FaStar } from "react-icons/fa";

const CustomerReviewCard = ({ reviewData }) => {

  const { image, comment, name, location, rating } = reviewData;

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col mx-auto">
      {/* Top: Quote icon */}
      <div className="w-10 mx-auto mb-4">
        <img src={quota} alt="quote" />
      </div>

      {/* Review Message */}
      <p className="text-gray-600 text-base mb-4 text-center">“{comment}”</p>

      {/* Rating Stars */}
      <div className="flex justify-center mb-2 text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Dotted line */}
      <div className="border-t border-dotted border-gray-300 w-full my-4" />

      {/* Bottom: User info */}
      <div className="flex w-full items-center justify-center gap-4 mt-2">
        <div className="w-1/4">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="w-3/4 text-left">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
