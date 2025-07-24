import { useState } from 'react';
import './SignUp.css';

function SignUp({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="signUpContainer" onClick={(e) => e.stopPropagation()}>
        <h2>Sign Up</h2>
        <form className="signUpForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>

        <button onClick={onClose} className="closeModalButton">Close</button>

      </div>
    </div>
  );
}

export default SignUp;
