import { Link } from "react-router-dom";

function Signup() {
    return (
      <div className="Signup">
          <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
              <input type="text" name="" required/>
              <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required/>
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required/>
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required/>
            <label>Phone Number</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required/>
            <label>Address</label>
          </div>
          <Link to="Login">
            Submit
          </Link>
        </form>
      </div>
      </div>
    );
  }
  
  export default Signup;
  