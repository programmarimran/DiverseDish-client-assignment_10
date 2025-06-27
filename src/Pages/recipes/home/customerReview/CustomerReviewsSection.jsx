import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./customCarousel.css";
import useWindowWidth from "../../../../hooks/useWindowWidth/useWindowWidth";
import { use } from "react";
import CustomerReviewCard from "./CustomerReviewCard";

const diverseDishPromise = fetch("/diverse-dish.json").then((res) =>
  res.json()
);

const CustomerReviewsSection = () => {
  const info = use(diverseDishPromise);

  const { diverseDishInfo } = info;
  const data = diverseDishInfo.userReviews;
  const reviewData = data.reviews;
  const width = useWindowWidth();

  // Adjust centerSlidePercentage based on screen width
  const centerSlidePercentage = width < 640 ? 100 : width < 1024 ? 50 : 33.33;
  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Are Saying
      </h2>
      <p className=" text-center">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div className="max-w-6xl mx-auto px-4 customCarousel">
        <Carousel
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          emulateTouch
        >
          {reviewData.map((review) => (
            <div className="carousel-slide" key={review.id}>
              <CustomerReviewCard reviewData={review} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
