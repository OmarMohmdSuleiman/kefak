import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";
import ApplogoImg from "../../assets/images/App-logo.png";
import RegisterImg from "../../assets/images/signup-img.png";
import LoginUserImg from "../../assets/images/login-user-img.png";

function Register() {
  const navigate = useNavigate();
  
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  

  const onSubmit=async (data) => {
    try{
      const response= await fetch("http://localhost:8080/register",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    const theData=await response.json();
    if(response.ok){
      navigate("/login");
    }else{
      setError(theData.message || "Registration failed")
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
                <form className="form-two flex column" onSubmit={handleSubmit(onSubmit)}>
                  <div className="name-input flex center">
                    <div>
                      <img src={null} alt="" />
                      <input
                        type="text"
                        className="first-name"
                        name="firstName"
                        placeholder="First name"
                        {...register("firstName", { required: "First name is required" })}
                        required
                      />
                      {errors.firstName && (
                        <p style={{ color: "red" }}>{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <img src={null} alt="" />
                      <input
                        type="text"
                        className="last-name"
                        name="lastName"
                        placeholder="Last name"
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && (
                        <p style={{ color: "red" }}>{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <img src={null} alt="" />
                    <input
                      type="email"
                      className=""
                      name="email"
                      placeholder="Email"
                      {...register("email", { required: "Email is required" })}
                      required
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <img src={null} alt="" />
                    <input
                      type="password"
                      className=""
                      name="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      required
                    />
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password.message}</p>
                    )}
                  </div>
                  <div>
                    <img src={null} alt="" />
                    <input
                      type="password"
                      className=""
                      name="confirmPassword"
                      placeholder="Confirm password"
                      
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
