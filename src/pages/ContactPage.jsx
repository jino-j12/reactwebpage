import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:5001/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 border rounded"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-3 border rounded"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
      >
        Send Message
      </button>
      {status && <p className="mt-2 text-green-600">{status}</p>}
    </form>
  );
};

export default ContactForm;
