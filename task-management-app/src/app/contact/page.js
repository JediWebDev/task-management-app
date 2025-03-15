"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Placeholder for now
    setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="What would you like to say?"
            className="mt-1 w-full p-2 border rounded h-28 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
