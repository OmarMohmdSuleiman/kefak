import "./Navbar.css";
import AppLogoImg from "../../assets/images/App-logo.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


function Navbar({ scrollToSection }){
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);

    const handleClick = ()=>{
        navigate("/login")
    }
    
    return(
        <div className="Navbar flex t-center">
            <div className="Navbar-logo">
                <img src={AppLogoImg} alt="" />
            </div>
            <div className="Navbar-href flex">
                <button onClick={()=> scrollToSection("home")} >Home</button>
                <button onClick={() => scrollToSection("about")}  >About Us</button>
                <button onClick={() => scrollToSection("contact")} >Contact Us</button>
            </div>
            <div className="Navbar-login-btn">
                {user? (
                    <button>{user.name}</button> ) :

                (
                    <button onClick={handleClick}>Log in</button>
                )
                }
                
            </div>
        </div>

    )
}

Navbar.propTypes = {
    scrollToSection: PropTypes.func.isRequired, 
};



export default Navbar;