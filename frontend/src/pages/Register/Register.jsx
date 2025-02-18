import "./Register.css";
import ApplogoImg from "../../assets/images/App-logo.png";
import RegisterImg from "../../assets/images/signup-img.png";
import LoginUserImg from "../../assets/images/login-user-img.png";

function Register() {
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
              <form className="form-two flex column">
                <div className="name-input flex center">
                  <div>
                    <img src="" alt="" />
                    <input
                      type="text"
                      className="first-name"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <img src="" alt="" />
                    <input
                      type="text"
                      className="last-name"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div>
                  <img src="" alt="" />
                  <input
                    type="email"
                    className=""
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div>
                  <img src="" alt="" />
                  <input
                    type="password"
                    className=""
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <div>
                  <img src="" alt="" />
                  <input
                    type="password"
                    className=""
                    placeholder="Confirm password"
                    required
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
