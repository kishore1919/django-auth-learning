
function App() {
  return (
    <div className="App">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
              <input type="text" name="" required/>
              <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required/>
            <label>Password</label>
          </div>
          <a href="#">
            Submit
          </a>
        </form>
      </div>

    </div>
  );
}

export default App;
