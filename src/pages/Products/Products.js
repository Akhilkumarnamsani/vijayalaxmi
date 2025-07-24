import React from "react";
import { Link } from "react-router-dom";

// Image imports
import productsImage from "../../assets/products.png";
import vegetablesImg from "../../assets/vegetables.jpg";
import spicesImg from "../../assets/spices.jpg";
import pulsesImg from "../../assets/pulses.jpg";
import fruitsImg from "../../assets/fruits.jpg";

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Centered Hero Text */}
        <div className="relative z-10 text-center text-amber-100 px-4">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">
            Explore Nature’s Finest – Spices, Pulses, Vegetables & Seasonal Fruits
          </p>
        </div>
      </div>

      {/* Product Categories - Image + Title only */}
      <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <Link to="/products/vegetables">
          <img src={vegetablesImg} alt="Vegetables" className="w-full h-40 object-cover rounded mb-2" />
          <h3 className="text-xl font-semibold text-green-700">Vegetables</h3>
        </Link>

        <Link to="/products/spices">
          <img src={spicesImg} alt="Spices" className="w-full h-40 object-cover rounded mb-2" />
          <h3 className="text-xl font-semibold text-red-700">Spices</h3>
        </Link>

        <Link to="/products/pulses">
          <img src={pulsesImg} alt="Pulses" className="w-full h-40 object-cover rounded mb-2" />
          <h3 className="text-xl font-semibold text-yellow-700">Pulses</h3>
        </Link>

        <Link to="/products/fruits">
          <img src={fruitsImg} alt="Fruits" className="w-full h-40 object-cover rounded mb-2" />
          <h3 className="text-xl font-semibold text-orange-700"> Seasonal Fruits</h3>
        </Link>
      </div>

      {/* Product Description */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Premium Quality, Straight from the Source</h2>
        <p className="mb-4">
          At Vijayalaxmi, we bring you farm-fresh, sustainably sourced products that are packed with flavor, nutrition, and authenticity.
          Whether you’re a home chef, restaurant owner, or export partner, our products meet the highest quality standards for taste and safety.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Fresh Vegetables</h3>
        <p className="mb-4">
          Discover a variety of hand-picked, seasonal vegetables including spinach, okra, eggplants, carrots, tomatoes, cucumbers,
          gourds, and more. We prioritize freshness and sustainable farming practices to deliver vegetables that retain their natural taste and nutrients.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Authentic Spices</h3>
        <p className="mb-4">
          Our spices are pure, aromatic, and sourced directly from regional farms. Choose from turmeric powder, dried red chilies,
          cumin seeds, coriander, mustard seeds, and more — perfect for international cooking and regional cuisine.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Protein-Rich Pulses</h3>
        <p className="mb-4">
          We supply high-grade lentils and pulses such as pigeon peas, mung beans, chickpeas, split yellow lentils, and black gram.
          They’re cleaned, sorted, and packaged with care to meet global food safety standards.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Seasonal Fruits</h3>
        <p className="mb-4">
          Enjoy sweet and nutritious fruits like mangoes, guavas, bananas, papayas, custard apples, and more — grown in natural conditions
          and delivered at peak ripeness for maximum flavor and shelf life.
        </p>

        <div className="mt-6 bg-green-50 p-4 rounded-md border border-green-200">
          <p>
            We are committed to supplying premium produce locally and internationally, backed by reliable logistics and consistent quality.
            Partner with us to bring the taste of freshness to your customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
