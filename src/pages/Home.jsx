import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import "./Home.css";
import Video from "../assets/home_video.mp4";
// import About_img from "../assets/about.png";


function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
        <h1 id="welcomeText">Hello User</h1>
        <h2>WELCOME TO INTERVIEWHUB</h2>
        <video src={Video}></video>
      </section>

      <section className="about">
        <div className="about-container">
          {/* <div className="about-image">
            <img src={About_img} alt="about img" />
          </div> */}
          <div className="about-text">
            <h2>About InterviewHub</h2>
            <p>
              InterviewHub helps students and professionals learn about
              different job roles and practice interview questions to improve
              their career opportunities. Our platform provides career insights,
              interview preparation resources, and job role guidance to help
              users succeed in their professional journey.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
