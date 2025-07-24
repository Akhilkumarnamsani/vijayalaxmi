import React from "react";
import contactImage from "../assets/contact.png";

const Contact = () => {
  return (
    <div>
      {/* Hero Section with limited height */}
      <div className="relative w-full max-h-[400px] overflow-hidden">
        <img
          src={contactImage}
          alt="Contact Banner"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-amber-100 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
          <p className="text-base md:text-lg mt-2">We’re Happy to Connect with You</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="p-6 max-w-3xl mx-auto text-gray-700">
        <p className="mb-8 text-lg text-gray-600">
          Have a question, bulk inquiry, or feedback? Fill out the form below or contact us via the details provided.
        </p>

        <form className="grid grid-cols-1 gap-6 bg-white p-6 rounded-2xl shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              placeholder="Let us know how we can help..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
