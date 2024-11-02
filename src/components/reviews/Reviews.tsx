import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="absolute select-none hidden xl:block -left-32 top-1/3 "
        alt="reviews image"
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviews;
