//import React from "react";
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

      {/* My added Changes */}

      <div className="chooseUs-div flex column center">
        <div className="chooseUs-div-one">
          <h1>🚀 Why Choose Us?</h1>
        </div>
        <div className="chooseUs-div-two flex">
          <div className="box-border center flex column choose-us-img-one">
          <h3>Real-time Messaging</h3>
          <h4>Send and receive messages instantly.</h4>
          <img src={HomeImg} alt="" />
          </div>
          <div className="box-border center flex column choose-us-img-two">
          <h3>Real-time Messaging</h3>
          <h4>Send and receive messages instantly.</h4>
          <img src={HomeImg} alt="" />
          </div>
          <div className="box-border center flex column choose-us-img-three">
          <h3>Real-time Messaging</h3>
          <h4>Send and receive messages instantly.</h4>
          <img src={HomeImg} alt="" />
          </div>

        </div>
        
      </div>
    </>
  );
}

export default Home;
