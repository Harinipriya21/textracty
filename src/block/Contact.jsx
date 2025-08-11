import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
    // You can add actual form handling logic here (API call, email, etc.)
  };

  return (
    <div>
      <h1>Contact</h1>
      <p><strong>Team:</strong> Team Tesseract</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:textracty@gmail.com">textracty@gmail.com</a>
      </p>
      <p><strong>Contact Number:</strong> 9003538951</p>

      <h2>Ask a Question</h2>
      {submitted ? (
        <p>Thank you for your question! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:<br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:<br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Question:<br />
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
                rows={4}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
