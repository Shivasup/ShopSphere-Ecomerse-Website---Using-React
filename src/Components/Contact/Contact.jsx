import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_76a1fmv",
      "template_r1kmh3j",
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      "1QSbLhvPOBq6-jyyJ"
    )
    .then(() => {
      setType("success");
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error(error);
      setType("error");
      setStatus("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="contact-container">

      <h1>Contact Us</h1>
      <p>Have a question or feedback? We'd love to hear from you.</p>

      {status && (
        <div className={`status-msg ${type}`}>
          {status}
        </div>
      )}

      <form className="contact-form" onSubmit={sendEmail}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
};

export default Contact;