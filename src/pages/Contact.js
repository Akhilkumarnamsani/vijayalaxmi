import React, { useState } from "react";
import contactImage from "../assets/contact.png";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formsubmit.co/ajax/support@vijayalaxmiltd.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      form.reset();
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 5000); // Hide message after 5 seconds
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
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

        {/* ✅ Success Message */}
        {messageSent && (
          <div className="mb-4 p-4 rounded-xl bg-red-100 text-red-700 font-semibold shadow">
             Message Sent Successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-white p-6 rounded-2xl shadow-md"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              placeholder="Let us know how we can help..."
              rows="4"
              required
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
