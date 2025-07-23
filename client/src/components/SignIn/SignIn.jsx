import './SignIn.css';

function SignIn() {
  return (
    <div className="signInContainer">
      <h2>Sign In</h2>
      <form className="signInForm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="you@example.com" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="••••••••" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
