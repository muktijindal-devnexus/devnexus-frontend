"use client";

import { useState } from "react";

import React from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    lookingFor: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.lookingFor.trim())
      newErrors.lookingFor = "This field is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        lookingFor: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-[#f2f7fc] flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-10">
        {/* Heading Section */}
        <div className="lg:w-1/2 flex items-center">
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#002b5b] leading-snug">
            Let's Make Your Brand Shine & Competitors Envy!
          </h1>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-sm text-gray-600 mb-6">
            Please fill out the form to help us understand the areas where you
            require assistance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Name & Email */}
            <div className="flex  gap-4">
              <div className=" border-[#828282] border-1 p-3.5 rounded-2xl">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>
              <div className="border-[#828282] border-1 p-3.5 rounded-2xl">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Row 2: Country Code, Phone, Website */}
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className=" border-[#828282] border-1 rounded-xl">
                <input
                  value="IN +91"
                  readOnly
                  className="w-20 text-center text-sm px-2 py-2 rounded-md"
                />
              </div>
              <div className=" border-[#828282] border-1 rounded-xl">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className=" text-center text-sm px-2 py-2 rounded-md"
                />
              </div>
              <div className=" border-[#828282] border-1 rounded-xl">
                <input
                  type="url"
                  name="website"
                  placeholder="Website URL"
                  value={formData.website}
                  onChange={handleChange}
                  className=" text-center text-sm px-2 py-2 rounded-md"
                />
              </div>
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}

            {/* Row 3: Looking For */}
            <div className=" border-[#828282] border-1 rounded-xl w-1/2">
              <input
                type="text"
                name="lookingFor"
                placeholder="Looking for*"
                value={formData.lookingFor}
                onChange={handleChange}
                className=" text-center text-sm px-2 py-2 rounded-md"
              />
            </div>
            {errors.lookingFor && (
              <p className="text-red-500 text-sm">{errors.lookingFor}</p>
            )}

            {/* Row 4: Message */}
            <div className=" border-[#828282] border-1 rounded-xl">
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className=" text-center text-sm px-2 py-2 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#002b5b] hover:bg-[#003d82] text-white py-3 px-6 rounded-md font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
