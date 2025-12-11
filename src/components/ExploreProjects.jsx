// src/components/ExploreProjects.jsx
import { useState, useEffect } from "react";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";
import service8 from "../assets/service8.jpg";
import service9 from "../assets/service9.jpg";
import service10 from "../assets/service10.jpg";
import service11 from "../assets/service11.jpg";
import service12 from "../assets/service12.jpg";
import service13 from "../assets/service13.jpg";
import service14 from "../assets/service14.jpg";
import service15 from "../assets/service15.jpg";
import service17 from "../assets/service17.jpg";
import service18 from "../assets/service18.jpg";
import service19 from "../assets/service19.jpg";
import service20 from "../assets/service20.jpg";




const projectCategories = [
  {
    title: "Residential Projects",
    description: "Elegant, comfortable homes designed with precision.",
    images: [service18,service2,service7,service8,service9,service19],
  },
  {
    title: "Interior Design Projects",
    description: "Stylish and modern interior spaces with premium finishes.",
    images: [service3, service4,service10,service11,service12,service13,service14,service15],
  },
  {
    title: "Renovation Projects",
    description: "Transforming old spaces into modern masterpieces.",
    images: [service5, service6,service17,service1,service20],
  },
];

export default function ExploreProjects() {
  const [activeCategory, setActiveCategory] = useState(null);

  // Prevent background scroll when overlay is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeCategory]);

  return (
    <section className="relative w-full py-20 px-6 lg:px-16">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-black drop-shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Explore Our Projects
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Discover our craftsmanship across multiple project categories.
        </p>
      </div>

      {/* Project Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectCategories.map((category) => (
          <div
            key={category.title}
            onClick={() => setActiveCategory(category)}
            className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={category.images[0]}
              alt={category.title}
              className="w-full h-64 object-cover"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                {category.title}
              </h3>
              <p className="text-white/90 mt-1 drop-shadow-md">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay Gallery */}
      {activeCategory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center p-6 overflow-auto animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setActiveCategory(null)}
            className="fixed top-6 right-6 text-white text-4xl font-bold hover:text-red-500 transition z-50"
          >
            &times;
          </button>

          <h3
            className="text-3xl font-bold text-white mt-10 drop-shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {activeCategory.title}
          </h3>

          {/* Images */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {activeCategory.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${activeCategory.title} ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
