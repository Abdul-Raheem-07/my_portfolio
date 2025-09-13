import React, { useState } from "react";
import "./contact.css";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // limit description to 1200 characters
    if (name === "description" && value.length > 1200) return;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle submit → open Gmail compose
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.description) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = `Message from ${formData.name} (${formData.email})`;
    const body = `${formData.description}\n\nSender Email: ${formData.email}`;

    // Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dotabdulraheemofficial07@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank"); // open Gmail in new tab

    // clear form after submit
    setFormData({
      name: "",
      description: "",
      email: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>
        Get in <span className="highlight">Touch</span>
      </h2>

      <div className="contact-cards">
        {/* Phone Card */}
        <div className="contact-card">
          <h3>Phone</h3>
          <a href="tel:+923124927784">+92 312 4927784</a>
        </div>

       {/* Email Card */}
<div className="contact-card">
  <h3>Email</h3>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=dotabdulraheemofficial07@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    dotabdulraheemofficial07@gmail.com
  </a>
</div>

      </div>

      {/* Icons Section */}
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/abdul-raheem-007ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>

        {/* Gmail direct compose */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=dotabdulraheemofficial07@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaEnvelope size={30} />
  </a>

        <a href="tel:+923124927784">
          <FaPhone size={30} />
        </a>
      </div>

      {/* ✅ Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Message</label>
        <textarea
          id="description"
          name="description"
          placeholder="Write your message (max 1200 characters)"
          value={formData.description}
          onChange={handleChange}
          maxLength={1200}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
