import React from "react";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <div>
      {/* Hero Section with full image covering hero */}
      <div
        className="relative w-full h-[60vh] bg-center bg-no-repeat bg-cover flex items-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Text Content aligned right but with centered text */}
        <div className="relative z-10 max-w-xl p-6 ml-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-amber-100">About Vijayalaxmi</h1>
          <p className="text-xl text-amber-100">
            Rooted in Telangana’s Culture, Driven by Freshness
          </p>
        </div>
      </div>

      {/* About Content Body */}
      <div className="p-6 max-w-5xl mx-auto text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Vijayalaxmi was founded with the vision of delivering premium quality agricultural products to every household. Our legacy is built on trust, transparency, and a deep understanding of the local farming ecosystem.
          </p>
          <p>
            From humble beginnings in Telangana, we’ve grown to become a name known for purity and authenticity. Every product we sell carries the flavor of tradition and the assurance of health.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Sourcing Philosophy</h2>
          <p className="mb-4">
            We maintain close relationships with small-scale farmers and local cooperatives in Telangana to ensure that our products are not only fresh but ethically sourced. We believe that supporting local agriculture helps sustain communities and preserves traditional farming methods.
          </p>
          <p>
            Our commitment to quality starts at the farm — carefully selecting produce and ingredients that meet strict quality standards before they reach your kitchen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Vision & Values</h2>
          <p className="mb-4">
            At Vijayalaxmi, we envision a world where authentic Indian flavors are accessible globally while empowering farmers and promoting sustainable practices. Our core values include integrity, customer satisfaction, and environmental responsibility.
          </p>
          <p>
            We continuously innovate to improve our supply chain and packaging to reduce waste and maintain the freshness of our products.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Vijayalaxmi?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Trusted partner with deep local knowledge of Telangana’s agricultural landscape.</li>
            <li>High-quality, authentic products sourced directly from farmers.</li>
            <li>Strict quality control and hygienic packaging to ensure freshness and safety.</li>
            <li>Commitment to sustainable and fair-trade practices.</li>
            <li>Reliable export experience ensuring timely delivery to customers worldwide.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment to Sustainability</h2>
          <p>
            We continuously work towards minimizing our environmental impact by adopting eco-friendly packaging and reducing waste across our supply chain. Supporting local farmers and preserving traditional agriculture helps promote biodiversity and sustainable livelihoods.
          </p>
          <p>
            At Vijayalaxmi, sustainability is not just a buzzword — it's the foundation of everything we do.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
