// src/components/ContactOverlay.jsx
export default function ContactOverlay({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center p-6 overflow-auto">
      
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="fixed top-6 right-6 text-white text-4xl font-bold hover:text-red-500 transition z-50"
      >
        &times;
      </button>

      {/* Title */}
      <h2
        className="text-4xl font-bold text-white mt-16 drop-shadow-xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Contact Us
      </h2>

      <p className="text-gray-200 mt-2 text-lg text-center max-w-2xl">
        We would love to hear from you. Reach out to us anytime.
      </p>

      {/* Contact Box */}
      <div className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Details */}
          <div className="text-white space-y-6">
            <div>
              <h3
                className="text-2xl font-semibold mb-2 drop-shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Contact Information
              </h3>
              <p className="text-gray-300">Phone: <span className="text-white font-medium">+91 6361253544 | | 7411089029 </span></p>
              <p className="text-gray-300">Email: <span className="text-white font-medium">prasiddhiconstructions28@gmail.com</span></p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold mb-2 drop-shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Address
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ground Floor, No-6,Jai Shree Ram Building, ParvathiNagar Main Rd, Parvathi Nagar, Ballari, Karnataka 583103<br />
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-80">
            <iframe
              title="location-map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.694920796545!2d76.92355251462835!3d15.151822707962568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7117caa4b6069%3A0xee4f6a9cdcddde19!2sDomino&#39;s%20Pizza%20Bellari!5e0!3m2!1sen!2sin!4v1764952490770!5m2!1sen!2sin"/>
          </div>

        </div>
      </div>
    </div>
  );
}
