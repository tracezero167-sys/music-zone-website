function Contact() {
  return (
    <div className="page">

      <div className="page-banner">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <h2>Phone Numbers</h2>

          <p>+91 9575335798</p>
          <p>+91 6263777514</p>
        </div>

        <div className="contact-card">
          <h2>WhatsApp</h2>

          <a
            href="https://wa.me/919575335798"
            target="_blank"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h2>Instagram</h2>

          <a
            href="https://instagram.com/musiczoneclassesburhanpur"
            target="_blank"
          >
            @musiczoneclassesburhanpur
          </a>
        </div>

        <div className="contact-card">
          <h2>Location</h2>

          <p>Burhanpur, Madhya Pradesh</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;