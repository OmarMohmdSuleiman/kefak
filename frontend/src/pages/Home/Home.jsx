import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./Home.css";
import HomeImg from "../../assets/images/home-img.png";
import AboutusImg from "../../assets/images/about-us-img.png";
import CommunicateImg from "../../assets/images/communicate-img.png";
import telephoneImg from "../../assets/images/telephone-img.png";
import emailImg from "../../assets/images/email-img.png";

function Home({homeRef,aboutRef,contactRef}) {
  const {user}=useContext(AuthContext);
  
  return (
    <>
      <div ref={homeRef}  className="home-div flex center">
        <div className="home-div-one">
          <h1>💬 Connect, Chat, and Stay Close!</h1>
          <h3>Instant messaging, voice, and video calls all in one place.</h3>
          {user ? (
            <button>You Already signed in now</button>
          ):(
            <button>Sign Up for Free</button>
          )}
        </div>

        <div className="home-div-two">
          <img src={HomeImg} alt="" />
        </div>
      </div>

      {/* My added Changes */}

      {/*Features */}

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

      {/*About Us*/}
      <div ref={aboutRef} className="about-us-div flex ">
        <div className="about-us-div-one">
          <img src={AboutusImg} alt="" />
        </div>

        <div className="about-us-div-two flex column ">
          <h1>About Us</h1>
          <h3>
            At ExpandMind, we are dedicated to revolutionizing online learning
            by providing a dynamic platform where instructors can teach,
            students can grow, and admins can ensure a seamless educational
            experience. Our mission is to make quality education accessible to
            everyone through innovation and technology. Join us in shaping the
            future of learning!
          </h3>
        </div>
      </div>

      {/*Contact Us*/}

      <div ref={contactRef} className="contact-us-div flex center">
        <img className="telephone-img" src={telephoneImg} alt="" />
        <img className="email-img" src={emailImg} alt="" />

        <div className="contact-us-div-one flex column">
          <h1>Contact Us</h1>
          <form className="flex column">
            <input
              className="input form-one"
              placeholder="Name"
              required
            ></input>
            <input
              className="input form-one"
              placeholder="Email"
              required
            ></input>
            <textarea className="textarea form-one" placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-us-div-two">
          <img src={CommunicateImg} alt="" />
        </div>
      </div>
    </>
  );
}


Home.propTypes = {
  homeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // Ensures aboutRef is a valid ref
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // Ensures contactRef is a valid ref
};
export default Home;
