import "./ChatWindow.css";
import ContactImg from "../../assets/images/chat-user-img.png";
import VideoImg from "../../assets/images/video-img.png";
import CallImg from "../../assets/images/telephone-img.png";
import DotsImg from "../../assets/images/dots-img.png";
import SmileImg from "../../assets/images/smile-img.png";
import SendImg from "../../assets/images/send-img.png"

function ChatWindow(){


    return(
        <div className="chat-window flex column">

            <div className="chat-window-div-one flex">
                <div className="chat-window-contact flex ">
                    <img src={ContactImg} alt="" />
                    <h2>Amora</h2>
                </div>
                <div className="chat-window-contact-imgs flex">
                    <img src={VideoImg} alt="" />
                    <img src={CallImg} alt="" />
                    <img src={DotsImg} alt="" />
                </div>
            </div>
            <div className="chat-window-div-two">

            </div>
            <div className="chat-window-div-three flex">
                <button><img src={SmileImg} alt="" /></button>
                <form  className="Message-form">
                    <input
                        id="message"
                        name="message"
                        placeholder="Message"
                        required
                    />
                </form>
                <button><img src={SendImg} alt="" /></button>
            </div>

        </div>
    )
}

export default ChatWindow;