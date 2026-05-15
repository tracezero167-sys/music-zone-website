import { useEffect, useState } from "react";

function EnrollmentPopup() {

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: ""
  });

  useEffect(() => {

    const submitted = localStorage.getItem(
      "musicZoneEnrollmentSubmitted"
    );

    if (!submitted) {

      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 4000);

      return () => clearTimeout(timer);
    }

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const whatsappMessage =
`🎵 Music Zone Enrollment

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

🎼 Course: ${formData.course}

📝 Message: ${formData.message}`;

    const whatsappURL =
`https://wa.me/919575335798?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    localStorage.setItem(
      "musicZoneEnrollmentSubmitted",
      "true"
    );

    setShowPopup(false);
  };

  const closePopup = () => {

    setShowPopup(false);

    setTimeout(() => {

      const submitted = localStorage.getItem(
        "musicZoneEnrollmentSubmitted"
      );

      if (!submitted) {
        setShowPopup(true);
      }

    }, 8000);

  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="popup-overlay">

      <div className="enrollment-popup">

        <button
          className="popup-close"
          onClick={closePopup}
        >
          ×
        </button>

        <h2>Enroll Now</h2>

        <p>
          Join Music Zone Classes Burhanpur
        </p>

        <form
          onSubmit={handleSubmit}
          className="enrollment-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            onChange={handleChange}
          />

          <select
            name="course"
            required
            onChange={handleChange}
          >

            <option value="">
              Select Course
            </option>

            <option>
              Guitar Training
            </option>

            <option>
              Harmonium Classes
            </option>

            <option>
              Keyboard Classes
            </option>

            <option>
              Vocal Training
            </option>

            <option>
              Vacancy Based Training
            </option>

          </select>

          <textarea
            rows="3"
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Submit Enrollment
          </button>

        </form>

      </div>

    </div>
  );
}

export default EnrollmentPopup;