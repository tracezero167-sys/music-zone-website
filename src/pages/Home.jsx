import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">

          <img
            src={logo}
            alt="Music Zone Classes"
            className="hero-logo"
          />

          <h1>Music Zone Classes Burhanpur</h1>

          <p>
            Professional Music Training & Vacency Preparation
          </p>

          <div className="hero-buttons">
            <a href="tel:+919575335798">
              Call Now
            </a>

            <a
              href="https://wa.me/919575335798"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="courses-preview">
        <h2>Our Popular Courses</h2>

        <div className="course-cards">

          <div className="card">
            <h3>Dholak Training</h3>
            <p>Beginner to advanced practical training.</p>
          </div>

          <div className="card">
            <h3>Harmonium Classes</h3>
            <p>Learn classical & modern harmonium skills.</p>
          </div>

          <div className="card">
            <h3>Vacancy Based Training</h3>
            <p>Special preparation for police band recruitment.</p>
          </div>

        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Us?</h2>

        <div className="why-box">

          <div className="card">
            <h3>Professional Training</h3>
            <p>Practical learning with expert guidance.</p>
          </div>

          <div className="card">
            <h3>Beginner Friendly</h3>
            <p>Start from zero and become professional.</p>
          </div>

          <div className="card">
            <h3>Vacancy Training</h3>
            <p>Dedicated batches for recruitment preparation.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;