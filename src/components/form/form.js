"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    role: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Name validation: ensure it does not contain numbers
    if (/\d/.test(formData.name)) {
      errors.name = "Name should not contain numbers.";
      valid = false;
    }

    // Phone validation: ensure it contains exactly 10 digits
    if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number should contain exactly 10 digits.";
      valid = false;
    }

    setFieldErrors(errors);
    return valid;
  };
  const handleCancel = ()=>{
    setFormData({
      name: "",
      email: "",
      city: "",
      phone: "",
      role: "",
      message: "",
    });
    setFieldErrors({
      name: "",
      phone: "",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");
    setFieldErrors({});

    // First, validate the form
    if (!validateForm()) {
      setSubmitting(false);
      return;
    }


    const formspreeEndpoint = "https://formspree.io/f/xanqjyev"; // Replace with your Formspree form endpoint

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataToSend,
      });

      const responseBody = await response.json(); // Log response for debugging

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          city: "",
          phone: "",
          role: "",
          message: "",
        });
      } else {
        setErrorMessage(
          "Error submitting form: " + (responseBody.error || "Unknown error")
        );
      }
    } catch (error) {
      setErrorMessage("Network error: " + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container bg-white p-[5%]">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-items grid grid-cols-2 grid-flow-row gap-5 mb-5">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              value={formData.name}
              className="p-1 border-2 border-gray-300"
            />
            {fieldErrors.name && (
              <p className="text-red-500 text-[10px]">{fieldErrors.name}</p>
            )}
          </div>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            onChange={handleChange}
            value={formData.email}
            className="p-1 border-2 border-gray-300" 
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
            value={formData.city}
            className="p-1 border-2 border-gray-300"
          />
          <div className="flex flex-col">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              value={formData.phone}
              className="p-1 border-2 border-gray-300"
            />
            {fieldErrors.phone && (
              <p className="text-red-500 text-[10px]">{fieldErrors.phone}</p>
            )}
          </div>

          <input
            type="text"
            name="role"
            placeholder="Apply role"
            required
            onChange={handleChange}
            value={formData.role}
            className="p-1 border-2 border-gray-300"
          />
        </div>

        <div className="mb-5 ">
          <textarea
            name="message"
            placeholder="Type your message here."
            rows="6"
            cols='40'
            required
            onChange={handleChange}
            value={formData.message}
            className="p-1 border-2 border-gray-300"
          />
        </div>
        {/* Display general error message */}
        {errorMessage && (
          <div className="text-red-500 mb-4">
            <p className="text-[12px]">{errorMessage}</p>
          </div>
        )}

        <div className="w-full flex justify-center gap-2">
          <button
            className="bg-[#272761] text-white w-full p-2"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
          <button
            className="bg-red-500 text-white w-full p-2"
            type="button"
            disabled={submitting}
            onClick={()=> handleCancel()}
          >
           Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
