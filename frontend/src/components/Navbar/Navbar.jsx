import "./Navbar.css";
import AppLogoImg from "../../assets/images/App-logo.png";
import PropTypes from "prop-types";


function Navbar({ scrollToSection }){
    
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
                <button>Log in</button>
            </div>
        </div>

    )
}

Navbar.propTypes = {
    scrollToSection: PropTypes.func.isRequired, 
};



export default Navbar;