import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollTop from "./components/ScrollTop";
import EnrollmentPopup from "./components/EnrollmentPopup";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import VacancyTraining from "./pages/VacancyTraining";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import "./style.css";

function App() {
  return (
    <BrowserRouter>

      <ScrollTop />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/vacancy-training"
          element={<VacancyTraining />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <WhatsAppButton />

      <EnrollmentPopup />

      <Footer />

    </BrowserRouter>
  );
}

export default App;