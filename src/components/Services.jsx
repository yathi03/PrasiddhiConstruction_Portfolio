// src/components/Services.jsx
import residentialImg from "../assets/residential.jpg";
import interiorImg from "../assets/interior.jpg";
import renovationImg from "../assets/renovation.jpg";
import projectManageImg from "../assets/projectmanage.jpg";

const services = [
  {
    title: "Residential Construction",
    description: "Building your dream homes with precision and care.",
    image: residentialImg,
  },
  {
    title: "Interior Design Services",
    description: "Creating modern, comfortable, and stylish interiors.",
    image: interiorImg,
  },
  {
    title: "Renovation Services",
    description: "Transforming and upgrading spaces with expert craftsmanship.",
    image: renovationImg,
  },
  {
    title: "Project Management Services",
    description:
      "Planning, coordinating, and executing construction projects efficiently.",
    image: projectManageImg,
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-16">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-black mb-12 drop-shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-default"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 text-left z-10">
                <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-white/90 mt-1 drop-shadow-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
