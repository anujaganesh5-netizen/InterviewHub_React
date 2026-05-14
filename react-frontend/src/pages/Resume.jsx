import React, { useRef } from "react";
import "../styles/resume.css";

const templates = [
  {
    image: "/assets/resumes/resume1.png",
    link: "https://www.canva.com/templates/EAEszf9W2oE/",
  },
  {
    image: "/assets/resumes/resume2.png",
    link: "https://www.canva.com/templates/EAFTjAA9PN4/",
  },
  {
    image: "/assets/resumes/resume3.png",
    link: "https://www.canva.com/templates/EAGnfxj9HIo/",
  },
  {
    image: "/assets/resumes/resume4.png",
    link: "https://www.canva.com/templates/EAGLUN2JBjU/",
  },
  {
    image: "/assets/resumes/resume5.png",
    link: "https://www.canva.com/templates/EAFiuxrnmdo/",
  },
  {
    image: "/assets/resumes/resume6.png",
    link: "https://www.canva.com/templates/EAFCLGUoLDY/",
  },
  {
    image: "/assets/resumes/resume7.png",
    link: "https://www.canva.com/templates/EAG0CLiNydQ/",
  },
  {
    image: "/assets/resumes/resume8.png",
    link: "https://www.canva.com/templates/EAFCMkaA7Y4/",
  },
  {
    image: "/assets/resumes/resume9.png",
    link: "https://www.canva.com/templates/EAGOwpsX7EM/",
  },
  {
    image: "/assets/resumes/resume10.png",
    link: "https://www.canva.com/templates/EAGF8CQJ168/",
  },
  {
    image: "/assets/resumes/resume11.png",
    link: "https://www.canva.com/templates/EAGJDSp2ZUg/",
  },
  {
    image: "/assets/resumes/resume12.png",
    link: "https://www.canva.com/templates/EAGYXhip3y4/",
  },
];

const Resume = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <main className="main-section">

      <h1 className="resume-title">
        Pick one of many world-class templates
        and build your resume in minutes
      </h1>

      <div className="slider-container">

        <button className="arrow left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="resume-slider" ref={sliderRef}>
          {templates.map((template, index) => (
            <div className="resume-card" key={index}>
              <a
                href={template.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={template.image}
                  alt={`resume-${index}`}
                />
              </a>

              <a
                href={template.link}
                target="_blank"
                rel="noreferrer"
                className="use-btn"
              >
                Use Template
              </a>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          ❯
        </button>

      </div>
    </main>
  );
};

export default Resume;