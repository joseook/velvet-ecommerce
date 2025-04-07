import React, { useState } from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiEye, FiShoppingBag, FiHeart } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Silk Blend Wrap Dress",
    price: 129.99,
    originalPrice: 159.99,
    rating: 5.0,
    color: "Ivory",
    isNew: true,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Modern Tailored Blazer",
    price: 175.00,
    rating: 4.5,
    color: "Charcoal",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img3,
    title: "Oversized Sunglasses",
    price: 89.00,
    rating: 4.7,
    color: "Tortoiseshell",
    aosDelay: "200",
  },
  {
    id: 4,
    img: Img4,
    title: "Organic Cotton Tee",
    price: 45.00,
    rating: 4.4,
    color: "Sage",
    isNew: true,
    aosDelay: "300",
  },
  {
    id: 5,
    img: Img2,
    title: "Minimalist Wool Coat",
    price: 229.00,
    originalPrice: 275.00,
    rating: 4.5,
    color: "Camel",
    aosDelay: "400",
  },
];

// Rating component for cleaner implementation
const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex text-sm">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-primary" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-primary" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-primary" />
      ))}
    </div>
  );
};

const Products = ({ handleOrderPopup }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="container-tight">
        {/* Header section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 
            data-aos="fade-up" 
            className="font-display text-3xl md:text-4xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100"
          >
            Curated Collection
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100" 
            className="text-neutral-600 dark:text-neutral-300 mb-8"
          >
            Explore our thoughtfully selected pieces, designed with quality and timeless style in mind.
          </p>
          
          {/* Filter tabs - could be implemented fully later */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200" 
            className="inline-flex flex-wrap justify-center gap-2 mb-8 bg-white dark:bg-neutral-800 p-1 rounded-full shadow-sm"
          >
            <button className="px-6 py-2 text-sm font-medium rounded-full bg-primary text-white">All</button>
            <button className="px-6 py-2 text-sm font-medium rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">New Arrivals</button>
            <button className="px-6 py-2 text-sm font-medium rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">Bestsellers</button>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {ProductsData.map((product) => (
            <div
              data-aos="fade-up"
              data-aos-delay={product.aosDelay}
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product card */}
              <div className="card overflow-hidden h-full flex flex-col bg-white dark:bg-neutral-800 transition-all duration-300 hover:shadow-lg">
                {/* Image container */}
                <div className="relative overflow-hidden">
                  {/* New tag */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      New
                    </div>
                  )}
                  
                  {/* Sale tag */}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 z-10 bg-accent text-primary text-xs font-medium px-2 py-1 rounded">
                      Sale
                    </div>
                  )}
                  
                  {/* Product image */}
                  <div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[3/4]">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Quick actions overlay */}
                  <div className={`absolute inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <button 
                      className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 p-2 rounded-full hover:bg-primary hover:text-white transform transition-all duration-200 hover:scale-110"
                      title="Quick view"
                    >
                      <FiEye />
                    </button>
                    <button 
                      onClick={handleOrderPopup}
                      className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 p-2 rounded-full hover:bg-primary hover:text-white transform transition-all duration-200 hover:scale-110"
                      title="Add to cart"
                    >
                      <FiShoppingBag />
                    </button>
                    <button 
                      className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 p-2 rounded-full hover:bg-primary hover:text-white transform transition-all duration-200 hover:scale-110"
                      title="Add to wishlist"
                    >
                      <FiHeart />
                    </button>
                  </div>
                </div>
                
                {/* Product info */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="font-display font-medium text-neutral-800 dark:text-neutral-100 mb-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                      {product.color}
                    </p>
                    <div className="flex items-center mb-3">
                      <Rating rating={product.rating} />
                      <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
                        ({product.rating})
                      </span>
                    </div>
                  </div>
                  
                  {/* Price and button section */}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium text-neutral-800 dark:text-neutral-100">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-neutral-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={handleOrderPopup}
                      className="text-primary hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                    >
                      <span className="sr-only">Add to cart</span>
                      <FiShoppingBag className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all products button */}
        <div className="flex justify-center mt-12">
          <a 
            href="#collections" 
            className="btn-outline inline-flex items-center gap-2 group"
          >
            <span>View All Products</span>
            <HiArrowLongRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
