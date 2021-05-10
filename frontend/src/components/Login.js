import { Link } from 'react-router-dom'

import React from 'react'

function Login() {
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
        <div className="btn-box">
            <Link to="Landing">
            Submit
            </Link>
            <Link to="Signup">
            Signup!
            </Link>
        </div>
      </form>
    </div>
    </div>
    )
}
export default Login
