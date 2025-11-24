import { useState } from "react";

const testimonials = [
  {
    author: "Alan Miller",
    text: "Have used Gary a few times now and you will not be disappointed, first class service, on time, very tidy and workmanship second to none, top guy",
  },
  {
    author: "Ryan Jeffries",
    text: "GN Roofing and scaffolding services went over and beyond to provide us 5 star service. Our roof looks brand new after demossing the front and back. Couldn't recommend their service enough and will be using them in the future. Thanks 👍",
  },
  {
    author: "Georgina Kane",
    text: "I have used this company to build and dismantle scaffolding for me. All I can say is they provide a fast and effective service. Highly skilled and reliable. I Defo would recommend and use again in the future.",
  },
  {
    author: "Customer Review",
    text: "Came and fixed a problem some other roofing company's couldn't, neat&tidy job!",
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="box-border caret-transparent mt-5 md:mt-5 relative">
      <div className="box-border caret-transparent p-4 bg-slate-100 rounded-lg md:p-5 relative">
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 items-center bg-white box-border caret-transparent flex h-10 justify-center w-10 rounded-[50%] shadow-md hover:bg-gray-100 transition-colors z-10 md:h-12 md:w-12"
          aria-label="Previous testimonial"
        >
          <svg
            className="box-border caret-transparent h-5 w-5 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="box-border caret-transparent px-10 md:px-12">
          <p className="text-gray-700 text-base italic box-border caret-transparent leading-6 md:text-lg md:leading-7">
            "{currentTestimonial.text}"
          </p>
          <p className="text-gray-900 text-sm font-semibold box-border caret-transparent mt-3 md:text-base">
            - {currentTestimonial.author}
          </p>
        </div>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 items-center bg-white box-border caret-transparent flex h-10 justify-center w-10 rounded-[50%] shadow-md hover:bg-gray-100 transition-colors z-10 md:h-12 md:w-12"
          aria-label="Next testimonial"
        >
          <svg
            className="box-border caret-transparent h-5 w-5 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="box-border caret-transparent flex items-center justify-center gap-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`box-border caret-transparent h-2 w-2 rounded-[50%] transition-colors ${
              index === currentIndex ? "bg-gray-900" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


