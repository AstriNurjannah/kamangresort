import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ganti dengan endpoint Formspree-mu
    const FORM_ENDPOINT = "https://formspree.io/f/mdkwzyql"; 

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000); // Hapus alert setelah 5 detik
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-content-with-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 className="display-4 fw-bold" style={{ color: "#315B50" }}>
                Contact Us
              </h1>
              <p className="lead">
                Get in touch with us. We'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Informasi Kontak */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-card h-100">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Get In Touch</h3>
                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Address</h6>
                        <p className="text-muted mb-0">
                          Pauah–Bukittinggi Main Road, Kamang Mudiak, Agam, West
                          Sumatra
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Phone</h6>
                        <p className="text-muted mb-0"> +123-456-7890</p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Email</h6>
                        <p className="text-muted mb-0">team8bbpvp@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className="bi bi-clock-fill"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Business Hours</h6>
                        <p className="text-muted mb-0">
                          Mon – Fri: 9:00 AM – 6:00 PM
                          <br />
                          Sat – Sun: 9:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak */}
            <div className="col-lg-8 col-md-6">
              <div className="contact-form-card">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Send us a Message</h3>

                  {submitStatus === "success" && (
                    <div
                      className="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Success!</strong> Your message has been sent
                      successfully.
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSubmitStatus("")}
                      ></button>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div
                      className="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Error!</strong> There was a problem sending your
                      message. Please try again.
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSubmitStatus("")}
                      ></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter the subject"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Enter your message here..."
                      ></textarea>
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
