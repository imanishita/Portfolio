import React, { useState } from "react";
import "./Contact.css"; // Ensure your CSS is imported

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // You can integrate an email service like EmailJS or send data to a backend API here.
    // For now, it just shows an alert.
  };

  return (
    <div className="relative w-full h-screen bg-dark">
      <div className="stars"></div> {/* Starry background */}
      <div className="form-container">
        <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
          <h2 className="text-2xl font-semibold text-blue-800 mb-8">Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              required
            />

            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              required
            />

            <label className="block text-gray-600 mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;