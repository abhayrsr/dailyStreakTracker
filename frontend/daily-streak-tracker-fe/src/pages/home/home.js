import "./home.css";
import React from "react";
import Light from "../../components/Light/light";
import Signin from "../../components/Buttons/signInButton/signIn";
import StreakosLogo from "../../assets/images/StreakosCrop.png";
import TasksList from "../../assets/images/TaskListImage.png";
import heatmap from "../../assets/images/heatmap .png";
import Efficiency from "../../assets/images/Efficiency.png";

export default function Home() {

  return (
    <div className="home">
      <nav className="nav">
        <div className="logo">
          <img className="image" src={StreakosLogo} alt="logo" />
        </div>
        <div className="header-button-signout">
          <Light />
          <Signin/>
        </div>
        <div className="header-button-light"></div>
      </nav>

      <div className="home-writing">
        <div className="section1">
          <div className="writing-section1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="image-section1">
            <img className="image-tasklists" src={TasksList} alt="taskslist" />
          </div>
        </div>

        <div className="section2">
          <div className="image-section2">
            <img
              className="image-efficiency"
              src={Efficiency}
              alt="efficiency"
            />
          </div>
          <div className="writing-section2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

        <div className="section3">
          <div className="image-section3">
            <img className="image-heatmap" src={heatmap} alt="heatmap" />
          </div>
          <div className="writing-section3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      <hr className="break"></hr>
      <div className="media-handles-policies">
        <h3 className="social-media-handles"> social media handles </h3>
        <p className="copyright"> Copyright © 2024 streakos.com All rights reserved.</p>
        <p className="contact"> contact: support@streakos.com </p>
        <div className="links">
          <a className="privacy" href="dummy">Privacy</a>
          <a className="terms" href="dummy"> Terms</a>
        </div>
      </div>
    </div>
  );
}
