import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import ApplogoImg from "../../assets/images/App-logo.png";
import RegisterImg from "../../assets/images/signup-img.png";
import LoginUserImg from "../../assets/images/login-user-img.png";

function Register() {
  const navigate = useNavigate();
  const [userData,setuserData]=useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit=async (e) => {
    e.preventDefault();
    try{
      const response= await fetch("http://localhost:8080/register",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    const data=await response.json();
    if(response.ok){
      navigate("/login");
    }else{
      setError(data.message || "Registration failed")
    }

    }catch (error) {
      setError("Server error, please try again");
    }
  }
  return (
    <>
      <div className="login flex column">
        <div className="login-div-one">
          <img src={ApplogoImg} alt="" />
        </div>
        <div className="login-div-two flex ">
          <img src={RegisterImg} alt="" />
          <div className="login-div-two-form flex column t-center">
            <div className="user-img">
              <img src={LoginUserImg} alt="" />
            </div>

            <div className="div-form-two">
              <form className="form-two flex column" onSubmit={handleSubmit}>
                <div className="name-input flex center">
                  <div>
                    <img src={null} alt="" />
                    <input
                      type="text"
                      className="first-name"
                      name="firstName"
                      placeholder="First name"
                      value={userData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <img src={null} alt="" />
                    <input
                      type="text"
                      className="last-name"
                      name="lastName"
                      placeholder="Last name"
                      value={userData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <img src={null} alt="" />
                  <input
                    type="email"
                    className=""
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div>
                  <img src={null} alt="" />
                  <input
                    type="password"
                    className=""
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div>
                  <img src={null} alt="" />
                  <input
                    type="password"
                    className=""
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="terms flex">
                  <input
                    className="terms-checkbox"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value="agree"
                  />
                  <label htmlFor="terms"> I agree to the Terms of User</label>
                </div>
                <button type="submit">Sign up</button>
              </form>
            </div>
            <div className="div-google flex column center">
              <h4 className="h4-two">
                Already have an account? <a href="#">Log in</a>
              </h4>
              <div className="div-or flex">
                <div
                  style={{
                    width: "110px",
                    border: "none",
                    borderBottom: "2px solid #565656",
                    marginBottom: "5px",
                  }}
                ></div>
                <h4>or</h4>
                <div
                  style={{
                    width: "110px",
                    border: "none",
                    borderBottom: "2px solid #565656",
                    marginBottom: "5px",
                  }}
                ></div>
              </div>
              <button>Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
