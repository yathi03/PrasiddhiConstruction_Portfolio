// src/components/Hero.jsx
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay (optional, subtle dark overlay) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Building Dreams <br /> Building Lifestyles
        </h1>
        {/* Optional subtitle */}
        <p className="mt-4 text-white/90 text-lg sm:text-xl md:text-2xl drop-shadow-md">
          Your vision, our expertise.
        </p>
        {/* Optional CTA button */}
        {/* <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition">Get Started</button> */}
      </div>
    </section>
  );
}
