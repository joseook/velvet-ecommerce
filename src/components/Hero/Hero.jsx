import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import { HiArrowLongRight } from "react-icons/hi2";

const HeroContent = [
  {
    id: 1,
    img: Image1,
    title: "Timeless Elegance",
    tagline: "New Collection",
    description:
      "Discover curated pieces that embody sophistication and modern style for every occasion.",
  },
  {
    id: 2,
    img: Image2,
    title: "Modern Essentials",
    tagline: "Exclusive Selection",
    description:
      "Elevate your wardrobe with premium staples designed for comfort and versatility.",
  },
  {
    id: 3,
    img: Image3,
    title: "Seasonal Edit",
    tagline: "Limited Time",
    description:
      "Explore our carefully curated collection featuring the season's most coveted styles.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-indicator",
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    pauseOnHover: false,
    pauseOnFocus: true,
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-neutral-300 dark:bg-neutral-700 opacity-50 transition-opacity duration-300 hover:opacity-100"></div>
    ),
  };

  return (
    <div className="relative overflow-hidden min-h-[85vh] bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 transition-colors duration-300">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 rounded-bl-[100px] dark:bg-primary/5"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-tr-[100px] dark:bg-secondary/10"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 pt-28 md:pt-32 pb-12 md:pb-16">
        <Slider {...settings} className="hero-slider">
          {HeroContent.map((slide) => (
            <div key={slide.id} className="focus:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text content section */}
                <div className="flex flex-col justify-center px-4 md:px-6 lg:pl-0 lg:pr-12 text-center lg:text-left order-2 lg:order-1">
                  <span 
                    data-aos="fade-up" 
                    data-aos-duration="400"
                    className="inline-block mb-3 text-sm uppercase tracking-wider font-medium text-primary dark:text-accent"
                  >
                    {slide.tagline}
                  </span>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 text-balance"
                  >
                    {slide.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className="text-neutral-600 dark:text-neutral-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
                  >
                    {slide.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="btn-primary"
                    >
                      Shop Now
                    </button>
                    <a href="#collections" className="btn-outline">
                      <span>View Collections</span>
                      <HiArrowLongRight className="ml-2 text-xl" />
                    </a>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 lg:order-2 px-8 md:px-12 lg:px-0">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="800"
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100/80 to-transparent dark:from-neutral-900/80 rounded-3xl transform -rotate-6 scale-95 dark:opacity-70"></div>
                    <div className="relative z-10 overflow-hidden rounded-2xl bg-white/30 dark:bg-neutral-800/30 backdrop-blur-sm shadow-xl">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-[400px] md:h-[500px] object-contain object-center transform transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Scroll</span>
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
