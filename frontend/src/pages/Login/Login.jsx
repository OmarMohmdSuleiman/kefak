import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import ApplogoImg from "../../assets/images/App-logo.png";
import LoginImg from "../../assets/images/login-img.jpg";
import LoginUserImg from "../../assets/images/login-user-img.png";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userfirstName, setuserFirstName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Nice");
        
        setuserFirstName(data.firstName);  
        setIsLoggedIn(true); 
      } else {
        setError(data.message || "Login failed");
      }

    }catch(error){
      setError("Server error, please try again");

    }
  };
  return (
    <>
      <div className="login flex column">
        <div className="login-div-one">
          <img src={ApplogoImg} alt="" />
        </div>
        <div className="login-div-two flex ">
          <img src={LoginImg} alt="" />
          <div className="login-div-two-form flex column t-center">
          {isLoggedIn && userfirstName ? ( 
            <h1>Welcome, {userfirstName}!</h1>
          ) : (
            <>
              <div>
                <img src={LoginUserImg} alt="" />
              </div>

              <div className="div-form-two">
                <form className="form-two flex column center" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className=""
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    className=""
                    placeholder="•••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <h4>Remember me</h4>
                  <button type="submit">Login</button>
                </form>
              </div>
            </>
          )}
          {error && <p className="error-message">{error}</p>}
            <div className="div-google flex column">
              <h4 className="h4-one">Forget Your Password</h4>
              <h4 className="h4-two">
                Don&apos;t have an account? <a href="#">SignUp</a>
              </h4>
              <div className="div-or flex">
                <div
                  style={{
                    width: "42%",
                    border: "none",
                    borderBottom: "2px solid #565656",
                    marginBottom: "5px",
                  }}
                ></div>
                <h4>or</h4>
                <div
                  style={{
                    width: "42%",
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

export default Login;
