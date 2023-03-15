import profilePic from "./assets/profilePic.png";

function App() {
  return (
    <div className="card">
      <div className="user-info">
        <img className="profile-pic" src={profilePic} alt="" />
        <p>Tina V. invited you to join</p>
        <h2>Channel name</h2>
        <p className="follower">46K Active users・78K Total users</p>
      </div>
      <div className="form">
        <form action="">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            aria-label="Enter Name"
            id="name"
            className="name-input"
            placeholder="How do you like people to call you?"
          />
          <label htmlFor="terms">
            <input type="checkbox" name="terms" id="terms" />I have read and
            agree to the Terms of service and Privacy policy.
          </label>
          <button type="submit">Continue</button>
        </form>
      </div>
      <a href="#">Already have an account</a>
    </div>
  );
}

export default App;
