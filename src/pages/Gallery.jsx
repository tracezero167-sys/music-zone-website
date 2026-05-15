import { Link } from "react-router-dom";

import achievementImg from "../assets/gallery/achievements/pic1.jpg";
import trainingImg from "../assets/gallery/training/pic1.jpg";
import vacancyImg from "../assets/gallery/VacancyTraining/pic1.jpg";

function Gallery() {
  const folders = [
    {
      title: "Achievements",
      image: achievementImg,
      path: "/gallery/achievements",
    },
    {
      title: "Music Training Session",
      image: trainingImg,
      path: "/gallery/training",
    },
    {
      title: "Vacancy Training Session",
      image: vacancyImg,
      path: "/gallery/vacancy-training",
    },
  ];

  return (
    <div className="page">
      <section className="page-banner">
        <h1>Gallery</h1>
      </section>

      <section className="gallery-container">
        {folders.map((folder, index) => (
          <Link to={folder.path} className="gallery-card" key={index}>
            <img src={folder.image} alt={folder.title} />
            <h3>{folder.title}</h3>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Gallery;