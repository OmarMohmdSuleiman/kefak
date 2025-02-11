import React from "react";
import "./Home.css";
import HomeImg from "../../assets/images/home-img.png";

function Home() {
  return (
    <>
      <div className="home-div flex center">
        <div className="home-div-one">
          <h1>💬 Connect, Chat, and Stay Close!</h1>
          <h3>Instant messaging, voice, and video calls all in one place.</h3>
          <button>Sign Up for Free</button>
        </div>

        <div className="home-div-two">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
