function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");
  }

  return (
    <section className="page">
      <p className="tag">06 — CONTACT</p>

      <h1 className="page-title">Let's Connect</h1>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in touch</h2>

          <p>
            I'm interested in learning, collaborating and exploring
            new opportunities.
          </p>

          <div className="contact-links">
            <a href="mailto:swathikoppolu.0001@gmail.com">
              ✉ swathikoppolu.0001@gmail.com
            </a>

            <a
              href="https://github.com/swathikoppolu0001-ship-it"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/swathi-koppolu-76114537b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="button filled">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;