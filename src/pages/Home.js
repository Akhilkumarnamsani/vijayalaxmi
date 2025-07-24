import React from "react";
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Welcome to Vijayalaxmi"
        subtitle="Authentic Indian Spices, Rice, Pulses, Vegetables & Fruits – Exported to the UK"
      />

      <div className="p-6 max-w-5xl mx-auto text-gray-700 space-y-8">

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment to Quality & Freshness</h2>
          <p className="mb-4">
            At Vijayalaxmi, we ensure that every shipment from India reaches you in peak condition — fresh, authentic, and packed with flavor. Our stringent quality controls and trusted supplier relationships guarantee excellence in every product.
          </p>
          <p>
            From aromatic spices to nutrient-rich pulses and fresh produce, we deliver consistent quality that your business and customers can rely on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Trusted Import Partner in the UK</h2>
          <p className="mb-4">
            Navigating the complexities of international trade can be challenging — that’s where we come in. Vijayalaxmi simplifies the import process, handling logistics, customs, and regulatory compliance so you don’t have to.
          </p>
          <p>
            Our expertise ensures timely deliveries, competitive pricing, and smooth transactions, making us the preferred partner for retailers, wholesalers, and distributors across the UK.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Wide Range of Products</h2>
          <p className="mb-4">
            Whether you’re looking for traditional Indian spices, high-quality rice, fresh vegetables, seasonal fruits, or wholesome pulses — we have it all. Our extensive product range is curated to meet diverse culinary and business needs.
          </p>
          <p>
            Customized orders and bulk shipments are welcome — we tailor our services to fit your business goals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sustainability & Ethical Sourcing</h2>
          <p>
            We believe in responsible business practices that support Indian farmers and promote environmental sustainability. By choosing Vijayalaxmi, you help foster fair trade and sustainable agriculture, contributing to a better future.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6 text-[#800000]">
            Ready to Elevate Your Supply Chain?
          </h2>
          <p className="mb-6 text-lg text-gray-800">
            Contact Vijayalaxmi today to discuss your import needs or request a personalized quote.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#800000] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#660000] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </section>

      </div>
    </div>
  );
};

export default Home;
