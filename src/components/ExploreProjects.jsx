import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    images: [service18, service2, service7, service8, service9, service19],
  },
  {
    title: "Interior Design Projects",
    description: "Stylish and modern interior spaces with premium finishes.",
    images: [
      service3,
      service4,
      service10,
      service11,
      service12,
      service13,
      service14,
      service15,
    ],
  },
  {
    title: "Renovation Projects",
    description: "Transforming old spaces into modern masterpieces.",
    images: [service5, service6, service17, service1, service20],
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ExploreProjects() {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeCategory ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCategory]);

  return (
    <>
      {/* MAIN SECTION */}
      <section className="py-20 px-4 lg:px-10 bg-white">
      <h2
        className="text-3xl sm:text-4xl font-bold text-black mb-12 drop-shadow-lg text-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Explore Projects
      </h2>

        <div className="max-w-7xl mx-auto space-y-20">
          {projectCategories.map((category, index) => (
            <div
              key={category.title}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Image */}
              <div
                onClick={() => setActiveCategory(category)}
                className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              >
                <img
                  src={category.images[0]}
                  alt={category.title}
                  className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Animated Text Content */}
              <motion.div
                className="lg:w-1/2 w-full text-left"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.title}
                </h3>

                <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                  {category.description}
                </p>

                <button
                  onClick={() => setActiveCategory(category)}
                  className="mt-6 px-8 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:bg-gray-800 transition"
                >
                  Explore Gallery
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY MODAL */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white max-w-6xl w-full rounded-2xl p-6 relative overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCategory(null)}
              className="absolute top-4 right-4 text-2xl font-bold text-black"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-6">
              {activeCategory.title}
            </h2>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCategory.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${activeCategory.title} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
