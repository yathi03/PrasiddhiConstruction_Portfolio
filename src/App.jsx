// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ExploreProjects from "./components/ExploreProjects";
import ContactOverlay from "./components/ContactOverlay";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="font-sans">
      <Header setContactOpen={setContactOpen} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <ExploreProjects />
        </section>

        <section id="contact">
          <ContactOverlay open={contactOpen} setOpen={setContactOpen} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
