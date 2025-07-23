import { useState } from 'react';
import './SignUp.css';
// Please make this popup , which would popup when the signup button is clicked (signup button is in the nav bar)
// same for sign in
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just log for now
    console.log('Email:', email);
    console.log('Password:', password);

  };

  return (
    <div className="signInContainer">
      <h2>Sign Up</h2>
      <form className="signInForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Add another section called confirnm password which stores the password only if pass and confrirm pass match  */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="•••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUp;
