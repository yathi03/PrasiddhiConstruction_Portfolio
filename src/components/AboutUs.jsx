export default function AboutUs() {
  return (
    <section className="w-full py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Headline */}
        <div className="text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            About Us
          </h2>
          <p
            className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Building dreams with precision, passion and professionalism. 
            Delivering construction & design solutions that exceed expectations.
          </p>
        </div>


        {/* About + Video Section (better layout) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Video Left */}
          <div className="w-full flex justify-center">
            <video
              src="/intro.mp4"
              className="w-full max-w-3xl rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          {/* About Text Right */}
          <div>
            <h3
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Story
            </h3>
            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Founded in 2024, we have been delivering exceptional construction 
              and interior solutions for the last 2 years. 
              Our mission is to build inspiring, durable spaces using modern 
              techniques and sustainable practices.  
              With a passionate team of experts, every project is handled 
              with precision, care, and high professional standards.
            </p>
          </div>
        </div>


        {/* Team & Credentials Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Team & Credentials
            </h3>
            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Our skilled team includes licensed engineers, architects, 
              interior experts and experienced project managers. 
              We prioritize transparency, timely delivery, and maintaining 
              the highest industry standards in every project.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                License
              </span>
              <span className="text-gray-700 font-medium">
                Certified Construction License.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
