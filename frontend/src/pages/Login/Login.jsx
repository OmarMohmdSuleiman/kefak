import "./Login.css";
import ApplogoImg from "../../assets/images/App-logo.png";
import LoginImg from "../../assets/images/login-img.jpg";
import LoginUserImg from "../../assets/images/login-user-img.png";


function Login(){
    return (
        <>
        <div className="login flex column"> 
            <div className="login-div-one">
                <img src={ApplogoImg} alt="" />
            </div>
            <div className="login-div-two flex " >
            <img src={LoginImg} alt="" />
            <div className="login-div-two-form flex column t-center">
                <div>
                    <img src={LoginUserImg} alt="" />
                </div>
                
                <div className="div-form-two">
                    <form className="form-two flex column">
                        <input className="" placeholder="example@gmail.com" required></input>
                        <input className="" placeholder="•••••••••••" required></input>
                        <h4>Remember me</h4>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className="div-google flex column">
                    <h4 className="h4-one">Forget Your Password</h4>
                    <h4 className="h4-two">Don&apos;t have an account? <a href='#'>SignUp</a></h4>
                    <div className="div-or flex">
                        <div style={{ width: "42%",border:"none", borderBottom: "2px solid #565656", marginBottom: "5px", }}> </div>
                        <h4>or</h4>
                        <div style={{ width: "42%",border:"none", borderBottom: "2px solid #565656", marginBottom: "5px", }}> </div>
                    </div>
                    <button>Continue with Google</button>
                </div>

            </div>

            </div>
        </div>
        </>
    )
}

export default Login;