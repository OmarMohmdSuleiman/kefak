import "./Navbar.css";
import AppLogoImg from "../../assets/images/App-logo.png";


function Navbar(){
    return(
        <div className="Navbar flex t-center">
            <div className="Navbar-logo">
                <img src={AppLogoImg} alt="" />
            </div>
            <div className="Navbar-href flex">
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Contact Us</a>
            </div>
            <div className="Navbar-login-btn">
                <button>Log in</button>
            </div>
        </div>

    )
}

export default Navbar;